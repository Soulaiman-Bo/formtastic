import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-5">
        <Link to="/" className="[&.active]:font-bold  ml-3">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold ml-3">
          About
        </Link>
        <Link to="/contact" className="[&.active]:font-bold ml-3">
          contact Us
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
