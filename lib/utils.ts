import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (input: Date | string): string => {
  // Options pour formater la date
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Si l'entrée est une chaîne, la convertir en Date
  const date = typeof input === "string" ? new Date(input) : input;

  // Formatage
  return date.toLocaleDateString("fr-FR", options);
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
