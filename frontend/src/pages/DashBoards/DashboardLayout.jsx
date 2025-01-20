import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardHeader from './components/DashboardHeader';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen relative">
      {/* Overlay for mobile - only shown when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 transition-opacity lg:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main layout container */}
      <div className="flex min-h-screen">
        {/* Sidebar - slides in on mobile, fixed on desktop */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out lg:transition-none lg:translate-x-0 lg:relative lg:flex ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <DashboardSidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Header */}
          <header className="sticky top-0 z-40 bg-white border-b shadow-sm border-gray-200">
            <div className="flex h-16 items-center px-4 lg:px-6">
              {/* Menu button - only shown on mobile */}
              <button
                type="button"
                className="lg:hidden -ml-1 mr-3 text-gray-500 hover:text-gray-600"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <Menu size={24} />
              </button>
              
              <DashboardHeader />
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;