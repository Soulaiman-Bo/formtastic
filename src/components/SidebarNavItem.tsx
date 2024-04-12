import { Link } from "@tanstack/react-router";

const SidebarNavItem = ({ name, id }: { name: string; id: string }) => {
  function capitalizeFirstLetter(word: string) {
    if (typeof word !== "string" || word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase();
  }

  return (
    <li>
      <Link to="/$workspaceId" params={{ workspaceId: id }}>
        <div className="bg-indigo-50 text-indigo-600 group flex rounded-md text-sm leading-6 font-semibold gap-x-3 p-2 my-1">
          <span className="text-indigo-600 border-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white">
            {capitalizeFirstLetter(name)}
          </span>
          {name}
          <span
            className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200 max-h-6"
            aria-hidden="true"
          >
            2
          </span>
        </div>
      </Link>
    </li>
  );
};

export default SidebarNavItem;
