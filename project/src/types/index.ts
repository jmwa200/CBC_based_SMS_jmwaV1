export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  section: string;
  rollNumber: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  address: string;
  parentId: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subjects: string[];
  classes: string[];
  phone: string;
  qualifications: string[];
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  phone: string;
  studentIds: string[];
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  teacherId: string;
  studentIds: string[];
  subjects: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  grade: string;
  teacherIds: string[];
}

export interface Attendance {
  id: string;
  classId: string;
  date: string;
  studentRecords: {
    studentId: string;
    status: 'present' | 'absent' | 'late' | 'excused';
    notes?: string;
  }[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  dueDate: string;
  maxScore: number;
  attachments?: string[];
  submissions: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedAt: string;
  status: 'submitted' | 'late' | 'graded';
  attachments?: string[];
  score?: number;
  feedback?: string;
}

export interface LiveClass {
  id: string;
  title: string;
  description?: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  meetingLink?: string;
  recordingLink?: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  description?: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  uploadedAt: string;
  type: 'document' | 'video' | 'link' | 'other';
  url: string;
  fileSize?: number;
}

export interface FeeRecord {
  id: string;
  studentId: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue' | 'partial';
  paymentDate?: string;
  paymentMethod?: 'mpesa' | 'bank' | 'cash' | 'other';
  transactionId?: string;
  balance?: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
  targetAudience: ('all' | 'teachers' | 'students' | 'parents')[];
  important: boolean;
}

export interface Timetable {
  id: string;
  classId: string;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  periods: TimetablePeriod[];
}

export interface TimetablePeriod {
  id: string;
  subjectId: string;
  teacherId: string;
  startTime: string;
  endTime: string;
  roomNumber?: string;
}

export interface Exam {
  id: string;
  title: string;
  description?: string;
  subjectId: string;
  classId: string;
  startTime: string;
  endTime: string;
  maxScore: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  questions: ExamQuestion[];
}

export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  text: string;
  options?: string[];
  correctAnswer?: string | string[];
  score: number;
}

export interface ExamResult {
  id: string;
  examId: string;
  studentId: string;
  score: number;
  submittedAt: string;
  answers: {
    questionId: string;
    answer: string | string[];
    score: number;
  }[];
  feedback?: string;
}