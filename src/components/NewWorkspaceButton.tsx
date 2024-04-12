import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const NewWorkspaceButton = () => {
  return (
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
  )
}

export default NewWorkspaceButton
