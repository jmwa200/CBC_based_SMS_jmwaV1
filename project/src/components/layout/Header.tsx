import React, { useState } from 'react';
import { Bell, Moon, Sun, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, we would toggle a dark mode class on the html element
  };
  
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false);
  };
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false);
  };
  
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <span className="text-xl font-bold text-primary-700">EduLink</span>
        </div>
        
        <div className="flex items-center ml-auto">
          {/* Theme toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Notifications */}
          <div className="relative ml-2">
            <button 
              onClick={toggleNotifications}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 relative"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-slate-200 z-50">
                <div className="p-3 border-b border-slate-200">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-3 border-b border-slate-100 hover:bg-slate-50">
                    <p className="text-sm font-medium">New assignment posted</p>
                    <p className="text-xs text-slate-500">Mathematics: Algebra • 2 hours ago</p>
                  </div>
                  <div className="p-3 border-b border-slate-100 hover:bg-slate-50">
                    <p className="text-sm font-medium">Live class scheduled</p>
                    <p className="text-xs text-slate-500">Science: Water Cycle • 5 hours ago</p>
                  </div>
                  <div className="p-3 hover:bg-slate-50">
                    <p className="text-sm font-medium">Attendance marked</p>
                    <p className="text-xs text-slate-500">Today • 8:30 AM</p>
                  </div>
                </div>
                <div className="p-2 text-center border-t border-slate-200">
                  <button className="text-xs text-primary-600 hover:text-primary-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* User menu */}
          <div className="relative ml-2">
            <button 
              onClick={toggleUserMenu}
              className="flex items-center p-2 rounded-full text-slate-700 hover:bg-slate-100"
            >
              {user?.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <User size={20} />
              )}
              <span className="ml-2 text-sm font-medium hidden md:block">{user?.name}</span>
              <ChevronDown size={16} className="ml-1 hidden md:block" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-slate-200 z-50">
                <div className="p-3 border-b border-slate-200">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-slate-500">{user?.email}</p>
                </div>
                <div>
                  <button className="w-full text-left p-3 text-sm hover:bg-slate-50 flex items-center">
                    <User size={16} className="mr-2" />
                    Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left p-3 text-sm hover:bg-slate-50 flex items-center text-danger-600"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;