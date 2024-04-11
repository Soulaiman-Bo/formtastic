import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive({ message }: { message: string | undefined }) {
  return (
    <Alert className="mb-4" variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {message ? message : "An Error occured"}
      </AlertDescription>
    </Alert>
  );
}
