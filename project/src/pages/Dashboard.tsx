import React from 'react';
import { Users, FileText, Video, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import StatCard from '../components/dashboard/StatCard';
import UpcomingClasses from '../components/dashboard/UpcomingClasses';
import Announcements from '../components/dashboard/Announcements';
import AssignmentsList from '../components/dashboard/AssignmentsList';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import { liveClasses, announcements, assignments } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const isTeacher = user?.role === 'teacher';
  const isStudent = user?.role === 'student';
  const isParent = user?.role === 'parent';
  
  // Filter content based on user role
  const upcomingClasses = liveClasses.filter(cls => cls.status === 'scheduled');
  const relevantAnnouncements = announcements.filter(ann => 
    ann.targetAudience.includes('all') || ann.targetAudience.includes(user?.role || '')
  );
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">
          Welcome back, {user?.name}!
        </p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Students"
          value={isAdmin ? "250" : isTeacher ? "120" : "35"}
          icon={<Users size={24} />}
          trend={{ value: 5.2, isPositive: true }}
          variant="primary"
        />
        <StatCard 
          title="Assignments"
          value={isAdmin || isTeacher ? "12" : "5"}
          icon={<FileText size={24} />}
          trend={{ value: 2.1, isPositive: true }}
          variant="secondary"
        />
        <StatCard 
          title="Live Classes"
          value={isAdmin ? "25" : "8"}
          icon={<Video size={24} />}
          trend={{ value: 12.5, isPositive: true }}
          variant="warning"
        />
        <StatCard 
          title="Attendance"
          value={isAdmin || isTeacher ? "92%" : isStudent ? "95%" : "90%"}
          icon={<Clock size={24} />}
          trend={{ value: 1.2, isPositive: false }}
          variant="danger"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <UpcomingClasses classes={upcomingClasses} />
          <AssignmentsList assignments={assignments} />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <AttendanceChart present={23} absent={2} late={3} />
          <Announcements announcements={relevantAnnouncements} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;