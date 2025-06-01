import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Bell, Calendar } from 'lucide-react';
import { Announcement } from '../../types';
import { format, parseISO } from 'date-fns';
import Badge from '../ui/Badge';

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell size={18} className="mr-2 text-primary-600" />
          Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        {announcements.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-slate-500">No announcements available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className={`p-4 border rounded-lg transition-colors ${
                  announcement.important 
                    ? 'border-danger-200 bg-danger-50/50' 
                    : 'border-slate-200 hover:border-primary-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-base flex items-center">
                      {announcement.title}
                      {announcement.important && (
                        <Badge variant="danger\" size="sm\" className="ml-2">
                          Important
                        </Badge>
                      )}
                    </h4>
                    <div className="flex items-center text-sm text-slate-500 mt-1">
                      <Calendar size={14} className="mr-1" />
                      {format(parseISO(announcement.createdAt), 'MMM d, yyyy')}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-slate-700 mt-2">
                  {announcement.content}
                </p>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {announcement.targetAudience.map((audience) => (
                    <Badge key={audience} variant="neutral" size="sm">
                      {audience}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Announcements;