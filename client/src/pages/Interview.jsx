import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiTarget, FiMessageSquare } from 'react-icons/fi';
import axios from 'axios';

const Interview = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [interviewData, setInterviewData] = useState(null);

  const startInterview = async (e) => {
    e.preventDefault();
    if (!jobTitle) return setError('Please enter a target job title.');

    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/resume/interview-prep`, 
        { jobTitle }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInterviewData(res.data.questions);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to generate interview. Did you upload a resume first?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-white mb-2">Mock Interview Prep</h1>
      <p className="text-slate-400 mb-10">Generate highly specific interview questions based on your last uploaded resume and your target job title.</p>

      {!interviewData ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-2xl"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FiBriefcase className="text-3xl text-blue-400" />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-4">What role are you interviewing for?</h2>
          
          {error && <div className="text-red-400 mb-4 bg-red-500/10 py-2 rounded">{error}</div>}
          
          <form onSubmit={startInterview}>
            <input 
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Senior Frontend Developer, Data Scientist..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg mb-6"
            />
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${loading ? 'bg-blue-600/50 text-white/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'}`}
            >
              {loading ? 'Generating Custom Interview...' : 'Start Interview Prep'}
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center gap-3">
            <FiTarget className="text-xl" />
            <span className="font-medium">Questions tailored for: {jobTitle} based on your resume.</span>
          </div>

          <div className="space-y-6">
            {interviewData.map((q, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:bg-emerald-400 transition-colors" />
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900/50 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-slate-300 shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2">{q.question}</h3>
                    <div className="inline-block bg-slate-700/50 text-blue-300 text-xs px-2 py-1 rounded font-medium mb-3">
                      {q.type} Question
                    </div>
                    <div className="flex gap-2 items-start mt-2 bg-slate-900/30 p-3 rounded-lg border border-slate-700/30">
                      <FiMessageSquare className="text-slate-400 mt-1 shrink-0" />
                      <p className="text-slate-400 text-sm"><span className="text-slate-300 font-medium">Why they ask this:</span> {q.rationale}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
             <button onClick={() => setInterviewData(null)} className="text-slate-400 hover:text-white transition-colors underline">
               Prepare for a different role
             </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Interview;
