import { z } from "zod"

export const signupValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(72),
})

export const loginValidation = z.object({
  email: z.string().email(),
  password: z.string(),
})
