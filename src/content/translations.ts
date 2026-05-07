// All marketing copy lives here. Add a new locale by adding a key under `translations`.

const en = {
  navbar: {
    links: {
      platform: "Platform",
      sovereignty: "Sovereignty",
      industries: "Industries",
      pricing: "Pricing",
      docs: "Docs",
    },
    signIn: "Sign in",
    cta: "Start free trial",
  },
  hero: {
    volume: "Vol. 01 — Sovereign Cloud, Made for Europe",
    location: "Hetzner · Frankfurt DE  ·  EST. București 2026",
    title: {
      line1: "Your data,",
      line2: "your Europe.",
      line3: "Nothing less.",
    },
    bilingualLabel: "RO  /",
    bilingualText: "Datele tale, Europa ta. Suveranitate digitală fără compromis.",
    descriptionPrefix:
      "A complete Microsoft 365 alternative — files, docs, mail, video and a private AI — hosted on European hardware, governed by European law, beyond the reach of the US",
    descriptionTag: "CLOUD Act",
    descriptionSuffix: ".",
    primaryCta: "Start 30-day free trial",
    demoCta: "Watch 90-sec demo",
  },
  map: {
    legendTitle: "PLATE I",
    legendSubtitle: "EU SOVEREIGN NETWORK",
    locations: {
      frankfurt: { name: "Frankfurt", label: "Primary · Hetzner DE" },
      bucuresti: { name: "București", label: "HQ · Support RO" },
      sofia: { name: "Sofia", label: "Edge node" },
      paris: { name: "Paris", label: "Edge node" },
    },
  },
  trust: [
    { label: "HOSTED IN", title: "Germany", description: "Hetzner DE" },
    { label: "REGULATED BY", title: "GDPR-native", description: "ANPDCP · EU only" },
    { label: "ENCRYPTED", title: "End-to-end", description: "Confidential computing" },
    { label: "EXEMPT FROM", title: "CLOUD Act", description: "Zero US jurisdiction" },
  ],
  footer: {
    tagline: "Made in România · for Europe",
    sections: {
      hero: "§ 01 — Hero",
      trust: "§ 02 — Trust",
      platform: "§ 03 — Platform",
      pricing: "§ 04 — Pricing",
    },
    page: "P. 001 / 006",
  },
}

const ro: typeof en = {
  navbar: {
    links: {
      platform: "Platformă",
      sovereignty: "Suveranitate",
      industries: "Industrii",
      pricing: "Prețuri",
      docs: "Documentație",
    },
    signIn: "Autentificare",
    cta: "Probă gratuită",
  },
  hero: {
    volume: "Vol. 01 — Cloud Suveran, Făcut pentru Europa",
    location: "Hetzner · Frankfurt DE  ·  EST. București 2026",
    title: {
      line1: "Datele tale,",
      line2: "Europa ta.",
      line3: "Fără compromisuri.",
    },
    bilingualLabel: "EN  /",
    bilingualText: "Your data, your Europe. Digital sovereignty without compromise.",
    descriptionPrefix:
      "O alternativă completă la Microsoft 365 — fișiere, documente, e-mail, video și un AI privat — găzduit pe hardware european, guvernat de legea europeană, dincolo de raza",
    descriptionTag: "CLOUD Act",
    descriptionSuffix: "-ului american.",
    primaryCta: "Începe proba de 30 de zile",
    demoCta: "Vezi demo de 90 sec",
  },
  map: {
    legendTitle: "PLĂCUȚA I",
    legendSubtitle: "REȚEA SUVERANĂ UE",
    locations: {
      frankfurt: { name: "Frankfurt", label: "Principal · Hetzner DE" },
      bucuresti: { name: "București", label: "Sediu · Suport RO" },
      sofia: { name: "Sofia", label: "Nod periferic" },
      paris: { name: "Paris", label: "Nod periferic" },
    },
  },
  trust: [
    { label: "GĂZDUIT ÎN", title: "Germania", description: "Hetzner DE" },
    { label: "REGLEMENTAT DE", title: "Nativ GDPR", description: "ANPDCP · doar UE" },
    { label: "CRIPTAT", title: "Cap-la-cap", description: "Calcul confidențial" },
    { label: "EXCEPTAT DE LA", title: "CLOUD Act", description: "Zero jurisdicție SUA" },
  ],
  footer: {
    tagline: "Făcut în România · pentru Europa",
    sections: {
      hero: "§ 01 — Erou",
      trust: "§ 02 — Încredere",
      platform: "§ 03 — Platformă",
      pricing: "§ 04 — Prețuri",
    },
    page: "P. 001 / 006",
  },
}

export const translations = { en, ro }
export type Locale = keyof typeof translations
export type Translations = typeof en
