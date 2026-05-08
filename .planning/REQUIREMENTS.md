# Requirements: AI Resume Analyzer & Interview Prep Platform

**Defined:** 2026-05-08
**Core Value:** Empowering job seekers with data-driven resume insights and realistic interview simulations.

## v1 Requirements

### Authentication (AUTH)

- [ ] **AUTH-01**: User can sign up with email and password.
- [ ] **AUTH-02**: User can login with email and password.
- [ ] **AUTH-03**: Secure session management using JWT.
- [ ] **AUTH-04**: Protected routes for authenticated users only.

### Resume Management (RESM)

- [ ] **RESM-01**: User can upload a resume in PDF format.
- [ ] **RESM-02**: System extracts raw text from the uploaded PDF.
- [ ] **RESM-03**: User can view their uploaded resume content.
- [ ] **RESM-04**: User can delete their uploaded resume.

### AI Analysis (AIAN)

- [ ] **AIAN-01**: System parses resume text into structured data (Skills, Experience, Education) using Gemini.
- [ ] **AIAN-02**: User can provide a Job Description (JD) for comparison.
- [ ] **AIAN-03**: System calculates a semantic ATS score based on Resume vs JD.
- [ ] **AIAN-04**: System generates actionable skill improvement suggestions.

### Interview Preparation (INTP)

- [ ] **INTP-01**: System generates tailored interview questions based on Resume and JD.
- [ ] **INTP-02**: Chat-based interactive interface for answering questions.
- [ ] **INTP-03**: System provides real-time feedback on user responses.
- [ ] **INTP-04**: Session summary provided at the end of the interview.

### Dashboard & Analytics (DASH)

- [ ] **DASH-01**: User can view a history of their resume scores.
- [ ] **DASH-02**: User can see progress tracking (improvement over time).
- [ ] **DASH-03**: Admin can view system usage statistics.
- [ ] **DASH-04**: Admin can view trending skills across all users.

## v2 Requirements

- **VOIC-01**: Voice-to-text interview practice.
- **DOCX-01**: Support for .docx file uploads.
- **LINK-01**: LinkedIn profile import functionality.
- **EXPT-01**: Export optimized resume in different formats.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Direct Job Applications | Focus is on preparation, not platform as a job board. |
| Video Analysis | High complexity; deferred to later versions or research. |
| Real-time Resume Editing | Focus is on analysis and prep; use external tools for editing. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 | Phase 2 | Pending |
| AUTH-02 | Phase 2 | Pending |
| AUTH-03 | Phase 2 | Pending |
| AUTH-04 | Phase 2 | Pending |
| RESM-01 | Phase 3 | Pending |
| RESM-02 | Phase 3 | Pending |
| RESM-03 | Phase 3 | Pending |
| RESM-04 | Phase 3 | Pending |
| AIAN-01 | Phase 3 | Pending |
| AIAN-02 | Phase 3 | Pending |
| AIAN-03 | Phase 3 | Pending |
| AIAN-04 | Phase 3 | Pending |
| INTP-01 | Phase 4 | Pending |
| INTP-02 | Phase 4 | Pending |
| INTP-03 | Phase 4 | Pending |
| INTP-04 | Phase 4 | Pending |
| DASH-01 | Phase 5 | Pending |
| DASH-02 | Phase 5 | Pending |
| DASH-03 | Phase 5 | Pending |
| DASH-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-08*
*Last updated: 2026-05-08 after initial definition*
