import { z } from "zod";

export const NewWorkspaceSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 6 characters long." })
    .max(30, { message: "Name must not exceed 30 characters." }),
});

export type NewWorkspaceSchemaType = z.infer<typeof NewWorkspaceSchema>;
