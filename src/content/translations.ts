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
      "Files, documents, email, video conferencing and a private AI — all in one platform. Hosted on European hardware, governed by European law, beyond the reach of the US",
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
    headlineLead: "Your data",
    headlineAccent: "answers to",
    headlineTail: "a different law.",
    sub: "Your clients' data isn't where you think it is. And it isn't protected by who you think is protecting it.",
    risks: [
      {
        eyebrow: "RISK 01 — US jurisdiction",
        title: "Your data is under US jurisdiction",
        body: "The US CLOUD Act lets American authorities access data stored with any US-headquartered cloud provider — even if the servers physically sit in Frankfurt or Dublin. Without notice. Without your consent. With no legal route to challenge it from inside the EU.",
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
        body: "When your cloud provider has a security breach — and the major American ones do, routinely — legal liability before the data protection authority stays with you, as data controller. GDPR fines up to 4% of annual turnover, or €20 million. Plus the loss of client trust.",
        citation: "Regulation (EU) 2016/679, Art. 83",
      },
    ],
  },
  solution: {
    eyebrow: "§ 03 — The Solution",
    headlineLead: "Every feature.",
    headlineAccent: "Zero",
    headlineTail: "American dependencies.",
    sub: "One platform with everything your firm needs. Built under European law, hosted in Germany, supported in your language.",
    items: [
      {
        responseMarker: "← Answer to RISK 01",
        eyebrow: "SOLUTION 01 — 100% European Jurisdiction",
        title: "European law only. Full stop.",
        body: "Your data lives on physical Hetzner servers in Frankfurt, operated by a German company under EU jurisdiction. No non-European government can request access. No contract can be overridden by foreign law. Just GDPR, NIS2, and Romanian national legislation.",
        citation: "Hetzner Online GmbH · Frankfurt, Germany",
      },
      {
        responseMarker: "← Answer to RISK 02",
        eyebrow: "SOLUTION 02 — Complete Control, No Kill-Switch",
        title: "Your data, under your control. Always.",
        body: "Open-source infrastructure (Nextcloud, Collabora, Jitsi, Matrix). Auditable code. Full data export at any time, in standard formats. If you ever want to leave, you leave — with everything you have. No contractual lock-in, no risk of arbitrary suspension.",
        citation: "Open-source · GPL/AGPL · GDPR-compliant export",
      },
      {
        responseMarker: "← Answer to RISK 03",
        eyebrow: "SOLUTION 03 — GDPR by Design",
        title: "GDPR isn't a disclaimer. It's the architecture.",
        body: "Standard Data Processing Agreement included. Documented GDPR audit trail. EU-only hosting. End-to-end encryption. Accessible logs. Our support team is based in Romania, speaks your language, and understands ANPDCP. When the regulator asks where your data is, you have one clear answer: Frankfurt.",
        citation: "Pursuant to Regulation (EU) 2016/679 · NIS2 ready",
      },
    ],
  },
  footer: {
    tagline: "Made in România · for Europe",
    sections: {
      hero: "§ 01 — Hero",
      problem: "§ 02 — Problem",
      solution: "§ 03 — Solution",
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
      "Fișiere, documente, e-mail, videoconferință și un AI privat — toate într-o singură platformă. Găzduit pe hardware european, guvernat de legea europeană, dincolo de raza",
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
    headlineLead: "Datele tale",
    headlineAccent: "se supun",
    headlineTail: "altei legi.",
    sub: "Datele clienților tăi nu sunt unde crezi că sunt. Nu sunt protejate de cine crezi că le protejează.",
    risks: [
      {
        eyebrow: "RISC 01 — Jurisdicție americană",
        title: "Datele tale sunt sub jurisdicția SUA",
        body: "Legea americană CLOUD Act permite autorităților SUA să acceseze datele stocate la orice furnizor de cloud cu sediul în SUA — chiar dacă serverele sunt fizic în Frankfurt sau Dublin. Fără notificare. Fără permisiunea ta. Fără posibilitatea de a contesta legal din UE.",
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
        body: "Când furnizorul tău de cloud are o breșă de securitate — și cei mari americani au, regulat — răspunderea legală în fața ANSPDCP rămâne la tine, ca operator de date. Amenzi GDPR de până la 4% din cifra de afaceri sau 20 milioane €. Plus pierderea încrederii clienților.",
        citation: "Regulamentul (UE) 2016/679, Art. 83",
      },
    ],
  },
  solution: {
    eyebrow: "§ 03 — Soluția",
    headlineLead: "Toate funcțiile.",
    headlineAccent: "Zero",
    headlineTail: "dependențe americane.",
    sub: "O singură platformă cu tot ce are nevoie firma ta. Construită sub legi europene, găzduită în Germania, suport în limba ta.",
    items: [
      {
        responseMarker: "← Răspuns la RISC 01",
        eyebrow: "SOLUȚIE 01 — Jurisdicție 100% europeană",
        title: "Doar legi europene. Punct.",
        body: "Datele tale locuiesc pe servere fizice Hetzner în Frankfurt, operate de o companie germană sub jurisdicția UE. Niciun guvern non-european nu poate solicita acces. Niciun contract nu poate fi suprascris de o lege străină. Doar GDPR, NIS2 și legislația națională română.",
        citation: "Hetzner Online GmbH · Frankfurt, Germania",
      },
      {
        responseMarker: "← Răspuns la RISC 02",
        eyebrow: "SOLUȚIE 02 — Control complet, fără kill-switch",
        title: "Datele tale, sub controlul tău. Întotdeauna.",
        body: "Infrastructură open-source (Nextcloud, Collabora, Jitsi, Matrix). Cod auditabil. Export complet al datelor în orice moment, în formate standard. Dacă vreodată vrei să pleci, pleci — cu tot ce ai. Niciun lock-in contractual, niciun risc de blocare arbitrară.",
        citation: "Open-source · GPL/AGPL · Export GDPR-compliant",
      },
      {
        responseMarker: "← Răspuns la RISC 03",
        eyebrow: "SOLUȚIE 03 — Conformitate GDPR by design",
        title: "GDPR nu e un disclaimer. E arhitectura.",
        body: "Data Processing Agreement standard inclus. Audit GDPR documentat. Hosting exclusiv în UE. Criptare end-to-end. Logs accesibile. Suportul nostru e bazat în România, vorbește limba ta și înțelege ANSPDCP. Când inspectorul te întreabă unde sunt datele, ai un singur răspuns clar: Frankfurt.",
        citation: "Conform Regulament (UE) 2016/679 · NIS2 ready",
      },
    ],
  },
  footer: {
    tagline: "Făcut în România · pentru Europa",
    sections: {
      hero: "§ 01 — Erou",
      problem: "§ 02 — Problema",
      solution: "§ 03 — Soluția",
      platform: "§ 04 — Platformă",
      pricing: "§ 05 — Prețuri",
    },
    page: "P. 001 / 007",
  },
}

export const translations = { en, ro }
export type Locale = keyof typeof translations
export type Translations = typeof en
