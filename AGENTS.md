<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Base44 setup notes

- **App:** Next.js 16.2.11 (Turbopack) static institutional site — `oliveira-systems-premium`. React 19, Tailwind CSS 4, Framer Motion.
- **No external services or secrets.** The page renders without any env vars.
- **Run:** `docker compose -f docker-compose.base44.yml up -d`. The `web` service uses `node:22`, bind-mounts the repo at `/app`, runs `npm ci && npm run dev` on port 3000. `node_modules` and `.next` are anonymous volumes to avoid host/clobber conflicts.
- **Preview origin:** `next.config.ts` sets `allowedDevOrigins` from `BASE44_PUBLIC_HOST_SUFFIX` so the preview proxy origin is allowed for dev assets/HMR. Do not replace with a hardcoded host.
- **Verify:** `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns HTTP 200 with the Oliveira Systems title.
- **Live reload:** Turbopack dev server watches the bind mount; edits appear without a rebuild or `reload_preview`.
