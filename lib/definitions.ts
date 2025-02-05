import { z } from 'zod'

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit contenir au moins 2 caractères.' })
    .trim(),
  email: z.string().email({ message: 'Veuillez entrer un email valide.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Minimum 8 caractères' })
    .regex(/[a-zA-Z]/, { message: 'Au moins une lettre.' })
    .regex(/[0-9]/, { message: 'Au moins un chiffre.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Au moins un caractère spécial.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Veuillez entrer un email valide.' }).trim(),
    password: z.string().min(1, { message: 'Le mot de passe est requis' }).trim(),
  })
  
  export type FormState = {
    errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
    }
    message?: string
  }
  