# Features Research

**Domain:** AI Resume Analyzer & Interview Prep Platform
**Researched:** 2026-05-08
**Confidence:** HIGH

## Feature Landscape

### Table Stakes (Must-Have)

| Feature | Description | Why It's Required |
|---------|-------------|-------------------|
| PDF Text Extraction | Accurately pulling text from diverse resume layouts. | Fundamental for any analysis. |
| ATS Match Score | A percentage score indicating job relevance. | Primary user motivation for using the tool. |
| Keyword Detection | Identifying missing skills/keywords from job descriptions. | Standard expectation for resume optimization. |
| Secure Auth | Protecting user resume data. | Essential for privacy and personalization. |

### Differentiating (Should-Have)

| Feature | Description | Implementation Note |
|---------|-------------|-------------------|
| Semantic Reasoning | Matching "Experience with distributed systems" to "Cloud architecture". | Use Gemini Pro for complex semantic mapping. |
| Chat-based Prep | Interactive questions based on specific resume points. | Feed resume JSON into prompt for tailored questions. |
| Actionable Suggestions | Specific advice like "Quantify your achievements with numbers". | Prompt engineering to return specific JSON feedback. |
| Trend Analytics | Showing users what skills are currently "hot" in their field. | Aggregated data from common job descriptions. |

### Future Potential (Nice-to-Have)

| Feature | Description | Priority |
|---------|-------------|----------|
| Multi-format support | Docx, images (OCR). | Low |
| Voice/Video Prep | Analyzing tone and confidence. | Medium |
| LinkedIn Import | Direct data pull from social profile. | Medium |

## Implementation Notes

### Resume Analysis Pipeline
1. **Extraction**: Use `pdf-parse` to get raw string.
2. **Structuring**: Use Gemini to transform raw text into structured JSON (Skills, Work Exp, Education).
3. **Scoring**: Compare structured resume against Job Description using a 3-pillar prompt (Skills, Experience, Impact).

### Interview Prep Logic
1. **Context Loading**: Pass user's parsed resume and the job description.
2. **Persona**: AI acts as a "Senior Technical Interviewer".
3. **Session**: Maintain state for a 5-10 question interview cycle.

---
*Features research for: AI Resume Analyzer*
*Researched: 2026-05-08*
