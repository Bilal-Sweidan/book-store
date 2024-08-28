import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import AddBook_comp from './components/Admin_comp/AddBook_comp.jsx';
import AddAuthor_comp from './components/Admin_comp/AddAuthor_comp.jsx';
import Book_comp from './components/Book_comp.jsx';
import Search_comp from './components/Search_comp.jsx';

import User from './components/User.jsx';
// Views
import Login from './pages/Login.jsx';
import Sign_up from './pages/Sign_up.jsx';
// Context
import { UserProvider } from './Context/Contexts.jsx';

import UserContext from './Context/Contexts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    element: <Based_Role/>,
    children: [
      {
        path: 'search',
        element: <User_Role><Search_comp /></User_Role>
      },
      {
        path: ':Book_name',
        element: <Book_comp />
      },
      {
        path: 'add-book',
        element: <AddBook_comp />
      },
      {
        path: 'add-author',
        element: <AddAuthor_comp />
      }
    ]
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Sign_up />
  },
])

// User route protection function
function User_Role({ children }) {
  const { user } = useContext(UserContext)
  const location = useLocation()
  if (user?.role == "User") {
    return children
  }
  return <Navigate to="/Login" state={{ from: location }} replace />
}
// Admin route protection frunction
function Admin_Role({ children }) {
  const { user } = useContext(UserContext)
  const location = useLocation()
  if (user?.role == 'Admin') {
    return children
  }
  return <Navigate to="/Login" state={{ from: location }} replace />
}
// based role function
function Based_Role() {
  const { user } = useContext(UserContext)
  const location = useLocation()
  if (user?.role == 'Admin') {
    // return <Navigate to="/" state={{from : location}} replace />
    return <Admin/>
  }
  return <User/>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
)
