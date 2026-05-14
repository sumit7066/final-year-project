# AI Resume Analyzer - Final Year Project Report

## 1. Project Overview
**Project Name:** AI Resume Analyzer  
**Academic Year:** 2025-2026  
**Developed By:** Sumit (Final Year Student)  
**Technology Stack:** MERN (MongoDB, Express, React, Node.js) + Google Gemini AI  

### Executive Summary
The AI Resume Analyzer is a sophisticated web application designed to bridge the gap between job seekers and modern recruitment technology. By leveraging state-of-the-art Artificial Intelligence (Google Gemini), the platform provides users with instant, actionable feedback on their resumes, including ATS compatibility scores, skill gap analysis, and tailored interview preparation.

---

## 2. Problem Statement
In today's competitive job market, over 75% of resumes are filtered out by Applicant Tracking Systems (ATS) before they ever reach a human recruiter. Many qualified candidates fail to secure interviews because their resumes are not optimized for these systems or lack the specific keywords required for the role. There is a significant need for a tool that can provide data-driven insights into how a resume will be perceived by both machines and human recruiters.

---

## 3. Proposed Solution
Our solution provides a comprehensive ecosystem for resume optimization:
1.  **Instant ATS Scoring:** Provides a numerical score reflecting how well the resume is optimized.
2.  **AI-Powered Analysis:** Extracts key skills and identifies areas for improvement.
3.  **Resume Optimization:** Automatically suggests a rewritten, optimized version of the resume.
4.  **Interview Readiness:** Generates realistic mock interview questions based on the candidate's specific experience and a target job role.

---

## 4. System Architecture
The application follows a modern full-stack architecture:

### 4.1 Frontend (Client)
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (Modern, responsive design)
- **Animations:** Framer Motion (Premium UI/UX transitions)
- **State Management:** React Hooks & Context API
- **Networking:** Axios for secure API communication

### 4.2 Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt.js
- **File Handling:** Multer (Memory Storage)
- **Parsing:** PDF-Parse (Extraction of text from PDF documents)

### 4.3 Database
- **Platform:** MongoDB Atlas (Cloud Database)
- **Modeling:** Mongoose ODM

### 4.4 AI Integration
- **Engine:** Google Gemini AI (via @google/genai)

---

## 5. Key Features & Functionality

### 5.1 User Authentication
- Secure registration and login system.
- Password hashing using Bcrypt.
- Protected routes using JWT-based middleware.

### 5.2 Resume Upload & Parsing
- Supports PDF format uploads.
- Real-time text extraction from uploaded files.
- Secure handling of user documents in memory.

### 5.3 AI Analysis Engine
- **ATS Score Generation:** Evaluates resume structure and content.
- **Skill Extraction:** Identifies core competencies and technical skills.
- **Improvement Suggestions:** Actionable feedback on formatting and wording.
- **Resume Rewriting:** Provides a markdown-formatted, optimized version of the resume content.

### 5.4 Interview Preparation
- Users can specify a target Job Title.
- The AI generates 5 tailored questions (Behavioral & Technical).
- Each question includes a "Rationale" explaining why it's being asked based on the user's resume.

---

## 6. Implementation Details

### 6.1 Database Schema (Mongoose)
The `Resume` model stores the following data:
- `user`: Reference to the registered user.
- `fileName`: Original name of the uploaded PDF.
- `resumeText`: Extracted raw text.
- `atsScore`, `summary`, `keySkills`, `improvements`.
- `mockInterviewQuestions`, `rewrittenResume`.

### 6.2 AI Prompt Engineering
The system uses a highly structured prompt to ensure the AI returns valid JSON for consistent frontend rendering. The prompt instructs the AI to act as an "expert ATS and senior technical recruiter."

---

## 7. Conclusion
The AI Resume Analyzer successfully demonstrates the integration of modern web technologies with advanced AI models to solve a real-world problem. It provides a valuable tool for students and professionals to enhance their career prospects through data-driven resume optimization.
