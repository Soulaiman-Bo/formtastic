import useSidebarStore from "@/context/useSidebarStore";
import LeftSidebar from "./LeftSidebar";
import PlaygroundMain from "./PlaygroundMain";
import RightSidebar from "./RightSidebar";

const Main = () => {
  const { isSideBarOpen, setisSideBarOpen } = useSidebarStore();

  const closeLeftSidebar = () => {
    setisSideBarOpen(false);
  };
  
  return (
    <>
      <LeftSidebar />
      <PlaygroundMain />
      {isSideBarOpen && <RightSidebar close={closeLeftSidebar} />}
    </>
  );
};

export default Main;
