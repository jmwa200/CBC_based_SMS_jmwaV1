import { User, Student, Teacher, Parent, Class, Subject, Attendance, Assignment, LiveClass, StudyMaterial, FeeRecord, Announcement, Timetable, Exam } from '../types';

// Mock Users
export const users: User[] = [
  {
    id: 'user1',
    name: 'Naomi Wanjiku',
    email: 'admin@edulink.co.ke',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'user2',
    name: 'Samuel Omondi',
    email: 'teacher@edulink.co.ke',
    role: 'teacher',
    avatar: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'user3',
    name: 'Joyce Muthoni',
    email: 'student@edulink.co.ke',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'user4',
    name: 'James Kiprop',
    email: 'parent@edulink.co.ke',
    role: 'parent',
    avatar: 'https://images.pexels.com/photos/7869237/pexels-photo-7869237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Mock Students
export const students: Student[] = [
  {
    id: 'student1',
    name: 'Joyce Muthoni',
    email: 'student@edulink.co.ke',
    grade: 'Grade 7',
    section: 'A',
    rollNumber: '2023001',
    gender: 'female',
    dateOfBirth: '2010-05-15',
    address: 'Nairobi, Kenya',
    parentId: 'parent1',
  },
  {
    id: 'student2',
    name: 'Daniel Kimani',
    email: 'daniel.k@edulink.co.ke',
    grade: 'Grade 7',
    section: 'A',
    rollNumber: '2023002',
    gender: 'male',
    dateOfBirth: '2010-08-22',
    address: 'Kiambu, Kenya',
    parentId: 'parent2',
  },
  {
    id: 'student3',
    name: 'Faith Wambui',
    email: 'faith.w@edulink.co.ke',
    grade: 'Grade 7',
    section: 'B',
    rollNumber: '2023003',
    gender: 'female',
    dateOfBirth: '2010-03-10',
    address: 'Nakuru, Kenya',
    parentId: 'parent3',
  },
  {
    id: 'student4',
    name: 'Brian Otieno',
    email: 'brian.o@edulink.co.ke',
    grade: 'Grade 8',
    section: 'A',
    rollNumber: '2022001',
    gender: 'male',
    dateOfBirth: '2009-11-05',
    address: 'Kisumu, Kenya',
    parentId: 'parent4',
  },
];

// Mock Teachers
export const teachers: Teacher[] = [
  {
    id: 'teacher1',
    name: 'Samuel Omondi',
    email: 'teacher@edulink.co.ke',
    subjects: ['Mathematics', 'Science'],
    classes: ['Grade 7-A', 'Grade 8-A'],
    phone: '+254712345678',
    qualifications: ['B.Ed Mathematics', 'M.Ed Curriculum Development'],
  },
  {
    id: 'teacher2',
    name: 'Elizabeth Njeri',
    email: 'elizabeth.n@edulink.co.ke',
    subjects: ['English', 'Kiswahili'],
    classes: ['Grade 7-B', 'Grade 8-B'],
    phone: '+254723456789',
    qualifications: ['B.Ed Languages', 'TESOL Certification'],
  },
];

// Mock Parents
export const parents: Parent[] = [
  {
    id: 'parent1',
    name: 'James Kiprop',
    email: 'parent@edulink.co.ke',
    phone: '+254734567890',
    studentIds: ['student1'],
  },
  {
    id: 'parent2',
    name: 'Mary Akinyi',
    email: 'mary.a@example.com',
    phone: '+254745678901',
    studentIds: ['student2'],
  },
];

// Mock Classes
export const classes: Class[] = [
  {
    id: 'class1',
    name: 'Grade 7-A',
    grade: 'Grade 7',
    section: 'A',
    teacherId: 'teacher1',
    studentIds: ['student1', 'student2'],
    subjects: ['Mathematics', 'Science', 'English', 'Kiswahili', 'Social Studies'],
  },
  {
    id: 'class2',
    name: 'Grade 7-B',
    grade: 'Grade 7',
    section: 'B',
    teacherId: 'teacher2',
    studentIds: ['student3'],
    subjects: ['Mathematics', 'Science', 'English', 'Kiswahili', 'Social Studies'],
  },
];

// Mock Subjects
export const subjects: Subject[] = [
  {
    id: 'subject1',
    name: 'Mathematics',
    code: 'MATH-7',
    grade: 'Grade 7',
    teacherIds: ['teacher1'],
  },
  {
    id: 'subject2',
    name: 'Science',
    code: 'SCI-7',
    grade: 'Grade 7',
    teacherIds: ['teacher1'],
  },
  {
    id: 'subject3',
    name: 'English',
    code: 'ENG-7',
    grade: 'Grade 7',
    teacherIds: ['teacher2'],
  },
];

// Mock Attendance
export const attendance: Attendance[] = [
  {
    id: 'attendance1',
    classId: 'class1',
    date: '2023-06-15',
    studentRecords: [
      {
        studentId: 'student1',
        status: 'present',
      },
      {
        studentId: 'student2',
        status: 'absent',
        notes: 'Parent called - sick',
      },
    ],
  },
  {
    id: 'attendance2',
    classId: 'class1',
    date: '2023-06-16',
    studentRecords: [
      {
        studentId: 'student1',
        status: 'present',
      },
      {
        studentId: 'student2',
        status: 'present',
      },
    ],
  },
];

// Mock Assignments
export const assignments: Assignment[] = [
  {
    id: 'assignment1',
    title: 'Mathematics Problem Set 1',
    description: 'Complete problems 1-10 on page 25 of the textbook.',
    subjectId: 'subject1',
    classId: 'class1',
    teacherId: 'teacher1',
    dueDate: '2023-06-20',
    maxScore: 20,
    submissions: [
      {
        id: 'submission1',
        assignmentId: 'assignment1',
        studentId: 'student1',
        submittedAt: '2023-06-19',
        status: 'graded',
        score: 18,
        feedback: 'Excellent work! Just a small error in question 7.',
      },
    ],
  },
  {
    id: 'assignment2',
    title: 'Science Lab Report',
    description: 'Write a lab report on the water cycle experiment.',
    subjectId: 'subject2',
    classId: 'class1',
    teacherId: 'teacher1',
    dueDate: '2023-06-25',
    maxScore: 30,
    submissions: [],
  },
];

// Mock Live Classes
export const liveClasses: LiveClass[] = [
  {
    id: 'liveClass1',
    title: 'Mathematics: Algebra Introduction',
    description: 'Introduction to basic algebraic expressions and equations.',
    subjectId: 'subject1',
    classId: 'class1',
    teacherId: 'teacher1',
    startTime: '2023-06-20T09:00:00',
    endTime: '2023-06-20T10:00:00',
    status: 'scheduled',
    meetingLink: 'https://meet.edulink.co.ke/math-grade7-algebra',
  },
  {
    id: 'liveClass2',
    title: 'Science: Water Cycle',
    description: 'Understanding the water cycle and its importance.',
    subjectId: 'subject2',
    classId: 'class1',
    teacherId: 'teacher1',
    startTime: '2023-06-21T11:00:00',
    endTime: '2023-06-21T12:00:00',
    status: 'scheduled',
    meetingLink: 'https://meet.edulink.co.ke/science-grade7-watercycle',
  },
];

// Mock Study Materials
export const studyMaterials: StudyMaterial[] = [
  {
    id: 'material1',
    title: 'Algebra Basics',
    description: 'Introduction to algebraic expressions and equations.',
    subjectId: 'subject1',
    classId: 'class1',
    teacherId: 'teacher1',
    uploadedAt: '2023-06-10',
    type: 'document',
    url: '/materials/algebra-basics.pdf',
    fileSize: 2048,
  },
  {
    id: 'material2',
    title: 'Water Cycle Video',
    description: 'Visual explanation of the water cycle process.',
    subjectId: 'subject2',
    classId: 'class1',
    teacherId: 'teacher1',
    uploadedAt: '2023-06-12',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=example',
  },
];

// Mock Fee Records
export const feeRecords: FeeRecord[] = [
  {
    id: 'fee1',
    studentId: 'student1',
    amount: 15000,
    dueDate: '2023-07-01',
    status: 'paid',
    paymentDate: '2023-06-25',
    paymentMethod: 'mpesa',
    transactionId: 'MPESA12345678',
  },
  {
    id: 'fee2',
    studentId: 'student2',
    amount: 15000,
    dueDate: '2023-07-01',
    status: 'pending',
  },
];

// Mock Announcements
export const announcements: Announcement[] = [
  {
    id: 'announcement1',
    title: 'End of Term Exams',
    content: 'End of term exams will begin on July 10th. Please ensure all assignments are submitted before then.',
    createdAt: '2023-06-15',
    createdBy: 'user1',
    targetAudience: ['all'],
    important: true,
  },
  {
    id: 'announcement2',
    title: 'Parent-Teacher Meeting',
    content: 'Parent-teacher meetings will be held on June 30th from 2 PM to 6 PM.',
    createdAt: '2023-06-18',
    createdBy: 'user1',
    targetAudience: ['teachers', 'parents'],
    important: false,
  },
];

// Mock Timetables
export const timetables: Timetable[] = [
  {
    id: 'timetable1',
    classId: 'class1',
    day: 'monday',
    periods: [
      {
        id: 'period1',
        subjectId: 'subject1',
        teacherId: 'teacher1',
        startTime: '08:00',
        endTime: '08:40',
        roomNumber: 'Room 101',
      },
      {
        id: 'period2',
        subjectId: 'subject2',
        teacherId: 'teacher1',
        startTime: '08:45',
        endTime: '09:25',
        roomNumber: 'Lab 1',
      },
      {
        id: 'period3',
        subjectId: 'subject3',
        teacherId: 'teacher2',
        startTime: '09:30',
        endTime: '10:10',
        roomNumber: 'Room 102',
      },
    ],
  },
];

// Mock Exams
export const exams: Exam[] = [
  {
    id: 'exam1',
    title: 'Mathematics Mid-Term Exam',
    description: 'Covers chapters 1-5 of the textbook.',
    subjectId: 'subject1',
    classId: 'class1',
    startTime: '2023-07-10T09:00:00',
    endTime: '2023-07-10T11:00:00',
    maxScore: 100,
    status: 'upcoming',
    questions: [
      {
        id: 'question1',
        type: 'multiple-choice',
        text: 'Which of the following is not a solution to x² - 5x + 6 = 0?',
        options: ['2', '3', '4', '1'],
        correctAnswer: '4',
        score: 5,
      },
      {
        id: 'question2',
        type: 'true-false',
        text: 'The sum of the interior angles of a triangle is 180 degrees.',
        correctAnswer: 'true',
        score: 5,
      },
    ],
  },
];