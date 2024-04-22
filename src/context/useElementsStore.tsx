import { FormElementInstance } from "@/components/FormElements";
import { PrivateAPI } from "@/lib/HttpClient";
// import { QueryClient } from "@tanstack/react-query";
import { debounce } from "lodash";
import { create } from "zustand";

interface ElementsState {
  elements: FormElementInstance[];
  isLoading: boolean;
  error: string | null;
  order: string[];
  setElements: (elements: FormElementInstance[]) => void;
  addElement: (
    index: number,
    element: FormElementInstance,
    formId: string,
    workspaceId: string,
    invalidateData?: () => void
  ) => void;
  updateOrder: (
    index: number,
    element: FormElementInstance,
    formId: string,
    id: string,
    workspaceId: string
  ) => void;
  removeElement: (id: string) => void;
  removeElemtnFromOrder: (id: string) => void;
  updateElement: (id: string, element: FormElementInstance) => void;
  setAllElements: (elements: FormElementInstance[]) => void;
  setOrder: (order: string[]) => void;
  invalidate: () => void;
}

type FormSchemaResponse = {
  form_id: string;
  type: string;
  properties: Record<string, any>;
  updated_at: string;
  created_at: string;
  _id: string;
};

const useElementsStore = create<ElementsState>((set, get) => ({
  elements: [],
  isLoading: false,
  error: null,
  order: [],

  setElements: (elements: FormElementInstance[]) => {
    set({ elements, order: elements.map((el) => el.client_id) });
  },
  setOrder: (order: string[]) => set({ order }),

  addElement: (
    index: number,
    element: FormElementInstance,
    formId: string,
    workspaceId: string,
    invalidateData: () => void
  ) => {
    const previousElements = get().elements;
    const previousOrders = get().order;

    const newElements = [...previousElements];
    newElements.splice(index, 0, element);

    const newOrder = [...previousOrders];
    newOrder.splice(index, 0, element.client_id);

    set({ elements: newElements, order: newOrder, isLoading: true });

    console.log({ newOrder });

    debounce(() => {
      const saveElement = async () => {
        try {
          const elem = {
            ...element,
            formfields_order: newOrder,
          };
          console.log("kjdhkj");

          await PrivateAPI.post<FormSchemaResponse>(
            `/form/${formId}/formschema`,
            elem
          );

          set({ isLoading: false });

          //  invalidateData();
        } catch (error) {
          console.error(error);
          set({ elements: previousElements, order: previousOrders });
        }
      };
      saveElement();
    }, 2000)();
  },

  removeElemtnFromOrder: (id: string) => {
    const order = get().order.filter((element) => element !== id);
    set({ order });
  },

  updateOrder: (
    index: number,
    element: FormElementInstance,
    formId: string,
    id: string,
    workspaceId: string
  ) => {
    const previousOrders = get().order;
    const newOrder = [...previousOrders];

    newOrder.splice(index, 0, element.client_id);

    set({ order: newOrder, isLoading: true });

    console.log({ newOrder });

    debounce(() => {
      const saveElement = async () => {
        try {
          const elem = {
            formfields_order: newOrder,
          };

          await PrivateAPI.put<FormSchemaResponse>(
            `/workspaces/${workspaceId}/forms/${formId}`,
            elem
          );

          set({ isLoading: false });
        } catch (error) {
          console.error(error);
          set({ order: previousOrders });
        }
      };
      saveElement();
    }, 2000)();
  },

  removeElement: (id: string) => {
    const elements = get().elements.filter(
      (element) => element.client_id !== id
    );
    const order = get().order.filter((clientId) => clientId !== id);

    set({ elements, order });
  },

  updateElement: (id: string, element: FormElementInstance) => {
    set((state) => {
      const newElements = [...state.elements];
      const index = newElements.findIndex((el) => el.client_id === id);
      if (index !== -1) {
        newElements[index] = element;
      }
      return { elements: newElements };
    });
  },

  setAllElements: (elements: FormElementInstance[]) => set({ elements }),
}));

// const useElementsStore = (queryClient: QueryClient | undefined) => {

//   return create<ElementsState>((set, get) => ({
//     elements: [],
//     isLoading: false,
//     error: null,
//     order: [],

//     setElements: (elements: FormElementInstance[]) => {
//       set({ elements, order: elements.map((el) => el.client_id) });
//     },
//     setOrder: (order: string[]) => set({ order }),

//     addElement: (
//       index: number,
//       element: FormElementInstance,
//       formId: string,
//       workspaceId: string
//     ) => {
//       const previousElements = get().elements;
//       const previousOrders = get().order;

//       const newElements = [...previousElements];
//       newElements.splice(index, 0, element);

//       const newOrder = [...previousOrders];
//       newOrder.splice(index, 0, element.client_id);

//       set({ elements: newElements, order: newOrder, isLoading: true });

//       console.log({ newOrder });

//       debounce(() => {
//         const saveElement = async () => {
//           try {
//             const elem = {
//               ...element,
//               formfields_order: newOrder,
//             };

//             await PrivateAPI.post<FormSchemaResponse>(
//               `/form/${formId}/formschema`,
//               elem
//             );

//             set({ isLoading: false });

//             queryClient!.invalidateQueries({queryKey: [`forms-${workspaceId}`]});

//           } catch (error) {
//             console.error(error);
//             set({ elements: previousElements, order: previousOrders });
//           }
//         };
//         saveElement();
//       }, 2000)();
//     },

//     removeElement: (id: string) => {
//       const elements = get().elements.filter(
//         (element) => element.client_id !== id
//       );
//       const order = get().order.filter((clientId) => clientId !== id);

//       set({ elements, order });
//     },

//     updateElement: (id: string, element: FormElementInstance) => {
//       set((state) => {
//         const newElements = [...state.elements];
//         const index = newElements.findIndex((el) => el.client_id === id);
//         if (index !== -1) {
//           newElements[index] = element;
//         }
//         return { elements: newElements };
//       });
//     },

//     setAllElements: (elements: FormElementInstance[]) => set({ elements }),
//   }));

// };

// const useElementsStore = create<ElementsState>();

export default useElementsStore;
