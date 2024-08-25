import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation ,Navigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import Main from './components/Main.jsx';
import Nopage from './components/NoPage.jsx';
import AddBook_comp from './components/Admin_comp/AddBook_comp.jsx';
import AddAuthor_comp from './components/Admin_comp/AddAuthor_comp.jsx';
import Book_comp from './components/Book_comp.jsx';
import Search_comp from './components/Search_comp.jsx';

// Views
// import Home from './pages/Layout.jsx'
import Login from './pages/Login.jsx';
import Sign_up from './pages/Sign_up.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
// Context
import { UserProvider } from './Context/Contexts.jsx';

import UserContext from './Context/Contexts.jsx';
import Public_content from './components/Public_content.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Based_Role/>,
    children: [
      {
        path: ':Book_name',
        element: <User_Role><Book_comp/></User_Role> 
      },
      {
        path: 'search',
        element: <User_Role><Search_comp /></User_Role>
      },
      {
        path: 'add-book',
        element: <Admin_Role><AddBook_comp /></Admin_Role> 
      },
      {
        path: 'add-author',
        element: <Admin_Role> <AddAuthor_comp /> </Admin_Role>
      },
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
  // {
  //   path: '/A',
  //   element: <Admin />,
  //   children: [
  //     {
  //       path: 'add-book',
  //       element: <AddBook_comp />
  //     },
  //     {
  //       path: 'add-author',
  //       element: <AddAuthor_comp/>
  //     }
  //   ]
  // }
])

// User route protection function
function User_Role({children}){
  const {user} = useContext(UserContext)
  const location = useLocation()
  if(user?.role == "User"){
    return children
  }else{
    return <Navigate to="/" state={{ from : location}} replace />
  }
}
// Admin route protection frunction
function Admin_Role({children}){
  const {user} = useContext(UserContext)
  const location = useLocation()
  if(user?.role == 'Admin'){
    return children
  }else{
    return <Navigate to="/" state={{from : location}} replace />
  }
}
// based role function
function Based_Role(){
  const {user} = useContext(UserContext)
  const location = useLocation()
  if(!user){
    return <Public_content/>
  }
  if(user?.role == 'Admin'){
    return <Admin/>
  }
  if(user?.role === 'User'){
    return <User/>
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
)
