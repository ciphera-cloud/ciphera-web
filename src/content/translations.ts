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
    primaryCtaNote: "No credit card required",
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
    { label: "ENCRYPTED", title: "AES-256", description: "At rest & in transit" },
    { label: "EXEMPT FROM", title: "CLOUD Act", description: "Zero US jurisdiction" },
  ],
  problem: {
    eyebrow: "§ 02 — The Problem",
    headlineLead: "Three risks Microsoft 365",
    headlineAccent: "will never",
    headlineTail: "put in writing.",
    sub: "Your clients' data isn't where you think it is. And it isn't protected by who you think is protecting it.",
    risks: [
      {
        eyebrow: "RISK 01 — US jurisdiction",
        title: "Your data is under US jurisdiction",
        body: "The US CLOUD Act lets American authorities access data stored with Microsoft, Google or AWS — even if the servers physically sit in Frankfurt or Dublin. Without notice. Without your consent. With no legal route to challenge it from inside the EU.",
        citation: "CLOUD Act, 18 U.S.C. § 2713 (2018)",
      },
      {
        eyebrow: "RISK 02 — Geopolitical kill-switch",
        title: "Your access can be cut overnight",
        body: "One political conflict, one new sanction, one corporate decision — and tomorrow you no longer have access to your firm's documents. Real precedent: in 2025, Maxar instantly cut Ukraine's access to satellite imagery critical for national defence. No contract protects you against a government order.",
        citation: "Maxar Technologies, public statement, March 2025",
      },
      {
        eyebrow: "RISK 03 — GDPR liability stays with you",
        title: "Their breach, your fine",
        body: "When Microsoft has a security breach — and they do, routinely — legal liability before the data protection authority stays with you, as data controller. GDPR fines up to 4% of annual turnover, or €20 million. Plus the loss of client trust.",
        citation: "Regulation (EU) 2016/679, Art. 83",
      },
    ],
  },
  footer: {
    tagline: "Made in România · for Europe",
    sections: {
      hero: "§ 01 — Hero",
      problem: "§ 02 — Problem",
      trust: "§ 03 — Trust",
      platform: "§ 04 — Platform",
      pricing: "§ 05 — Pricing",
    },
    page: "P. 001 / 007",
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
    primaryCtaNote: "Fără card de credit",
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
    { label: "CRIPTAT", title: "AES-256", description: "În repaus și în tranzit" },
    { label: "EXCEPTAT DE LA", title: "CLOUD Act", description: "Zero jurisdicție SUA" },
  ],
  problem: {
    eyebrow: "§ 02 — Problema",
    headlineLead: "Trei riscuri pe care Microsoft 365",
    headlineAccent: "nu ți le va spune",
    headlineTail: "niciodată.",
    sub: "Datele clienților tăi nu sunt unde crezi că sunt. Nu sunt protejate de cine crezi că le protejează.",
    risks: [
      {
        eyebrow: "RISC 01 — Jurisdicție americană",
        title: "Datele tale sunt sub jurisdicția SUA",
        body: "Legea americană CLOUD Act permite autorităților SUA să acceseze datele stocate la Microsoft, Google sau AWS — chiar dacă serverele sunt fizic în Frankfurt sau Dublin. Fără notificare. Fără permisiunea ta. Fără posibilitatea de a contesta legal din UE.",
        citation: "CLOUD Act, 18 U.S.C. § 2713 (2018)",
      },
      {
        eyebrow: "RISC 02 — Kill-switch geopolitic",
        title: "Accesul tău poate fi tăiat peste noapte",
        body: "Un conflict politic, o sancțiune nouă, o decizie corporativă — și mâine nu mai ai acces la documentele firmei. Precedent real: în 2025, Maxar a tăiat instant accesul Ucrainei la imagini satelit critice pentru apărare. Nu există protecție contractuală împotriva ordinelor guvernamentale.",
        citation: "Maxar Technologies, comunicat public, martie 2025",
      },
      {
        eyebrow: "RISC 03 — Răspunderea GDPR îți rămâne ție",
        title: "Breșa lor, amenda ta",
        body: "Când Microsoft are o breșă de securitate — și are, regulat — răspunderea legală în fața ANSPDCP rămâne la tine, ca operator de date. Amenzi GDPR de până la 4% din cifra de afaceri sau 20 milioane €. Plus pierderea încrederii clienților.",
        citation: "Regulamentul (UE) 2016/679, Art. 83",
      },
    ],
  },
  footer: {
    tagline: "Făcut în România · pentru Europa",
    sections: {
      hero: "§ 01 — Erou",
      problem: "§ 02 — Problema",
      trust: "§ 03 — Încredere",
      platform: "§ 04 — Platformă",
      pricing: "§ 05 — Prețuri",
    },
    page: "P. 001 / 007",
  },
}

export const translations = { en, ro }
export type Locale = keyof typeof translations
export type Translations = typeof en
