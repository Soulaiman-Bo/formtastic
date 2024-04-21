import useSidebarStore from "@/context/useSidebarStore";
import LeftSidebar from "./LeftSidebar";
import PlaygroundMain from "./PlaygroundMain";
import RightSidebar from "./RightSidebar";

const Main = ({formId} : {formId: string}) => {
  const { isSideBarOpen, setisSideBarOpen } = useSidebarStore();

  const closeLeftSidebar = () => {
    setisSideBarOpen(false);
  };
  return (
    <>
      <LeftSidebar />
      <PlaygroundMain formId={formId} />
      {isSideBarOpen && <RightSidebar close={closeLeftSidebar} />}
    </>
  );
};

export default Main;
