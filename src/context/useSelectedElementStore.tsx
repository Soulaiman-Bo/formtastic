import { FormElementInstance } from '@/components/FormElements';
import {create} from 'zustand';


interface SelectedElementState {
    selectedElement: FormElementInstance | null;
    setSelectedElement: (selectedElement: FormElementInstance | null) => void;
}


const useSelectedElementStore = create<SelectedElementState>((set) => ({
  selectedElement: null,
  setSelectedElement: (selectedElement: FormElementInstance | null) => set({ selectedElement }),
}));


export default useSelectedElementStore