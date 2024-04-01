import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/$postId/edit')({
  component: () => <div>Hello /studio/$postId/edit!</div>
})