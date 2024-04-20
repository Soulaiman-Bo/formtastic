import { FormElements } from "@/components/FormElements";
import { Button } from "@/components/ui/button";
import usePlayground from "@/hooks/usePlayground";
import { Link, createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { ImHome3 } from "react-icons/im";

export const Route = createFileRoute(
  "/studio/$workspaceId/form/$formId/preview"
)({
  component: Playground,
});

function Playground() {
  const { elements } = usePlayground();

  const { formId, workspaceId } = Route.useParams();
  return (
    <div>
      <div className=" bg-gray-50 border-b-[0.5px] border-gray-300 flex-shrink-0">
        <div className="relative" aria-label="Global">
          <div className="pl-2 flex items-center w-full justify-between">
            <div className="font-medium flex items-center py-[11px] md:min-w-[310px] largeXl:min-w-[354px]">
              <div data-cy="home-button" className="flex">
                <Link
                  className="px-3 py-[9px] mr-1"
                  to="/dashboard/$workspaceId"
                  params={{ workspaceId: workspaceId }}
                >
                  <ImHome3 className="text-slate-500" />
                </Link>
              </div>

              <div className="ml-4 flex items-center">
                <div className="flex items-center">
                  <div className="inline-block z-[14]">
                    <div
                      data-cy="flow-name-navbar-component"
                      className="text-gray-400 truncate max-w-[100px]  lg:!max-w-[200px]   hover:border-gray-300 p-1 py-[2px] border-[1px] rounded hover:cursor-text border-transparent "
                    >
                      My form 1
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center py-[11px] pr-7 md:min-w-[310px] largeXl:min-w-[354px]">
              <div className="mr-4 flex">
                <Link
                  to="/studio/$workspaceId/form/$formId"
                  params={{ formId: formId, workspaceId: workspaceId }}
                >
                  <Button className="" variant={"default"}>
                    <X className="mr-1 h-5 w-5" />
                    Exit Preview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex w-full pt-12 sm:pb-4 justify-between items-center bg-gray-100 flex-col overflow-y-scroll relative h-screen-minus-58">
        <div className=" w-full pb-6 sm:pb-20 bg-white justify-center shadow-sm max-w-[650px] flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10">

          {elements.map((element) => {
            const PreviewComponent =
              FormElements[element.type].previewComponent;

            return (
              <div className="px-10 flex flex-col text-background w-full gap-6 p-4">
                <PreviewComponent key={element.id} elementInstance={element} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
