import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">A</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent hidden sm:block">
              AI Resume
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/dashboard" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Dashboard
            </Link>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/interview" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium hidden sm:block">
                  Mock Interview
                </Link>
                <Link to="/profile" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                  {user.name.split(' ')[0]}
                </Link>
                <button 
                  onClick={logout}
                  className="text-slate-400 hover:text-red-400 transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
                  Log in
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
