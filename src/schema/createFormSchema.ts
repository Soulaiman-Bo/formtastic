import { z } from "zod";

export const createFormSchema = z.object({
  workspace_id: z.string().min(1, { message: "Workspace ID cannot be empty" }),
  name: z.string().min(1, { message: "Name cannot be empty" }).max(100, { message: "Name must not exceed 100 characters" }),
  description: z.string().max(500, { message: "Description must not exceed 500 characters" }).optional()
});

export type createFormSchemaType = z.infer<typeof createFormSchema>;