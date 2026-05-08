# Stack Research

**Domain:** AI Resume Analyzer & Interview Prep Platform
**Researched:** 2026-05-08
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| React.js | ^18.3.0 | Frontend Framework | Standard for interactive UIs; robust ecosystem for state and animations. |
| Node.js | ^20.x | Backend Runtime | Non-blocking I/O ideal for handling file uploads and API calls. |
| Express.js | ^4.19.0 | Backend Framework | Minimalist and flexible for building RESTful APIs. |
| MongoDB | ^6.x | Database | Document-oriented storage fits flexible resume structures and analysis JSON. |
| Gemini API | v1.5 Flash/Pro | AI Integration | State-of-the-art reasoning for resume parsing and conversational interviews. |
| Tailwind CSS | ^3.4.0 | Styling | Utility-first CSS for rapid development of "Professional Academic" UI. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| pdf-parse | ^1.1.1 | PDF Text Extraction | Extracting raw text from uploaded resumes. |
| Framer Motion | ^11.x | Animations | Smooth transitions for dashboard and chat interfaces. |
| Mongoose | ^8.x | MongoDB ODM | Type-safe schema definition and validation. |
| jsonwebtoken | ^9.x | Authentication | Implementing secure JWT-based auth. |
| Axios | ^1.7.0 | HTTP Client | Making API requests from frontend to backend. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Vite | Frontend Tooling | Faster development builds and HMR compared to CRA. |
| Postman | API Testing | Testing backend endpoints for AI analysis. |
| MongoDB Atlas | Cloud Database | Scalable, managed MongoDB instance. |

## Installation

```bash
# Frontend
npx create-vite@latest ./ --template react
npm install tailwindcss postcss autoprefixer framer-motion axios lucide-react

# Backend
npm init -y
npm install express mongoose dotenv cors jsonwebtoken bcryptjs pdf-parse @google/generative-ai
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Gemini API | OpenAI (GPT-4) | If specific multimodal or ecosystem requirements favor OpenAI. |
| Vite | Next.js | If SEO or Server-Side Rendering (SSR) becomes a priority. |
| pdf-parse | pdfjs-dist | If more complex visual parsing (e.g., table structure) is needed. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Simple Regex Parsing | Resumes are highly unstructured; regex fails on layouts. | AI Parsing (Gemini) |
| Local Storage for Auth | Vulnerable to XSS. | HttpOnly Cookies or Secure JWT patterns. |

## Sources

- [Dev.to MERN + AI Patterns] — Verified current 2025/2026 trends.
- [Google Gemini API Docs] — Verified model capabilities and rate limits.
- [Official React/Vite Docs] — Verified latest stable versions.

---
*Stack research for: AI Resume Analyzer*
*Researched: 2026-05-08*
