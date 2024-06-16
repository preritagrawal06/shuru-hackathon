import z from "zod";

export const authhValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
