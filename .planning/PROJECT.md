# AI Resume Analyzer & Interview Prep Platform

## What This Is

An AI-powered full-stack web application designed to help users optimize their resumes and prepare for interviews. It provides PDF resume analysis, semantic ATS compatibility scoring, and interactive AI-generated interview practice sessions.

## Core Value

Empowering job seekers with data-driven resume insights and realistic interview simulations to increase their hiring success.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **Resume Upload**: Support for PDF resume uploads.
- [ ] **AI Analysis**: Extract skills and experience using Gemini API.
- [ ] **Semantic ATS Scoring**: Calculate compatibility scores based on semantic relevance to job descriptions.
- [ ] **Skill Suggestions**: Generate actionable improvement tips based on resume gaps.
- [ ] **Chat-based Interview Prep**: Interactive practice sessions with AI-generated questions.
- [ ] **User Dashboard**: Track preparation progress and score history.
- [ ] **Authentication**: Secure JWT-based user login/registration.
- [ ] **Admin Dashboard**: Analytics for user management, trending skills, and system monitoring.

### Out of Scope

- [ ] **Non-PDF formats**: Limited to PDF only for initial version to ensure parser reliability.
- [ ] **Voice/Video Interviews**: Focused on chat-based interaction for simplicity and accessibility in V1.
- [ ] **Direct Job Applications**: The platform is for preparation, not a job board.

## Context

- **Final Year Project**: Requires a complete, polished deliverable.
- **AI Integration**: Heavily reliant on Gemini API for both analysis and conversational interaction.
- **Design Aesthetic**: "Professional Academic" — minimalist, white-space heavy, focused on high-quality typography and clarity.

## Constraints

- **Tech Stack**: React.js, Tailwind CSS, Node.js, Express.js, MongoDB.
- **File Support**: PDF only — Simplified parsing logic for V1.
- **Deployment**: Vercel (Frontend) + Render (Backend).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Semantic ATS Scoring | More accurate than simple keyword matching; uses AI to understand experience. | — Pending |
| Chat-based Prep | Faster to implement and lower barrier to entry than voice/video. | — Pending |
| Professional Academic UI | Matches the serious nature of career preparation; prioritizes readability. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-08 after initialization*
