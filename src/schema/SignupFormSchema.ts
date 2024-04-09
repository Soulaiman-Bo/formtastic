import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    firstname: z.string().min(2).max(20),
    lastname: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;
