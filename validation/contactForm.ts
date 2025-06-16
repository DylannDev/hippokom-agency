import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Format d'email invalide"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Le numéro doit contenir 10 chiffres")
    .optional()
    .or(z.literal("")),
  message: z.string().min(1, "Le message est requis"),
});
