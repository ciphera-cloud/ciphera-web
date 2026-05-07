@AGENTS.md
# Ciphera — Project Instructions for Claude Code

## Product Context

Ciphera is a sovereign cloud collaboration SaaS for European businesses.
Alternative to Microsoft 365 / Google Workspace, hosted entirely on EU
infrastructure (Hetzner Germany), with no dependency on US companies.

**Core value proposition:**
- Real digital sovereignty (no CLOUD Act exposure)
- GDPR-compliant by design
- Romanian-first support
- Local market-adapted pricing

**Target market:** law firms, private clinics, accounting firms, tech SMEs in Romania and Eastern Europe.

**Tech stack of the actual product** (NOT this repo): Nextcloud Hub, Collabora,
Jitsi, Matrix/Element, Hetzner servers in Germany.

## This Repository

`ciphera-web` = **marketing landing page only**. NOT the product dashboard.

- Public repo (visible code is fine for marketing)
- No business logic
- No authentication
- No secrets, API keys, or environment variables with sensitive data
- No user data, no database

The actual product (`ciphera-app`) will be a separate private repository.

## Tech Stack — Locked, do not change without asking

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Nova preset, Slate base color)
- **Icons:** lucide-react (already included with shadcn)
- **Font:** Geist (configured by shadcn)
- **Deploy:** Vercel (Hobby plan, public repo)

If you think a new dependency is needed, **explain why first and wait for approval** before installing.

## Code Style Rules

- Functional components only, no class components
- TypeScript strict — never use `any`, never use `@ts-ignore`
- Server Components by default; add `"use client"` only when state, effects, event handlers, or browser APIs are needed
- File naming: `kebab-case` for files, `PascalCase` for component names
- One main component export per file
- Co-locate component-specific types in the same file
- Shared types go in `src/types/`
- Tailwind classes inline; only extract to a sub-component when used 3+ times
- Prefer composition over abstraction — no premature DRY

## Project Structure

src/
  app/              # Next.js routes (page.tsx, layout.tsx)
  components/
    ui/             # shadcn primitives — DO NOT modify directly
    sections/       # Page sections (hero, problem, solution, cta)
    layout/         # Header, footer, nav
  lib/              # Utilities, helpers (cn, formatters)
  types/            # Shared TypeScript types
  content/          # Marketing copy (so it's editable without touching JSX)

## Content Rules

- **All marketing copy in Romanian** (RO is primary market for now)
- English version — add i18n setup
- Headlines: clear, no jargon, business benefits not features
- Tone: professional but human, not corporate
- Avoid buzzwords: "leveraging synergies", "next-generation", "AI-powered"
- Reference concrete differentiators: CLOUD Act, GDPR, kill-switch risk, EU servers

## Brand

- Name: **Ciphera**
- Domain: ciphera.cloud (primary), ciphera.ro
- Working tagline: "Datele rămân în Europa. Fără excepții."
- Color palette: Slate base (already in Tailwind config via shadcn Nova preset)
- No emoji in UI/copy unless explicitly requested
- Buttons use action verbs ("Programează demo", "Vezi cum funcționează"), not "Click here"

## What NOT to do

- Don't add new dependencies without explaining why and waiting for approval
- Don't refactor existing components unless explicitly asked
- Don't add animations, transitions, or motion libraries unless requested
- Don't generate Lorem Ipsum — ask for real Romanian copy when missing
- Don't add analytics, tracking pixels, or cookie banners yet
- Don't add forms with backend submission — use Calendly links or mailto for now
- Don't create unnecessary abstractions or premature optimizations
- Don't generate placeholder testimonials, fake company logos, or fake stats

## Workflow

- Make small, focused commits — one feature/fix per commit
- Commit messages: imperative mood ("Add hero section", not "Added hero")
- Verify with `npm run dev` before saying a task is done
- Run `npm run build` and `npm run lint` before merging anything significant
- TypeScript errors are blockers — fix before delivering, don't ship with errors

## Communication With Me

- If a request is ambiguous, ask before guessing
- If you see a better approach than what I asked for, mention it briefly — don't just do it
- If something will take more than 1 logical change, list the changes first and wait for "go"
- Keep responses concise — show me the code, not paragraphs of explanation
- If you change file structure, summarize the changes at the end