import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/$formId/')({
  component: () => <div>Hello /studio/$formId/!</div>
})