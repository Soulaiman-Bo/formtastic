import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$workspaceId")({
  component: Workspace,
});



function Workspace() {
  const { workspaceId } = Route.useParams();
  return <div>{workspaceId}</div>;
}
