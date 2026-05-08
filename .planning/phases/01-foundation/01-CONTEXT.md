# Phase 1: Foundation & Setup - Context

**Gathered:** 2026-05-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Initialize the core MERN architecture (MongoDB, Express, React, Node) and verify connectivity with the Gemini API. This phase sets up the "plumbing" for the rest of the project.

</domain>

<decisions>
## Implementation Decisions

### Frontend
- **Framework**: React.js with Vite for fast build times.
- **Styling**: Tailwind CSS for modern utility-first styling.
- **Library**: Lucide React for icons.

### Backend
- **Framework**: Node.js with Express.js.
- **Database**: MongoDB (Atlas) with Mongoose ODM.
- **AI**: Gemini API (v1.5 Flash) for analysis and chat.

### Project Structure
- Monorepo-style or separate folders: Separate `client/` and `server/` folders in the root.

### the agent's Discretion
- Folder naming: `client` for React, `server` for Node.js.
- Environment variables: `.env` files in both client and server.

</decisions>

<canonical_refs>
## Canonical References

- [.planning/PROJECT.md](file:///c:/Users/sumit/Desktop/My%20locker/projects/Final%20year%20project/.planning/PROJECT.md)
- [.planning/research/STACK.md](file:///c:/Users/sumit/Desktop/My%20locker/projects/Final%20year%20project/.planning/research/STACK.md)

</canonical_refs>

<specifics>
## Specific Ideas

- Ensure "Professional Academic" design tokens are initialized in Tailwind config (fonts like Inter, neutral color palette).
- Setup a simple "Hello Gemini" endpoint to verify API key and connectivity immediately.

</specifics>

<deferred>
## Deferred Ideas

- Authentication logic (Phase 2).
- PDF parsing logic (Phase 3).

</deferred>

---
*Phase: 01-foundation*
*Context gathered: 2026-05-08 via initialization*
