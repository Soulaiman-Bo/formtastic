"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
} from "./ui/card";
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

export const FormCard = () => {
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
          RSVP formjjjj
        </div>
        <div className="flex">
          <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
            <span className="text-gray-400 font-light">No responses -</span>
          </span>
          <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
            <span className="text-gray-400 font-normal">2 days ago</span>
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