import { z } from "zod";
import { contactFormSchema } from "@/validation/contactForm";

export type ContactFormData = z.infer<typeof contactFormSchema>;
