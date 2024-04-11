import LogoutButton from "@/components/LogoutButton";
import { isAuthenticated } from "@/lib/auth";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex items-center justify-between px-8">
        <ul className="flex gap-4 p-5">
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {isAuthenticated() && <LogoutButton />}
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
