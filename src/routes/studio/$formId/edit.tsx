import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/$formId/edit')({
  component: () => <div>Hello /studio/$formId/edit!</div>
})