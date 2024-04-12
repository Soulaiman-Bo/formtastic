import { Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import SidebarNavItemSkeleton from "./SidebarNavItemSkeleton";
import SidebarNavItems from "./SidebarNavItems";

const Sidebar = () => {
  return (
    <div className="md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
      <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex h-[74px] shrink-0 items-center">
          <a className="flex items-center flex-shrink-0" href="/home">
            <div className=" font-bold text-gray-700 ml-6 text-3xl flex items-center">
              {/* <svg
                width="26"
                height="21"
                viewBox="0 0 26 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="26" height="5" rx="2.5" fill="#ec4899"></rect>
                <rect
                  y="8"
                  width="26"
                  height="5"
                  rx="2.5"
                  fill="#38bdf8"
                ></rect>
                <rect
                  y="16"
                  width="16"
                  height="5"
                  rx="2.5"
                  fill="#fbbf24"
                ></rect>
                <rect
                  x="17"
                  y="16"
                  width="9"
                  height="5"
                  rx="2.5"
                  fill="#4ade80"
                ></rect>
              </svg> */}
              <span className="ml-3">FormTastic</span>
            </div>
          </a>
        </div>
        <nav className="px-3 space-y-1 flex-grow overflow-y-auto border-t border-gray-200 pt-5">
          <div className="flex justify-between items-center mb-2">
            <div className="flex text-gray-400 font-semibold ml-1 justify-start items-center">
              Workspaces
            </div>
            <div className="z-[14] flex  ">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className=" text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-0  rounded flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </DialogTrigger>

                <DialogContent className="md:min-w-[600px] top-[25%]">
                  <DialogHeader className="mb-2">
                    <DialogTitle>Create New Workspace</DialogTitle>
                    <DialogDescription>
                      Group related forms and share workspaces with your team
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col  gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                    />
                  </div>

                  <DialogFooter className="mt-4">
                    <Button
                      className="  focus:ring-offset-2 focus-visible:ring-blue-500 h-[42px] sm:h-[38px]  bg-blue-600 hover:bg-blue-700 text-white"
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Suspense fallback={<SidebarNavItemSkeleton />}>
            <SidebarNavItems />
          </Suspense>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
