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
  client_id: string;
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
        console.log("insert into DB: formSchemas: ", element);
        console.log("insert into DB: order: ", newOrder);
        try {
          const elem = {
            ...element,
            formfields_order: newOrder,
          };
          console.log("kjdhkj");

          const response = await PrivateAPI.post<FormElementInstance>(
            `/form/${formId}/formschema`,
            elem
          );

          if (response.status === 201) {
            set((state) => ({
              elements: state.elements.map((item) =>
                item.client_id === response.data.client_id
                  ? response.data
                  : item
              ),
            }));

            console.log(response.data);
          }

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
    const previousElements = get().elements;
    const previousOrders = get().order;

    const newElements = previousElements.filter(
      (element) => element.client_id !== id
    );

    const newOrder = previousOrders.filter((clientId) => clientId !== id);

    const elementToDelete = previousElements.find(
      (elm) => elm.client_id === id
    );

    console.log({elementToDelete});


    set({ elements: newElements, order: newOrder, isLoading: true });

    const removeTheElement = async () => {
      if (elementToDelete) {
        try {
          const response = await PrivateAPI.delete(
            `/form/${elementToDelete.form_id}/formschema/${elementToDelete._id}`
          );

          if (response.status === 201) {
            set({ isLoading: false });
          }

          set({ isLoading: false });
        } catch (error) {
          console.error(error);
          set({ elements: previousElements, order: previousOrders });
        }
      }
    };

    removeTheElement()


    
  },

  updateElement: (id: string, element: FormElementInstance) => {
    const previousElements = get().elements;
    const newElements = [...previousElements];

    const index = newElements.findIndex((el) => el.client_id === id);

    if (index !== -1) {
      newElements[index] = element;
    }

    set({ elements: newElements });

    debounceSaveElement(element, previousElements);
  },

  setAllElements: (elements: FormElementInstance[]) => set({ elements }),
}));

let saveTimeout;

function debounceSaveElement(element, previousElements) {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    saveElement(element, previousElements);
  }, 1500); // Debounce interval: 500ms
}

async function saveElement(element, previousElements) {
  console.log({ element });

  try {
    useElementsStore.setState({ isLoading: true });
    await PrivateAPI.put(
      `/form/${element.form_id}/formschema/${element._id}`,
      element
    );
    useElementsStore.setState({ isLoading: false });
  } catch (error) {
    console.error(error);
    useElementsStore.setState({ elements: previousElements, isLoading: false });
  }
}

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
