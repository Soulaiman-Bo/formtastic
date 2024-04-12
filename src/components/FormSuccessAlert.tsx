import { CircleCheck } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function FormSuccessAlert({ message }: { message: string | undefined }) {
  return (
    <Alert className="mb-4" variant="success">
      <CircleCheck color="#22c55e" className="h-4 w-4 text-green-400" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        {message ? message : "Done"}
      </AlertDescription>
    </Alert>
  );
}

export default FormSuccessAlert;
