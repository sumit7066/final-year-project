import { motion } from 'framer-motion';
import { FiUploadCloud, FiBarChart2, FiBookOpen, FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi';
import { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const DashboardCard = ({ title, description, icon: Icon, onClick, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl cursor-pointer hover:bg-slate-800/60 transition-all flex flex-col items-start text-left h-full"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
      <Icon className="text-2xl text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchHistory();
    }
  }, [user, navigate]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5001/api/resume/history', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory(res.data);
      if (res.data.length > 0 && !analysis) {
        // Show the most recent analysis by default
        setAnalysis(res.data[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      return setError('Please upload a valid PDF file.');
    }

    const formData = new FormData();
    formData.append('resume', file);

    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5001/api/resume/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      setAnalysis(res.data);
      fetchHistory(); // Refresh history list
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="py-10 max-w-6xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Track your progress and improve your resume.</p>
      </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-8 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="application/pdf"
          className="hidden" 
        />
        <DashboardCard 
          title={loading ? "Analyzing..." : "Upload New Resume"} 
          description="Upload a new PDF to get an AI-powered ATS score and actionable improvement suggestions."
          icon={FiUploadCloud}
          onClick={loading ? undefined : handleUploadClick}
          color="bg-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />
        <DashboardCard 
          title="Resume History" 
          description={`${history.length} resumes analyzed so far. Select one below to view past scores and skills.`}
          icon={FiClock}
          onClick={() => {
            if (history.length > 0) setAnalysis(history[0]);
          }}
          color="bg-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        />
        <DashboardCard 
          title="Interview Prep" 
          description="Practice custom mock interview questions generated based on your latest resume."
          icon={FiBookOpen}
          onClick={() => navigate('/interview')}
          color="bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: History List */}
        <div className="lg:w-1/3">
           <h2 className="text-xl font-semibold text-white mb-4">Past Resumes</h2>
           <div className="space-y-3">
             {history.length === 0 && !loading && (
               <div className="text-slate-500 text-sm italic bg-slate-800/30 p-4 rounded-lg">No resumes uploaded yet.</div>
             )}
             {history.map((item) => (
               <div 
                 key={item._id}
                 onClick={() => setAnalysis(item)}
                 className={`p-4 rounded-xl cursor-pointer border transition-all ${analysis?._id === item._id ? 'bg-blue-900/20 border-blue-500/50' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80'}`}
               >
                 <div className="flex justify-between items-center mb-1">
                   <h4 className="font-medium text-slate-200 truncate pr-2">{item.fileName}</h4>
                   <span className={`text-sm font-bold ${item.atsScore >= 80 ? 'text-emerald-400' : item.atsScore >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                     {item.atsScore}
                   </span>
                 </div>
                 <span className="text-xs text-slate-500">{new Date(item.createdAt).toLocaleDateString()}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Right Side: Analysis Detail */}
        <div className="lg:w-2/3">
          {loading && (
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-12 text-center h-full flex flex-col justify-center">
              <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-white mb-2">Analyzing your Resume...</h2>
              <p className="text-slate-400">Our AI is reading your PDF and extracting skills.</p>
            </div>
          )}

          {analysis && !loading && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                <span>Analysis for {analysis.fileName}</span>
                <span className="text-sm font-normal text-slate-400">{new Date(analysis.createdAt).toLocaleDateString()}</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* ATS Score Card */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-slate-400 font-medium mb-4">ATS Score</h3>
                  <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-slate-700">
                    <div className={`absolute w-full h-full rounded-full border-8 border-transparent ${analysis.atsScore >= 80 ? 'border-t-emerald-500 border-r-emerald-500' : analysis.atsScore >= 60 ? 'border-t-yellow-500' : 'border-t-red-500'} rotate-45`}></div>
                    <span className="text-4xl font-bold text-white">{analysis.atsScore}</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{analysis.summary}</p>
                </div>

                {/* Key Skills */}
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-400" /> Detected Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keySkills?.map((skill, i) => (
                      <span key={i} className="bg-slate-700/50 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Improvements */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiAlertCircle className="text-yellow-400" /> Suggested Improvements
                </h3>
                <ul className="space-y-3">
                  {analysis.improvements?.map((imp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <span className="text-yellow-500 mt-0.5">•</span>
                      <span className="text-sm leading-relaxed">{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock Interview */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-blue-400" /> Behavioral Questions
                </h3>
                <ul className="space-y-3">
                  {analysis.mockInterviewQuestions?.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 bg-blue-900/10 p-3 rounded-lg border border-blue-500/20">
                      <span className="text-blue-400 font-bold mt-0.5">Q{i+1}:</span>
                      <span className="text-sm leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Based Questions */}
              {analysis.skillBasedQuestions && analysis.skillBasedQuestions.length > 0 && (
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-400" /> Technical Skill Assessment
                  </h3>
                  <ul className="space-y-3">
                    {analysis.skillBasedQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 bg-emerald-900/10 p-3 rounded-lg border border-emerald-500/20">
                        <span className="text-emerald-400 font-bold mt-0.5">T{i+1}:</span>
                        <span className="text-sm leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rewritten Resume */}
              {analysis.rewrittenResume && (
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <FiUploadCloud className="text-blue-400" /> AI Rewritten Resume
                    </h3>
                    <button 
                      onClick={() => navigator.clipboard.writeText(analysis.rewrittenResume)}
                      className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded transition-colors"
                    >
                      Copy Text
                    </button>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 max-h-96 overflow-y-auto">
                    <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">
                      {analysis.rewrittenResume}
                    </pre>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
