# Roadmap: AI Resume Analyzer & Interview Prep Platform

## Overview

This project builds an AI-powered platform for career preparation. We move from setting up the core MERN architecture and authentication to building a sophisticated AI analysis engine for resumes, followed by an interactive interview preparation system, and finally a comprehensive dashboard for user and admin insights.

## Phases

- [ ] **Phase 1: Foundation & Setup** - Initialize MERN environment and Gemini API integration.
- [ ] **Phase 2: Authentication & Core Architecture** - Implement JWT authentication and base API structure.
- [ ] **Phase 3: AI Resume Analysis Engine** - Build PDF parsing and semantic ATS scoring with Gemini.
- [ ] **Phase 4: Interview Preparation System** - Create the chat-based interactive practice interface.
- [ ] **Phase 5: Dashboard, Analytics & Polish** - Implement progress tracking and admin insights.

## Phase Details

### Phase 1: Foundation & Setup
**Goal**: Establish the development environment and verify Gemini API connectivity.
**Depends on**: Nothing
**Requirements**: [RESM-01, AIAN-01]
**Success Criteria**:
  1. Frontend (React/Vite) and Backend (Node/Express) are running and communicating.
  2. Gemini API "Hello World" test passes from the backend.
  3. MongoDB connection is established.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Initialize React (Vite) and Express boilerplate with shared types.
- [ ] 01-02: Configure Gemini API and MongoDB connection.

### Phase 2: Authentication & Core Architecture
**Goal**: Secure the application and set up user-specific data storage.
**Depends on**: Phase 1
**Requirements**: [AUTH-01, AUTH-02, AUTH-03, AUTH-04]
**Success Criteria**:
  1. User can sign up and log in securely.
  2. JWT tokens are correctly issued and verified.
  3. Private routes are protected from unauthenticated access.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Implement Backend Auth logic (JWT, Bcrypt, User Model).
- [ ] 02-02: Build Frontend Auth UI (Signup, Login, Auth Context).

### Phase 3: AI Resume Analysis Engine
**Goal**: Implement the core value proposition: deep resume analysis.
**Depends on**: Phase 2
**Requirements**: [RESM-01, RESM-02, RESM-03, AIAN-01, AIAN-02, AIAN-03, AIAN-04]
**Success Criteria**:
  1. User can upload a PDF and see extracted text.
  2. System generates a semantic ATS score against a Job Description.
  3. Actionable skill suggestions are displayed.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Implement PDF upload and text extraction (pdf-parse).
- [ ] 03-02: Develop Gemini prompt for resume structuring and JD comparison.
- [ ] 03-03: Build Resume Results UI with "Professional Academic" aesthetic.

### Phase 4: Interview Preparation System
**Goal**: Enable interactive prep through AI-driven chat.
**Depends on**: Phase 3
**Requirements**: [INTP-01, INTP-02, INTP-03, INTP-04]
**Success Criteria**:
  1. AI generates questions specific to the user's resume.
  2. Chat interface supports real-time interaction and feedback.
  3. Session summary is generated at the end.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Build Chat UI and session state management.
- [ ] 04-02: Implement AI interview logic and feedback loop.

### Phase 5: Dashboard, Analytics & Polish
**Goal**: Provide long-term value and administrative visibility.
**Depends on**: Phase 4
**Requirements**: [DASH-01, DASH-02, DASH-03, DASH-04]
**Success Criteria**:
  1. User can view their history and progress chart.
  2. Admin can view system-wide stats and trending skills.
  3. UI is fully polished and responsive.
**Plans**: 2 plans

Plans:
- [ ] 05-01: Build User Dashboard and Progress tracking charts.
- [ ] 05-02: Implement Admin Analytics and final visual polish.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/2 | Not started | - |
| 2. Auth | 0/2 | Not started | - |
| 3. AI Analysis | 0/3 | Not started | - |
| 4. Interview Prep | 0/2 | Not started | - |
| 5. Analytics | 0/2 | Not started | - |

---
*Roadmap defined: 2026-05-08*
*Last updated: 2026-05-08 after initialization*
