import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FiUser, FiMail, FiCalendar } from 'react-icons/fi';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="py-10 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-white mb-8">My Profile</h1>
      
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center text-5xl font-bold text-white shadow-xl">
          {user.name.charAt(0).toUpperCase()}
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-300">
            <FiUser className="text-xl text-blue-400" />
            <span className="text-xl font-medium">{user.name}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <FiMail className="text-xl text-emerald-400" />
            <span className="text-lg">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <FiCalendar className="text-xl text-purple-400" />
            <span className="text-lg">Joined {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
