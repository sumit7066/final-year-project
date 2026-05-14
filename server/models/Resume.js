import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  resumeText: {
    type: String,
    required: true
  },
  atsScore: Number,
  summary: String,
  keySkills: [String],
  improvements: [String],
  mockInterviewQuestions: [String],
  skillBasedQuestions: [String],
  rewrittenResume: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Resume', resumeSchema);
