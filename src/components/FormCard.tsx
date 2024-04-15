import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { formatDistanceToNow, parseISO } from "date-fns";
import FromCardOptions from "./FromCardOptions";
import { Link } from "@tanstack/react-router";

type form = {
  _id: string;
  workspace_id: string;
  name: string;
  description: string;
  visits: number;
  submittions: number;
  published: boolean;
  updated_at: string;
  created_at: string;
};

const TimeAgo = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  const cleanTimeAgo = timeAgo.replace(/about /gi, "");
  return <span className="text-gray-400 font-normal">{cleanTimeAgo}</span>;
};

export const FormCard: React.FC<{ form: form }> = ({ form }) => {
  return (
    <Card className="col-span-1 flex justify-between shadow-sm border-t-4 border-t-blue-400  rounded-md hover:shadow-gray-300 transition duration-200 ease-in-out hover:!shadow-md">
      <CardContent className="pt-6 ">

        <Link to="/studio/$formId" params={{ formId: form._id }}>
          <div>
            <div className="text-gray-700 font-medium hover:text-gray-600 truncate text-left">
              {form.name}
            </div>
            <div className="flex">
              <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
                <span className="text-gray-400 font-light">
                  {form.submittions === 0 ? (
                    "No Responses "
                  ) : (
                    <span className="font-normal text-green-400">
                      {form.submittions} Responses{" "}
                    </span>
                  )}
                  -
                </span>
              </span>
              <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
                <TimeAgo dateString={form.created_at} />
              </span>
            </div>
          </div>
        </Link>

      </CardContent>

      <CardFooter className="relative p-2 flex flex-col">
        <FromCardOptions />
      </CardFooter>
    </Card>
  );
};
