import { z } from "zod";

export const sendresetPasswordemailFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }), // Custom error message for email validation
});

export type sendresetPasswordemailFormSchemaType = z.infer<
  typeof sendresetPasswordemailFormSchema
>;

export const resetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(255, { message: "Password must not exceed 255 characters." }),
    password_confirmation: z.string(),
    email: z.string().email({ message: "Invalid email format." }),
    token: z
      .string()
      .min(10, { message: "Token must be at least 10 characters long." }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  });

export type resetPasswordFormSchemaType = z.infer<
  typeof resetPasswordFormSchema
>;
