import { z } from "zod";

export const createFormSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

export type createFormSchemaType = z.infer<typeof createFormSchema>;
