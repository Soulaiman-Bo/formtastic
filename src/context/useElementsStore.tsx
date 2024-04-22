import { FormElementInstance } from "@/components/FormElements";
import { PrivateAPI } from "@/lib/HttpClient";
import { debounce } from "lodash";
import { create } from "zustand";

interface ElementsState {
  elements: FormElementInstance[];
  isLoading: boolean;
  error: string | null;
  setElements: (elements: FormElementInstance[]) => void;
  addElement: (
    index: number,
    element: FormElementInstance,
    formId: string
  ) => void;
  removeElement: (id: string) => void;
  updateElement: (id: string, element: FormElementInstance) => void;
  setAllElements: (elements: FormElementInstance[]) => void;
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

  setElements: (elements: FormElementInstance[]) => set({ elements }),

  addElement: (index: number, element: FormElementInstance, formId: string) => {
    const previousElements = get().elements;

    const newElements = [...previousElements];
    newElements.splice(index, 0, element);

    set({ elements: newElements, isLoading: true });

    debounce(() => {
      const saveElement = async () => {
        try {
          await PrivateAPI.post<FormSchemaResponse>(
            `/form/${formId}/formschema`,
            element
          );

          set({ isLoading: false });
        } catch (error) {
          console.error(error);
          set({ elements: previousElements });
        }
      };
      saveElement();
    }, 2000)();
  },

  removeElement: (id: string) => {
    set((state) => ({
      elements: state.elements.filter((element) => element.client_id !== id),
    }));
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

export default useElementsStore;
