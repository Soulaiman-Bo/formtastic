import { useContext } from "react";
import { PlaygroundContext } from "../context/PlaygroundContext";

function usePlayground() {
  const context = useContext(PlaygroundContext);

  if (!context) {
    throw new Error("usePlayground must be used within a PlaygroundContext");
  }

  return context;
}

export default usePlayground;
