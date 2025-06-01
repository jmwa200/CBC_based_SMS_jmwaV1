import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { FileText, Calendar, Clock } from 'lucide-react';
import { Assignment } from '../../types';
import { format, parseISO, isPast, isToday } from 'date-fns';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface AssignmentsListProps {
  assignments: Assignment[];
}

const AssignmentsList: React.FC<AssignmentsListProps> = ({ assignments }) => {
  const getStatusBadge = (dueDate: string) => {
    const date = parseISO(dueDate);
    
    if (isPast(date) && !isToday(date)) {
      return <Badge variant="danger">Overdue</Badge>;
    } else if (isToday(date)) {
      return <Badge variant="warning">Due Today</Badge>;
    } else {
      return <Badge variant="primary">Upcoming</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText size={18} className="mr-2 text-primary-600" />
          Assignments
        </CardTitle>
      </CardHeader>
      <CardContent>
        {assignments.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-slate-500">No assignments available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div 
                key={assignment.id}
                className="p-4 border border-slate-200 rounded-lg hover:border-primary-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-base">{assignment.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {assignment.description}
                    </p>
                  </div>
                  {getStatusBadge(assignment.dueDate)}
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar size={14} className="mr-1" />
                    Due: {format(parseISO(assignment.dueDate), 'MMM d, yyyy')}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock size={14} className="mr-1" />
                    Max Score: {assignment.maxScore}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="mr-2"
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm"
                  >
                    {assignment.submissions.length > 0 ? 'Update Submission' : 'Submit'}
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

export default AssignmentsList;