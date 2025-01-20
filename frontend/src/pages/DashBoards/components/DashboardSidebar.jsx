import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, User, UserPlus, X } from 'lucide-react';
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
  GraduationCap,
  Circle,
  Building,
  Mail
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/navbarComponents/Logo';
import { motion } from 'framer-motion';

const MenuItem = ({ item, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const isChildActive = hasChildren && item.children.some(child => location.pathname === child.path);

  useEffect(() => {
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive]);

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (item.path) {
      navigate(item.path);
      onNavigate && onNavigate();
    }
  };

  const baseStyle = "flex items-center w-full text-sm select-none";
  const activeStyle = "text-navlinks bg-primary/20";
  const inactiveStyle = "text-gray-600 hover:bg-gray-50";

  return (
    <div className="flex flex-col">
      <button
        onClick={handleClick}
        className={`${baseStyle} ${(isActive || isChildActive) ? activeStyle : inactiveStyle} px-3 py-2 rounded-md transition-colors duration-150`}
      >
        <div className="flex items-center flex-1 gap-3">
          <div className="w-5 h-5 flex items-center justify-center text-gray-400">
            {item.icon}
          </div>
          <span className="font-medium">{item.label}</span>
        </div>
        {hasChildren && (
          <ChevronDown
            size={16}
            className={`transform transition-transform duration-200 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {hasChildren && (
        <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="ml-4 pl-4 border-l border-gray-100 space-y-1 my-1">
            {item.children.map((child) => (
              <button
                key={child.path}
                onClick={() => {
                  navigate(child.path);
                  onNavigate && onNavigate();
                }}
                className={`${baseStyle} ${location.pathname === child.path ? activeStyle : inactiveStyle} px-3 py-2 rounded-md text-sm transition-colors duration-150 w-full text-left`}
              >
                <div className="flex items-center gap-3">
                  <Circle size={4} className="text-gray-400" />
                  <span className="font-medium">{child.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardSidebar = ({ onClose }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose && onClose();
  };

  const handleNavigate = () => {
    onClose && onClose();
  };

  // Your existing sidebarItems configuration...
  const sidebarItems = {
    admin: [
      {
        icon: <BarChart size={16} />,
        label: 'Dashboard',
        path: '/dashboard/admin'
      },
      {
        icon: <Users size={16} />,
        label: 'Manage Users',
        children: [
          { label: 'Employees', path: '/dashboard/admin/users/employees' },
          { label: 'Interns', path: '/dashboard/admin/users/interns' },
          { label: 'Regular Users', path: '/dashboard/admin/users/regular' }
        ]
      },
      {
        icon: <BarChart size={16} />,
        label: 'Analytics',
        children: [
          { label: 'Performance', path: '/dashboard/admin/analytics/performance' },
          { label: 'Usage', path: '/dashboard/admin/analytics/usage' }
        ]
      },
      {
        icon: <Settings size={16} />,
        label: 'Settings',
        path: '/dashboard/admin/settings'
      },
      {
        icon: <FileText size={16} />,
        label: 'Reports',
        children: [
          { label: 'Monthly', path: '/dashboard/admin/reports/monthly' },
          { label: 'Annual', path: '/dashboard/admin/reports/annual' }
        ]
      }
    ],
    employee: [
      {
        icon: <BarChart size={16} />,
        label: 'Dashboard',
        path: '/dashboard/employee'
      },
      {
        icon: <Briefcase size={16} />,
        label: 'Tasks',
        children: [
          { label: 'Active Tasks', path: '/dashboard/employee/tasks/active' },
          { label: 'Completed', path: '/dashboard/employee/tasks/completed' }
        ]
      },
      {
        icon: <Calendar size={16} />,
        label: 'Schedule',
        path: '/dashboard/employee/schedule'
      },
      {
        icon: <MessageSquare size={16} />,
        label: 'Messages',
        children: [
          { label: 'Inbox', path: '/dashboard/employee/messages/inbox' },
          { label: 'Sent', path: '/dashboard/employee/messages/sent' }
        ]
      }
    ],
    intern: [
      {
        icon: <BarChart size={16} />,
        label: 'Dashboard',
        path: '/dashboard/intern'
      },
      {
        icon: <GraduationCap size={16} />,
        label: 'Training',
        children: [
          { label: 'Courses', path: '/dashboard/intern/training/courses' },
          { label: 'Assignments', path: '/dashboard/intern/training/assignments' }
        ]
      },
      {
        icon: <Clock size={16} />,
        label: 'Time Log',
        path: '/dashboard/intern/timelog'
      },
      {
        icon: <BookOpen size={16} />,
        label: 'Resources',
        path: '/dashboard/intern/resources'
      },
      {
        icon: <User size={16} />,
        label: 'Mentors',
        path: '/dashboard/intern/mentorship'
      }
      
    ]
  };

  const roleActions = {
    admin: [
      {
        icon: <UserPlus size={18} />,
        label: 'Add New User',
        onClick: () => setShowAddUserDropdown(!showAddUserDropdown),
        dropdown: true
      },
    ],
    employee: [
      { icon: <Clock size={18} />, label: 'Time Sheet', onClick: () => navigate('/dashboard/employee/timesheet') },
      { icon: <Calendar size={18} />, label: 'Schedule', onClick: () => navigate('/dashboard/employee/schedule') }
    ],
    intern: [
      { icon: <Clock size={18} />, label: 'Log Hours', onClick: () => navigate('/dashboard/intern/timelog') },
      { icon: <Users size={18} />, label: 'My Mentors', onClick: () => navigate('/dashboard/intern/mentorship') }
    ]
  };

  const currentRoleItems = sidebarItems[user?.role] || [];

  const [showAddUserDropdown, setShowAddUserDropdown] = useState(false);
  const currentActions = roleActions[user?.role] || [];

  const handleAddUser = (type) => {
    setShowAddUserDropdown(false);
    navigate(`/dashboard/admin/users/add/${type}`);
  };

  const getProfilePath = (role) => {
    return `/dashboard/${role}/myprofile`;
  };

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <Logo size={'xl'} title={'Web Squad Dashboard.'} />
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 -mr-2 text-gray-400 hover:text-gray-500"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className='mb-5'>
        {currentRoleItems.map((item) => (
          <MenuItem
            key={item.path || item.label}
            item={item}
            onNavigate={handleNavigate}
          />
        ))}
        </div>
        
        <div className='block sm:hidden border-t w-full'>
        {currentActions.map((action, index) => (
          <div key={index} className="relative pt-4">
            <button
              onClick={action.onClick}
              className="flex w-full items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors"
            >
              {action.icon}
              <span>{action.label}</span>
            </button>

            {/* Add User Dropdown */}
            {action.dropdown && showAddUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button
                  onClick={() => handleAddUser('employee')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Add Employee
                </button>
                <button
                  onClick={() => handleAddUser('intern')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Add Intern
                </button>
              </div>
            )}
          </div>
        ))}
        </div>
      </nav>

      <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-gray-100">
      <motion.div 
        className="flex items-center gap-4 mb-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
        onClick={() => {
          navigate(getProfilePath(user?.role));
          onClose && onClose();
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-12 w-12">
          <div className="w-full h-full rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <span className="text-primary text-lg font-medium">
              {user?.name?.charAt(0)}
            </span>
          </div>
          {user?.verified && (
            <motion.div 
              className="absolute -top-1 -right-1 bg-primary text-white p-1 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-900 truncate">
              {user?.name}
            </span>
            {user?.verified && (
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Building size={12} />
            <span className="capitalize">{user?.role}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Mail size={12} />
            <span className="truncate">{user?.email}</span>
          </div>
        </div>
      </motion.div>
      
      <motion.button 
        className="w-full px-3 py-2 text-sm text-red-600 font-medium hover:bg-red-50 rounded-md flex items-center gap-2"
        onClick={logout}
        whileHover={{ backgroundColor: 'rgb(254 242 242)' }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h2.25"
          />
        </svg>
        Sign Out
      </motion.button>
    </div>
    </div>
  );
};

export default DashboardSidebar;
