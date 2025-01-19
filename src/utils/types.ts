import { z } from "zod";

export const signInSchema = z.object({
  firstName: z.string().min(4).optional(),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInFormValue = z.infer<typeof signInSchema>;
