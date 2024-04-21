import { create } from "zustand";

interface SidebarState {
  isSideBarOpen: boolean;
  setisSideBarOpen: (isOpen: boolean) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isSideBarOpen: false,
  setisSideBarOpen: (isSideBarOpen: boolean) => set({ isSideBarOpen }),
}));


export default useSidebarStore;

