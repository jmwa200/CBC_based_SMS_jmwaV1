import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, User, BookOpen } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    }
  };
  
  const handleDemoLogin = async (userType: string) => {
    let demoEmail = '';
    
    switch (userType) {
      case 'admin':
        demoEmail = 'admin@edulink.co.ke';
        break;
      case 'teacher':
        demoEmail = 'teacher@edulink.co.ke';
        break;
      case 'student':
        demoEmail = 'student@edulink.co.ke';
        break;
      case 'parent':
        demoEmail = 'parent@edulink.co.ke';
        break;
      default:
        return;
    }
    
    const success = await login(demoEmail, 'password');
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary-100 rounded-full">
              <BookOpen size={32} className="text-primary-700" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">EduLink</h1>
          <p className="text-slate-500 mt-2">School Management System</p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail size={18} />}
                required
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftIcon={<Lock size={18} />}
                required
              />
              
              {error && (
                <div className="text-danger-600 text-sm py-2">{error}</div>
              )}
              
              <Button
                type="submit"
                className="w-full"
                isLoading={loading}
                rightIcon={<LogIn size={18} />}
              >
                Sign In
              </Button>
            </form>
            
            <div className="mt-8">
              <p className="text-sm text-slate-500 text-center mb-4">Demo Accounts</p>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDemoLogin('admin')}
                  leftIcon={<User size={14} />}
                >
                  Admin
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDemoLogin('teacher')}
                  leftIcon={<User size={14} />}
                >
                  Teacher
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDemoLogin('student')}
                  leftIcon={<User size={14} />}
                >
                  Student
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDemoLogin('parent')}
                  leftIcon={<User size={14} />}
                >
                  Parent
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-center text-sm text-slate-500 mt-8">
          © {new Date().getFullYear()} EduLink • Designed for Kenyan Schools
        </p>
      </div>
    </div>
  );
};

export default Login;