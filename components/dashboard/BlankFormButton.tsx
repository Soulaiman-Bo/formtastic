"use client";
import React, { Dispatch } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFormSchema,
  createFormSchemaType,
} from "@/schema/createFormSchema";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const BlankFormButton = () => {
  const form = useForm<createFormSchemaType>({
    resolver: zodResolver(createFormSchema),
  });

  async function onSubmit(values: createFormSchemaType) {
    try {
     // api request to create a form 
    } catch (error) {
      
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex flex-col items-center rounded-lg bg-white shadow-md p-4 w-full   align-middle justify-center cursor-pointer hover:scale-105  hover:border-[3px] border border-gray-200 relative !h-[250px]">
          <div className="justify-center flex !h-full items-center">
            <div className="border-gray-200 bg-gray-50 rounded-lg border p-[6px] mt-[18px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="w-[64px] h-[64px] text-gray-500 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5 h-full max-h-[20%] justify-end mb-3">
            <div className=" font-semibold flex !text-2xl">Blank form</div>
            <div className="text-[rgb(171,175,185)] font-normal flex text-sm mb-0 mt-1 pb-0 text-center">
              Start from scratch
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="p-4">
          <DialogTitle>
            <h1 className="flex font-semibold text-2xl mb-0">Create Form</h1>
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex flex-col  gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col  gap-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="  focus:ring-offset-2 focus-visible:ring-blue-500 h-[42px] sm:h-[38px]  bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
            >
              Create Form
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BlankFormButton;
