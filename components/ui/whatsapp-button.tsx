import { RiWhatsappFill } from "react-icons/ri";
import Button from "./Button";
import { phoneNumber } from "@/data";

interface WhatsAppButtonProps {
  variant?: "white" | "yellow" | "blue";
  size?: "sm" | "default" | "md" | "lg";
  className?: string;
  message?: string;
}

export function WhatsAppButton({
  variant = "white",
  size = "default",
  className,
  message = "",
}: WhatsAppButtonProps) {
  const whatsappUrl = message
    ? `https://wa.me/${phoneNumber.raw}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber.raw}`;

  return (
    <Button
      href={whatsappUrl}
      target="_blank"
      size={size}
      variant={variant}
      icon={<RiWhatsappFill className="text-xl" />}
      className={className}
    >
      Contacter
    </Button>
  );
}

export default WhatsAppButton;
