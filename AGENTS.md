<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Fresh Next.js (App Router) project built with `create-next-app`. No application features have been implemented yet — `src/app/page.tsx` is an empty placeholder.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

There are no tests and no database/backend; this is a UI-only frontend at the moment.

## Stack

- **Next.js 16.4.3** (App Router, React 19.3, React Compiler via `babel-plugin-react-compiler`), TypeScript strict
- **Tailwind CSS v4** — no config file; styling/theme lives in `src/app/globals.css` (CSS variables). Powered by `@tailwindcss/turbopack`.
- **shadcn/ui** components in `src/components/ui/` (style: `base-nova`, config in `components.json`). Add more via the `shadcn` CLI; they land in `src/components/ui/`.
- **lucide-react** for icons; `cn()` helper at `src/lib/utils.ts` (alias `@/lib/utils`).
- Fonts: Josefin Sans via `next/font/google` in `src/app/layout.tsx`.

## Structure

- `src/app/` — App Router pages/layouts, global styles, favicon
- `src/components/ui/` — shadcn/ui primitives (generated, generally don't hand-edit)
- `src/hooks/` — shared React hooks (`use-mobile`, `use-highlighted-code`)
- `src/lib/` — utilities (`utils.ts`, `highlighter.tsx` using shiki)
- Path alias: `@/*` maps to `src/*`

## Conventions

- Existing shadcn/ui components are generated code — prefer the CLI over manual edits.
- The Next.js agent rules block at the top of this file must be preserved; this Next.js version has breaking changes, so consult `node_modules/next/dist/docs/` before writing framework code.
