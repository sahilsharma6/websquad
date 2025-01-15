import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  Settings,
  FileText,
  Calendar,
  BookOpen,
  MessageSquare,
  BarChart,
  Clock,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Common style for sidebar items
  const linkStyle = "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors";
  const activeLinkStyle = "flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium";

  // Sidebar items for each role
  const sidebarItems = {
    admin: [
      { icon: <Users size={20} />, label: 'Manage Users', path: '/dashboard/admin/users' },
      { icon: <BarChart size={20} />, label: 'Analytics', path: '/dashboard/admin/analytics' },
      { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/admin/settings' },
      { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/admin/reports' },
    ],
    employee: [
      { icon: <BarChart size={20} />, label: 'Dashboard', path: '/dashboard/employee' },
      { icon: <Briefcase size={20} />, label: 'Tasks', path: '/dashboard/employee/tasks' },
      { icon: <Calendar size={20} />, label: 'Schedule', path: '/dashboard/employee/schedule' },
      { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/employee/messages' },
      { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/employee/reports' },
    ],
    intern: [
      { icon: <GraduationCap size={20} />, label: 'Training', path: '/dashboard/intern/training' },
      { icon: <Clock size={20} />, label: 'Time Log', path: '/dashboard/intern/timelog' },
      { icon: <BookOpen size={20} />, label: 'Resources', path: '/dashboard/intern/resources' },
      { icon: <MessageSquare size={20} />, label: 'Mentorship', path: '/dashboard/intern/mentorship' },
    ]
  };

  // Get current role's sidebar items
  const currentRoleItems = sidebarItems[user?.role] || [];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 px-4">
          {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)} Dashboard
        </h2>
      </div>
      
      <nav className="space-y-2">
        {currentRoleItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? activeLinkStyle : linkStyle}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
        <div>
        <button
          className={`${activeLinkStyle} w-full`}
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h2.25"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V13.875a.375.375 0 01.375-.375h3.75c.621 0 1.219-.504 1.219-1.125v-1.5c0-.621-.504-1.219-1.125-1.219H15a.375.375 0 01-.375.375v3.75z"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
      </nav>

      <div className="absolute bottom-4 w-56">
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-900">{user?.name}</div>
          <div className="text-sm text-gray-500 capitalize">{user?.role}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;