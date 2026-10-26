<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Travel-booking UI built with `create-next-app`. Early stage: landing page plus destination pages; no database or tests. Pages under `src/app/destinations/` and `src/app/add-destination/` talk to a **separate backend dev server on `http://localhost:8000` (not in this repo)**: GET `/destinations`, GET+DELETE `/destinations/:id`, POST `/add-destination`. Without it the destinations list falls back to hard-coded `SAMPLE_DESTINATIONS`, and `/destinations/[id]` renders a 404 (`notFound()` on fetch failure).

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build; also the de facto typecheck (no standalone typecheck script; `npx tsc --noEmit` works too)
- `npm run lint` — ESLint flat config, runs plain `eslint` (not `next lint`)
- Never delete the Next.js agent-rules block at the top of this file; `next dev` re-adds it if removed.

## Stack

- Next.js 16.4.3 (App Router), React 19.3, TypeScript strict
- `reactCompiler: true` in `next.config.ts` — components are auto-memoized; don't wrap things in `useMemo`/`useCallback` defensively
- `cacheComponents: false` / `partialPrefetching: false` (explicitly disabled) — the cacheComponents data-fetching restrictions don't apply; if re-enabled, read `node_modules/next/dist/docs/` first
- Tailwind CSS v4, no JS config — theme lives as CSS variables (oklch, neutral base) in `src/app/globals.css`; dark mode is a `.dark` class via `@custom-variant`
- shadcn/ui, style `base-nova` (`components.json`); primitives land in `src/components/ui/`
- Path alias `@/*` → `src/*`; `cn()` at `@/lib/utils`

## Structure

- `src/app/page.tsx` — landing page composing sections: `Banner`, `WhyChoose`, `Testimonials`, `Cta`
- `src/app/layout.tsx` — renders `Navbar` and `Footer` around every page; Josefin Sans via `next/font/google`
- `src/app/add-destination/` — client form ('use client', shadcn inputs) POSTing JSON to `http://localhost:8000/add-destination`
- `src/app/destinations/` — server page fetches via `api.ts` (`BACKEND_URL`, `fetchDestinations`/`fetchDestination`, `normalizeDestination` which coerces several possible backend field names → the `Destination` type in `card.tsx`); `view.tsx` is the 'use client' filter/sort shell
- `src/app/destinations/[id]/` — detail page; `delete-button.tsx` DELETEs the destination then `router.push('/destinations') + router.refresh()`
- `src/components/` — feature sections with hard-coded local data; `src/components/ui/` — generated shadcn code, add more via the `shadcn` CLI rather than hand-editing
- `src/hooks/`, `src/lib/` — shared hooks and utils (`highlighter.tsx` wraps shiki, JS regex engine)
- Static images in `public/images/` (incl. `destinations/`), referenced as `/images/...`

## Conventions

- UI brand is spelled "Wanderlast" (navbar, logo images) even though the repo/package is "wanderlust"
- Sections use Tailwind's cyan palette (`cyan-500`/`cyan-600`) as the accent instead of the shadcn `--primary` token — match the surrounding code
- Client components (`footer`, `testimonials`, most ui primitives) import `'use client'`; feature sections are otherwise plain server components
