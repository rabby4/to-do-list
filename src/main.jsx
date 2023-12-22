import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import AuthProvider from './components/authentication/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/dashboard/Dashboard';
import ToDoList from './components/dashboard/ToDoList';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about-us',
        element: <About></About>
      },
      {
        path: '/contact-us',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'to-do-list',
            element: <ToDoList></ToDoList>
          }
        ]
      }

    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
  </AuthProvider>
  // </React.StrictMode>,
)
