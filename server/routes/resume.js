import express from 'express';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import { GoogleGenAI } from '@google/genai';
import auth from '../middleware/auth.js';
import Resume from '../models/Resume.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Upload and analyze resume
router.post('/upload', auth, upload.single('resume'), async (req, res) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({ message: 'Could not extract text from PDF' });
    }

    const prompt = `
      You are an expert ATS (Applicant Tracking System) and senior technical recruiter. 
      Analyze the following resume text and provide a JSON response strictly with this structure:
      {
        "atsScore": (number out of 100),
        "summary": (brief string evaluating the overall resume),
        "keySkills": (array of strings),
        "improvements": (array of strings, actionable feedback),
        "mockInterviewQuestions": (array of 3 specific technical/behavioral strings based on their experience),
        "skillBasedQuestions": (array of 3 to 5 highly technical questions testing the specific core skills extracted),
        "rewrittenResume": (A string containing the fully rewritten, optimized resume incorporating all improvements. Use basic markdown and ensure all newlines are properly escaped as \\n so the JSON remains valid.)
      }

      Resume Text:
      ${resumeText}
      
      Respond STRICTLY with valid JSON only. Do not include markdown formatting like \`\`\`json.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { temperature: 0.2 }
    });

    const cleanedJsonString = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
    const analysis = JSON.parse(cleanedJsonString);

    // Save to Database
    const newResume = new Resume({
      user: req.user.id,
      fileName: req.file.originalname,
      resumeText: resumeText,
      atsScore: analysis.atsScore,
      summary: analysis.summary,
      keySkills: analysis.keySkills,
      improvements: analysis.improvements,
      mockInterviewQuestions: analysis.mockInterviewQuestions,
      skillBasedQuestions: analysis.skillBasedQuestions,
      rewrittenResume: analysis.rewrittenResume
    });

    await newResume.save();
    res.json(newResume);

  } catch (error) {
    console.error('Error processing resume:', error);
    res.status(500).json({ message: error.message || 'Server error processing resume' });
  }
});

// Get user resume history
router.get('/history', auth, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(resumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Generate interview questions based on specific job title and latest resume
router.post('/interview-prep', auth, async (req, res) => {
  try {
    const { jobTitle } = req.body;
    if (!jobTitle) return res.status(400).json({ message: 'Job title is required' });

    // Fetch the user's latest resume to base questions on
    const latestResume = await Resume.findOne({ user: req.user.id }).sort({ createdAt: -1 });
    
    if (!latestResume) {
      return res.status(400).json({ message: 'Please upload a resume first before starting interview prep.' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `
      You are an expert technical interviewer hiring for the role of "${jobTitle}".
      Here is the candidate's resume text:
      ---
      ${latestResume.resumeText}
      ---
      
      Generate a realistic, challenging mock interview for this candidate applying for the "${jobTitle}" position.
      Provide exactly 5 highly specific questions. They should be a mix of behavioral and technical questions directly tailored to their past experience listed in the resume.
      
      Respond STRICTLY with valid JSON in this format:
      {
        "questions": [
          { "question": "Question text here", "type": "Behavioral or Technical", "rationale": "Why you are asking this based on their resume" }
        ]
      }
      Do not include markdown like \`\`\`json.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { temperature: 0.4 }
    });

    const cleanedJsonString = response.text.replace(/```json/g, '').replace(/```/g, '').trim();
    const interviewData = JSON.parse(cleanedJsonString);

    res.json(interviewData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error generating interview' });
  }
});

export default router;
