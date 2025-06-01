import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Video, 
  Clock, 
  MessageSquare, 
  BarChart3, 
  DollarSign,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { user } = useAuth();
  
  const isAdmin = user?.role === 'admin';
  const isTeacher = user?.role === 'teacher';
  const isStudent = user?.role === 'student';
  const isParent = user?.role === 'parent';
  
  const menuItems = [
    { to: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    ...(isAdmin || isTeacher ? [{ to: '/students', label: 'Students', icon: <Users size={20} /> }] : []),
    ...(isAdmin ? [{ to: '/teachers', label: 'Teachers', icon: <Users size={20} /> }] : []),
    { to: '/classes', label: 'Classes', icon: <BookOpen size={20} /> },
    { to: '/timetable', label: 'Timetable', icon: <Calendar size={20} /> },
    { to: '/assignments', label: 'Assignments', icon: <FileText size={20} /> },
    { to: '/live-classes', label: 'Live Classes', icon: <Video size={20} /> },
    { to: '/attendance', label: 'Attendance', icon: <Clock size={20} /> },
    { to: '/messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    ...(isAdmin || isParent ? [{ to: '/fees', label: 'Fees', icon: <DollarSign size={20} /> }] : []),
    ...(isAdmin || isTeacher ? [{ to: '/reports', label: 'Reports', icon: <BarChart3 size={20} /> }] : []),
  ];

  return (
    <>
      <div 
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-30 ${
          isOpen ? 'w-64' : 'w-0 -translate-x-full md:w-16 md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className={`flex items-center ${!isOpen && 'md:hidden'}`}>
              <span className="text-xl font-bold text-primary-700">EduLink</span>
            </div>
            <button 
              onClick={toggleSidebar} 
              className="p-1 rounded-md hover:bg-slate-100 md:hidden"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="overflow-y-auto flex-1 py-4">
            <ul className="space-y-2 px-2">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `
                      flex items-center p-2 rounded-md transition-colors
                      ${isActive 
                        ? 'bg-primary-50 text-primary-700 font-medium' 
                        : 'text-slate-700 hover:bg-slate-100'
                      }
                      ${!isOpen && 'md:justify-center'}
                    `}
                  >
                    <div className="mr-3">{item.icon}</div>
                    <span className={`${!isOpen && 'md:hidden'}`}>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-600 text-white shadow-lg z-20 md:hidden"
      >
        <Menu size={24} />
      </button>
    </>
  );
};

export default Sidebar;