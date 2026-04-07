import { Metadata } from "next";
import { loadMarkdown } from "@/lib/markdown";
import { LegalLayout } from "@/components/legal/legal-layout";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales | Hippô'kom",
  description:
    "Mentions légales de Hippô'kom, agence de communication digitale en Martinique.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function MentionsLegalesPage() {
  const { html } = await loadMarkdown("/content/legal/mentions-legales.md");

  return (
    <LegalLayout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalLayout>
  );
}
