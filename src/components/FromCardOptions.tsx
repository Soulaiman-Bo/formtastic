import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { SlOptions } from "react-icons/sl";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useState } from "react";

const FromCardOptions = () => {
  const [ArchiveOpen, setArchiveOpen] = useState<boolean>(false);
  const [DeleteOpen, setDeleteOpen] = useState<boolean>(false);

  const closeArchiveDialog = () => {
    setArchiveOpen(false);
  };

  const closeDeleteDialog = () => {
    setDeleteOpen(false);
  };

  return (
    <>
      <div className="h-full flex justify-center items-center flex-col">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SlOptions className="h-4 w-4 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-32">
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setArchiveOpen(true)}>
                Archive
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => setDeleteOpen(true)}
                className="text-red-500"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <FormAchrive open={ArchiveOpen} close={closeArchiveDialog} />
      <FormDelete open={DeleteOpen} close={closeDeleteDialog} />
    </>
  );
};

export default FromCardOptions;

function FormAchrive({ open, close }: { open: boolean; close: () => void }) {
  return (
    <AlertDialog open={open} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to archive The form?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex  flex-col gap-1 mb-3 mt-3">
              <p>Archived items will be moved to your archive folder.</p>
              <p>You can restore them at any time from the archive.</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function FormDelete({ open, close }: { open: boolean; close: () => void }) {
  return (
    <AlertDialog open={open} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete the Form?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex  flex-col gap-1 mb-3 mt-3">
              <p>This action is permanent and cannot be undone.</p>
              <p>
                Please confirm if you want to proceed with deleting these items.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant={"destructive"}>
            Yes, delete Form
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
