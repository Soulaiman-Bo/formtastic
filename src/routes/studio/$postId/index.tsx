import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/$postId/')({
  component: () => <div>Hello /studio/$postId/!</div>
})