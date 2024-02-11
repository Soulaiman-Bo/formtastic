"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { IoSettingsOutline } from "react-icons/io5";

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
          RSVP formj
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
          {isHover && (
            <Button variant="outline" size="icon">
              <IoSettingsOutline />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export const FormCardoo = () => {
  return (
    <li className="col-span-1 flex shadow-sm rounded-md hover:shadow-gray-300 transition duration-200 ease-in-out hover:!shadow-md">
      <a
        className="flex flex-shrink-0 rounded-l-md overflow-hidden"
        href="/editor/1A2HRAtrNius/edit"
      >
        <div className="bg-blue-300 flex items-center justify-center w-16 text-white text-sm font-medium"></div>
      </a>

      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <button className="flex-1 overflow-hidden group">
          <div className="flex-1 px-4 text-sm truncate justify-start py-4 pb-3">
            <div className="flex items-center"></div>
            <div className="text-gray-700 font-medium hover:text-gray-600 truncate text-left">
              RSVP formj
            </div>
            <div className="flex">
              <span className="text-gray-500 flex justify-start py-1 px-2 -ml-2 mt-2  rounded-md group/button items-center border  border-transparent transition-all duration-200">
                <span className="text-gray-400 font-light">No responses</span>
              </span>
            </div>
          </div>
        </button>

        <div className="flex-shrink-0 pr-2">
          <div className="w-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
            <span className="sr-only">Open options</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-slate-400 my-3"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
};
