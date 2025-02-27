import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/_dashboard/settings/_settings/notifications',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/dashboard/_dashboard/settings/_settings/notifications"!</div>
  )
}
