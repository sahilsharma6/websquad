import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardHeader from './components/DashboardHeader'

const DashboardLayout = () => {
    return (
        <div className="min-h-screen ">
            {/* Main layout container */}
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Sidebar - hidden on mobile, shown on lg screens */}
                <div className="fixed inset-y-0 z-50 lg:relative lg:flex">
                    <DashboardSidebar />
                </div>

                {/* Main content area */}
                <div className="flex-1">
                    {/* Header - full width on mobile, adjusted for sidebar on lg screens */}
                    <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
                        <DashboardHeader />
                    </div>

                    {/* Main content with padding and scroll */}
                    <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout