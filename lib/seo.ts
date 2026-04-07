export const SITE_URL = "https://hippokomagency.fr";
export const SITE_NAME = "Hippô'kom";
export const SITE_LOGO = `${SITE_URL}/logo.svg`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Hippô'kom",
  alternateName: "Hippô'Kom Agency",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_LOGO,
    width: 200,
    height: 50,
  },
  image: SITE_LOGO,
  description:
    "Agence de communication digitale en Martinique : community management, création de visuels, productions audiovisuelles, sites web, rédaction web et campagnes publicitaires.",
  telephone: "+33637495678",
  email: "agencehippokom@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort-de-France",
    addressRegion: "Martinique",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "Place", name: "Martinique" },
    { "@type": "Place", name: "Antilles" },
    { "@type": "Place", name: "Guadeloupe" },
    { "@type": "Place", name: "Guyane" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#aurelie-ciril`,
    name: "Aurélie Ciril",
    jobTitle: "Fondatrice & Directrice Créative",
  },
  sameAs: [
    "https://instagram.com/hippokom",
    "https://facebook.com/hippokom",
  ],
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#aurelie-ciril`,
  name: "Aurélie Ciril",
  jobTitle: "Fondatrice & Directrice Créative",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: SITE_URL,
  image: `${SITE_URL}/founder-1.jpg`,
  description:
    "Fondatrice de Hippô'kom, agence de communication digitale en Martinique. Plus de 30 clients accompagnés dans leur stratégie social media, branding et communication événementielle.",
};

export function buildBreadcrumb(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(
  faq: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.answer),
      },
    })),
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
