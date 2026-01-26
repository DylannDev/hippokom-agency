import { Metadata } from "next";
import { loadMarkdown } from "@/lib/markdown";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Hippô'kom",
  description:
    "Conditions générales de vente de Hippô'kom, agence de communication digitale en Martinique",
};

export default async function CGVPage() {
  const { html } = await loadMarkdown("/content/legal/cgv.md");

  return (
    <LegalLayout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
}
