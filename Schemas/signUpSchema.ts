import * as z from "zod";
import { email } from "zod/v4";

export const signUpSchema = z.object({
  password: z
    .string()
    .length(4, { message: "password should be atleast of 4 characters" }),
});
