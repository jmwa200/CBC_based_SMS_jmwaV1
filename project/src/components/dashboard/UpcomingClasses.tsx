import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Video, Calendar, Clock, Users } from 'lucide-react';
import { LiveClass } from '../../types';
import { format } from 'date-fns';
import Button from '../ui/Button';

interface UpcomingClassesProps {
  classes: LiveClass[];
}

const UpcomingClasses: React.FC<UpcomingClassesProps> = ({ classes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Video size={18} className="mr-2 text-primary-600" />
          Upcoming Classes
        </CardTitle>
      </CardHeader>
      <CardContent>
        {classes.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-slate-500">No upcoming classes scheduled</p>
          </div>
        ) : (
          <div className="space-y-4">
            {classes.map((classItem) => (
              <div 
                key={classItem.id}
                className="p-4 border border-slate-200 rounded-lg hover:border-primary-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-base">{classItem.title}</h4>
                    {classItem.description && (
                      <p className="text-sm text-slate-500 mt-1">{classItem.description}</p>
                    )}
                  </div>
                  <div className="bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1 rounded">
                    {classItem.status}
                  </div>
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar size={14} className="mr-1" />
                    {format(new Date(classItem.startTime), 'MMM d, yyyy')}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock size={14} className="mr-1" />
                    {format(new Date(classItem.startTime), 'h:mm a')} - {format(new Date(classItem.endTime), 'h:mm a')}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-600">
                    <Users size={14} className="mr-1" />
                    Grade 7-A
                  </div>
                  
                  <Button 
                    size="sm"
                    rightIcon={<Video size={14} />}
                    onClick={() => window.open(classItem.meetingLink, '_blank')}
                  >
                    Join Class
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingClasses;