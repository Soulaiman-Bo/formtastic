import { FormElementInstance } from "@/components/FormElements";
import { create } from "zustand";

interface ElementsState {
  elements: FormElementInstance[];
  setElements: (elements: FormElementInstance[]) => void;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  updateElement: (id: string, element: FormElementInstance) => void;
  setAllElements: (elements: FormElementInstance[]) => void;
}

const useElementsStore = create<ElementsState>((set) => ({
  elements: [],

  setElements: (elements: FormElementInstance[]) => set({ elements }),

  addElement: (index: number, element: FormElementInstance) => {
    set((state) => {
      const newElements = [...state.elements];
      newElements.splice(index, 0, element);
      return { elements: newElements };
    });
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
