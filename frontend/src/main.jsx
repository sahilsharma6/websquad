import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx';

import Home from './pages/Home.jsx';

import About from './pages/RoutePages/About.jsx';
import Contact from './pages/RoutePages/Contact.jsx';
import Service from './pages/RoutePages/Service.jsx';
import Teams from './pages/RoutePages/Teams.jsx';
import Blogs from './pages/RoutePages/Blogs.jsx';
import Portfolio from './pages/RoutePages/Portfolio.jsx';
import NotFound from './components/NotFound.jsx';


import AuthLayout from './pages/Auth/AuthLayout.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import HomeCareers from './pages/MainHome/HomeCareers.jsx';
import PrivateRoute from './pages/Auth/compoennts/PrivateRoute.jsx';
import AdminDashboard from './pages/DashBoards/Admin/AdminDashboard.jsx';
import InternDashboard from './pages/DashBoards/Intern/InternDashboard.jsx';
import EmployeeDashboard from './pages/DashBoards/Employee/EmployeeDashboard.jsx';
import DashboardLayout from './pages/DashBoards/DashboardLayout.jsx';
import AdminDashboardContent from './pages/DashBoards/Admin/pages/AdminDashboardContent.jsx';
import EmployeeDashboardContent from './pages/DashBoards/Employee/pages/EmployeeDashboardContent';
import InternDashboardContent from './pages/DashBoards/Intern/pages/InternDashboardContent';
import ProfilePage from './pages/DashBoards/components/ProfilePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "team",
        element: <Teams />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "careers",
        element: <HomeCareers />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "Authentication",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin",
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <AdminDashboardContent />
          },
          {
            path: "users",
            children: [
              {
                path: "employees",
                element: <div>Manage Employees</div>
              },
              {
                path: "interns",
                element: <div>Manage Interns</div>
              },
              {
                path: "regular",
                element: <div>Manage Regular Users</div>
              },
              {
                path: "add",
                children: [
                  {
                    path: "employee",
                    element: <div>Add Employee Form</div>
                  },
                  {
                    path: "intern",
                    element: <div>Add Intern Form</div>
                  }
                ]
              }
            ]
          },
          {
            path: "analytics",
            children: [
              {
                path: "performance",
                element: <div>Performance Analytics</div>
              },
              {
                path: "usage",
                element: <div>Usage Analytics</div>
              }
            ]
          },
          {
            path: "settings",
            element: <div>Settings</div>
          },
          {
            path: "reports",
            children: [
              {
                path: "monthly",
                element: <div>Monthly Reports</div>
              },
              {
                path: "annual",
                element: <div>Annual Reports</div>
              }
            ]
          },
          { 
            path: "myprofile",
            element: <ProfilePage />
          }
        ]
      },
      {
        path: "employee",
        element: (
          <PrivateRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <EmployeeDashboardContent />
          },
          {
            path: "tasks",
            children: [
              {
                path: "active",
                element: <div>Active Tasks</div>
              },
              {
                path: "completed",
                element: <div>Completed Tasks</div>
              }
            ]
          },
          {
            path: "schedule",
            element: <div>Schedule</div>
          },
          {
            path: "messages",
            children: [
              {
                path: "inbox",
                element: <div>Inbox</div>
              },
              {
                path: "sent",
                element: <div>Sent Messages</div>
              }
            ]
          },
          { 
            path: "myprofile",
            element: <ProfilePage />
          }
        ]
      },
      {
        path: "intern",
        element: (
          <PrivateRoute allowedRoles={['intern']}>
            <InternDashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <InternDashboardContent />
          },
          {
            path: "training",
            children: [
              {
                path: "courses",
                element: <div>Training Courses</div>
              },
              {
                path: "assignments",
                element: <div>Training Assignments</div>
              }
            ]
          },
          {
            path: "timelog",
            element: <div>Time Log</div>
          },
          {
            path: "resources",
            element: <div>Resources</div>
          },
          {
            path: "mentorship",
            element: <h1>mentorship</h1>
          },
          { 
            path: "myprofile",
            element: <ProfilePage />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
      {/* <Toaster /> */}
    </AuthProvider>
  </StrictMode>
)
