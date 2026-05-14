import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFileText, FiTarget, FiMessageSquare } from 'react-icons/fi';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
  >
    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-blue-400 text-2xl" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slate-100">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-20"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide">
          ✨ Powered by Gemini AI
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Supercharge Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">
            Career Journey
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Upload your resume, get instant ATS scoring, actionable feedback, and practice with AI-generated interview questions tailored to your profile.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-blue-400 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1">
            Get Started Free
          </Link>
          <Link to="/login" className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-all hover:-translate-y-1">
            View Demo
          </Link>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <FeatureCard 
          icon={FiFileText}
          title="Smart Resume Parsing"
          description="We analyze your PDF resume using advanced natural language processing to extract skills, experience, and education accurately."
          delay={0.2}
        />
        <FeatureCard 
          icon={FiTarget}
          title="ATS Optimization"
          description="Get a comprehensive ATS compatibility score with targeted suggestions on how to improve your match rate for top tech companies."
          delay={0.3}
        />
        <FeatureCard 
          icon={FiMessageSquare}
          title="Mock Interviews"
          description="Practice with dynamic, AI-generated interview questions based specifically on your resume and target role."
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default Home;
