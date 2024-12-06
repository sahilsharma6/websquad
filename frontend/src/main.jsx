import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import App from './App.jsx'

import Home from './pages/Home.jsx';

import About from './pages/RoutePages/About.jsx';
import Contact from './pages/RoutePages/Contact.jsx';
import Service from './pages/RoutePages/Service.jsx';
import Teams from './pages/RoutePages/Teams.jsx';
// import Blogs from './pages/RoutePages/Blogs.jsx';
import Portfolio from './pages/RoutePages/Portfolio.jsx';
import NotFound from './components/NotFound.jsx';


import AuthLayout from './pages/Auth/AuthLayout.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not Found</h1>,
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
      // {
      //   path: "blog",
      //   element: <Blogs />,
      // },
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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* <Toaster /> */}
    {/* </AuthProvider> */}
  </StrictMode>
)
