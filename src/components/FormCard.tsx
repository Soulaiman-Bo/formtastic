"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { SlOptions } from "react-icons/sl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { formatDistanceToNow, parseISO } from "date-fns";

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

export const FormCard: React.FC<form> = ({ form }) => {
  const [isHover, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(!isHover); // Toggle hover state on mouse enter/leave
  };

  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="col-span-1 flex justify-between shadow-sm border-t-4 border-t-blue-400  rounded-md hover:shadow-gray-300 transition duration-200 ease-in-out hover:!shadow-md"
    >
      <CardContent className="pt-6 ">
        <div className="text-gray-700 font-medium hover:text-gray-600 truncate text-left">
          {form.name}
        </div>
        <div className="flex">
          <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
            <span className="text-gray-400 font-light">
              {parseInt(form.submittions) === 0
                ? "No Responses "
                : <span className="font-normal text-green-400">{form.submittions} Responses </span>} 
              -
            </span>
          </span>
          <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
            <TimeAgo dateString={form.created_at} />
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-2 flex flex-col">
        <div className="h-full flex justify-center items-center flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {isHover && (
                <Button variant="ghost" size="icon">
                  <SlOptions className="h-4 w-4 text-gray-400" />
                </Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
};
