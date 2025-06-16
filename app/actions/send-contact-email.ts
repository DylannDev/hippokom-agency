"use server";

import { Resend } from "resend";
import { ContactNotificationEmail } from "@/src/emails/ContactNotificationEmail";
import { ContactConfirmationEmail } from "@/src/emails/ContactConfirmationEmail";
import { ContactFormData } from "@/src/types/contactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Envoi de l'email de notification
    await resend.emails.send({
      from: "TCS Plomberie <no-reply@tcs-plomberie-montpellier.fr>",
      to: "thermoclimsanitaire@gmail.com",
      subject: "Nouveau message de contact",
      react: ContactNotificationEmail({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    // Envoi de l'email de confirmation
    await resend.emails.send({
      from: "TCS Plomberie <no-reply@tcs-plomberie-montpellier.fr>",
      to: data.email,
      subject: "Merci pour votre message !",
      react: ContactConfirmationEmail({
        firstName: data.firstName,
        message: data.message,
      }),
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails:", error);
    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi du message",
    };
  }
}
