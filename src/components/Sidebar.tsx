import SidebarNavItems from "./SidebarNavItems";
import NewWorkspaceButton from "./NewWorkspaceButton";

const Sidebar = () => {
  return (
    <div className="md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
      <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex h-[74px] shrink-0 items-center">
          <a className="flex items-center flex-shrink-0" href="/home">
            <div className=" font-bold text-gray-700 ml-6 text-3xl flex items-center">
              {/* // logo here  */}
              <span className="ml-3">FormTastic</span>
            </div>
          </a>
        </div>
        <nav className="px-3 space-y-1 flex-grow overflow-y-auto border-t border-gray-200 pt-5">
          <div className="flex justify-between items-center mb-2">
            <div className="flex text-gray-400 font-semibold ml-1 justify-start items-center">
              Workspaces
            </div>
            <NewWorkspaceButton />
          </div>

          <SidebarNavItems />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
