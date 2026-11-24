# Architecture contract

This document records stable stack decisions for every project created from the template. Product and editorial decisions belong in `product-context.md`.

## Applications

### Frontend

`apps/frontend` is an Astro site configured for static output. Pages should ship semantic HTML with no client runtime by default. Use Astro components for reusable presentation, layouts for document structure, and content collections for schema-backed content.

Hydrate an island only when interaction requires browser state. Keep the client boundary small and choose its directive deliberately; do not turn content pages into single-page applications by default.

### Backend

`apps/backend/src/app.ts` builds and exports the Hono application. Routes and middleware must be reachable through this app without opening a network port. `src/index.ts` is the Node adapter and process entrypoint only.

This split makes API tests deterministic and prevents imports from starting a server as a side effect.

## Boundaries

- Frontend and backend communicate over explicit HTTP contracts, not by importing each other's source.
- When types genuinely need to be shared, create a workspace package with a narrow public API.
- Environment-specific configuration enters at runtime. Commit documented `.env.example` files, never real `.env` files.
- Validate remote content, frontmatter, API input, and other untrusted data at system boundaries.
- Treat public URLs and content identifiers as durable interfaces. Plan redirects before changing them.

The executable boundary checks live in `scripts/check-architecture.mjs` and run as part of both verification commands.

## Verification layers

| Layer                  | Command                   | Purpose                                                   |
| ---------------------- | ------------------------- | --------------------------------------------------------- |
| Peer compatibility     | `pnpm check:peers`        | Detect incompatible framework and tooling upgrades        |
| Architecture           | `pnpm check:architecture` | Repository boundaries and secret-file guard               |
| Static analysis        | `pnpm lint`               | TypeScript, JavaScript, and Astro ESLint rules            |
| API tests              | `pnpm test`               | In-memory Hono behavior and middleware                    |
| Site/build integration | `pnpm build`              | `astro check`, static generation, and backend compilation |
| Full gate              | `pnpm verify`             | The same readiness contract used by CI                    |

Add browser end-to-end tests when a project gains a real interactive journey. For a primarily static site, generated output plus targeted accessibility and link checks usually provide a better early signal than placeholder browser tests.

## Decision rule

Prefer decisions that improve the content path, keep output lean, and remain reversible and testable. Record a new invariant here only when it should apply to most projects created from this template.
