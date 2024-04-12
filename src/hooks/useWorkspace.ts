import { PrivateAPI } from "@/lib/HttpClient";
import { useEffect, useState } from "react";

type Workspace = {
  id: string;
  name: string;
};



const useWorkspace = () => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    PrivateAPI.get<Workspace[]>("/workspaces")
      .then((response) => {
        setWorkspaces(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);


  return { workspaces, loading, error };
};

export default useWorkspace;
