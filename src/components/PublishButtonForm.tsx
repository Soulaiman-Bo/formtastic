import usePublishForm from "@/hooks/usePublishForm";
import { Button } from "./ui/button";
import { ImSpinner2 } from "react-icons/im";
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

import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

import { Input } from "./ui/input";

const PublishButtonForm = ({formId}: {formId: string}) => {
  const [dailogOpen, setDailogOpen] = useState<boolean>(false);

  const closeArchiveDialog = () => {
    setDailogOpen(false);
  };

  const openDialog = () => {
    setDailogOpen(true);
  };

  const { mutate, isPending, data, isSuccess } = usePublishForm(openDialog);

  const PublishForm = () => {
    mutate({ published: "false" });
  };


  return (
    <div>
      <Button
        onClick={() => PublishForm()}
        className="h-[34px] px-3 !min-w-[100px]"
      >
        {isPending ? (
          <ImSpinner2 className="animate-spin ml-2 h-4 w-4" />
        ) : (
          "Publish"
        )}
      </Button>

      <PublishAlert formId={formId} open={dailogOpen} close={closeArchiveDialog} />
    </div>
  );
};

export default PublishButtonForm;

function PublishAlert({open, close, formId}: { open: boolean; close: () => void, formId: string }) {
   const shareUrl = `${window.location.origin}/form/${formId}`;
   const [copied, setCopied] = useState(false)

   const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);

      setCopied(true)

    } catch (err) {
      console.error('Failed to copy: ', err); 
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="rounded-lg flex items-center p-4 pr-10 border-[0.5px]  bg-green-50/90 border-green-400 mb-2 mt-2">
              <div className="flex-shrink-0">
                <FaCheckCircle className="h-5 w-5 text-green-400" />
              </div>
              <div className="flex justify-center flex-col w-full ml-3 text-sm font-medium  text-green-800 mb-0">
                Your form was published
              </div>
            </div>
            <div className="flex">
              <div className="flex w-full relative items-center">
                <div className="relative w-full">
                  <Input type="text" value={shareUrl} />
                </div>
              </div>
              <Button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-100 bg-gray-800 hover:bg-gray-600 focus:!ring-gray-500 focus:ring-0 focus:ring-offset-0 ml-2 whitespace-nowrap"
              >
                <MdOutlineContentCopy className="mr-2" />

                <span className="max-w-full overflow-hidden">{copied ? "Copied!": "Copy"}</span>
              </Button>
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
