import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/studio/$workspaceId/form/$formId/preview"
)({
  component: Playground,
});

function Playground() {
  return <div>preview</div>;
}
