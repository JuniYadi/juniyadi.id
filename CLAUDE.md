# CLAUDE.md - Development Guidelines

## Commands
- Build: `npm run build` or `bun run build`
- Dev server: `npm run dev` or `bun run dev`
- Lint: `npm run lint` or `bun run lint`
- Start: `npm run start` or `bun run start`
- Worker build: `bun run build:worker`
- Worker dev: `bun run dev:worker`
- Worker preview: `bun run preview:worker`
- Worker deploy: `bun run deploy:worker`

## Code Style Guidelines
- **TypeScript**: Use strict typing (enabled in tsconfig.json)
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import Component from "@/components/Component"`)
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Place components in `src/components/`, pages in `src/app/`
- **Styling**: Use Tailwind CSS classes with consistent spacing patterns
- **MDX**: Blog posts use `.md` or `.mdx` files with front matter
- **Dependencies**: Use package.json for dependencies, avoid CDNs
- **Error Handling**: Use try/catch blocks for async operations
- **Formatting**: Follow ESLint rules from `next/core-web-vitals` and `next/typescript`