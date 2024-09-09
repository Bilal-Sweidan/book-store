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
import Admin from './components/Admin.jsx'
// Views
import Login from './pages/Login.jsx';
import Sign_up from './pages/Sign_up.jsx';
// Context
import { UserProvider } from './Context/Contexts.jsx';

import UserContext from './Context/Contexts.jsx';
import Loading_comp from './components/Loading_comp.jsx'
import Nopage from './components/NoPage.jsx'
// Admin components
import AllBooks from './components/Admin_comp/AllBooks.jsx'
import Accounts from './components/Admin_comp/Accounts.jsx'
import Authors from './components/Admin_comp/Authors.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Based_Role />,
    children: [
      {
        path: 'search',
        element: <User_Role><Search_comp /></User_Role>
      },
      {
        path: 'books/:Book_name',
        element: <Book_comp />
      },
      {
        path: 'add-book',
        element: <Admin_Role><AddBook_comp /></Admin_Role> 
      },
      {
        path: 'add-author',
        element: <Admin_Role><AddAuthor_comp /></Admin_Role> 
      },
      {
        path: "our-books",
        element: <Admin_Role><AllBooks/></Admin_Role>
      },
      {
        path: "accounts",
        element: <Admin_Role><Accounts/></Admin_Role>
      },
      {
        path: "authors",
        element: <Admin_Role><Authors/></Admin_Role>
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
  const { user, isLoading } = useContext(UserContext)
  const location = useLocation()
  if(isLoading){
    return null
  }
  if (user?.role == "User") {
    return children
  }else if(user?.role == 'Admin'){
    return <Nopage />
  }
  return <Navigate to="/Login" state={{ from: location }} replace />
}
// Admin route protection frunction
function Admin_Role({ children }) {
  const { user, isLoading } = useContext(UserContext)
  const location = useLocation()
  if(isLoading){
    return null
  }
  if (user?.role == 'Admin') {
    return children
  }else if(user?.role === 'User'){
    return <h1 className='text-center mt-5'>you do not have access for this page</h1>
  }
  return <Navigate to="/Login" state={{ from: location }} replace />
}
// based role function
function Based_Role() {
  const { user, isLoading } = useContext(UserContext)
  const location = useLocation()
  if(isLoading ){
    return null
  }
  if (user?.role == 'Admin') {
    return <Admin />
  }
  return <User />
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
)
