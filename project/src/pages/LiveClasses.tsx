import React, { useState } from 'react';
import { Video, Calendar, Clock, Filter, Users, Search, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { LiveClass } from '../types';
import { liveClasses } from '../data/mockData';
import { format, parseISO } from 'date-fns';
import { useAuth } from '../contexts/AuthContext';

const LiveClasses: React.FC = () => {
  const { user } = useAuth();
  const isTeacher = user?.role === 'teacher';
  const isAdmin = user?.role === 'admin';
  const canCreateClasses = isTeacher || isAdmin;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const filteredClasses = liveClasses.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || cls.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="primary">Scheduled</Badge>;
      case 'ongoing':
        return <Badge variant="warning">Ongoing</Badge>;
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="danger">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Live Classes</h1>
          <p className="text-slate-500 mt-1">
            Attend or manage virtual classes
          </p>
        </div>
        
        {canCreateClasses && (
          <Button leftIcon={<Plus size={16} />}>
            Schedule Class
          </Button>
        )}
      </div>
      
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Filter size={18} className="text-slate-500 mr-2" />
                <span className="text-sm text-slate-500 mr-2">Status:</span>
              </div>
              
              <select 
                className="input max-w-[150px]"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="scheduled">Scheduled</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Classes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredClasses.map((classItem: LiveClass) => (
          <Card key={classItem.id} className="overflow-hidden">
            <div className="bg-primary-600 h-2"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{classItem.title}</h3>
                  {classItem.description && (
                    <p className="text-sm text-slate-500 mt-1">{classItem.description}</p>
                  )}
                </div>
                {getStatusBadge(classItem.status)}
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="text-slate-400 mr-2" />
                  <span>{format(parseISO(classItem.startTime), 'EEEE, MMMM d, yyyy')}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock size={16} className="text-slate-400 mr-2" />
                  <span>
                    {format(parseISO(classItem.startTime), 'h:mm a')} - {format(parseISO(classItem.endTime), 'h:mm a')}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Users size={16} className="text-slate-400 mr-2" />
                  <span>Grade 7-A</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {classItem.status === 'scheduled' && (
                  <Button 
                    leftIcon={<Video size={16} />}
                    onClick={() => window.open(classItem.meetingLink, '_blank')}
                  >
                    Join Class
                  </Button>
                )}
                
                {classItem.status === 'completed' && classItem.recordingLink && (
                  <Button 
                    variant="outline"
                    leftIcon={<Video size={16} />}
                    onClick={() => window.open(classItem.recordingLink, '_blank')}
                  >
                    Watch Recording
                  </Button>
                )}
                
                {canCreateClasses && (
                  <Button variant="outline">
                    Edit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        
        {filteredClasses.length === 0 && (
          <div className="col-span-full">
            <Card>
              <CardContent className="p-12 text-center">
                <Video size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No classes found</h3>
                <p className="text-slate-500">
                  {searchQuery 
                    ? `No classes match "${searchQuery}"`
                    : 'No classes available with the selected filters'}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClasses;