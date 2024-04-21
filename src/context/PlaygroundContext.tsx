import { FormElementInstance } from "@/components/FormElements";
import useCreateFormSchema from "@/hooks/useCreateFormSchema";
import { ReactNode, useParams } from "@tanstack/react-router";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type PlaygroundContextType = {
  elements: FormElementInstance[];
  setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
  isSideBarOpen: boolean;
  setisSideBarOpen: Dispatch<SetStateAction<boolean>>;
  updateElement: (id: string, element: FormElementInstance) => void;
  setAllElements: (elements: FormElementInstance[]) => void
};

export const PlaygroundContext = createContext<PlaygroundContextType | null>(
  null
);

export default function PlaygroundContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);
  const [isSideBarOpen, setisSideBarOpen] = useState<boolean>(false);

  
  const { formId } = useParams({ strict: false }) as {
    workspaceId: string;
    formId: string;
  };



  const { mutate: createFormSchema } = useCreateFormSchema(formId);

  const addElement = (index: number, element: FormElementInstance) => {
      console.log("add element", {index});
      
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });

    createFormSchema(element);

  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.client_id !== id));
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.client_id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  const setAllElements = (elements: FormElementInstance[]) => {
    setElements(() => { return elements });
  };


  return (
    <PlaygroundContext.Provider
      value={{
        elements,
        setElements,
        setAllElements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        isSideBarOpen,
        setisSideBarOpen,
        updateElement,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
}
