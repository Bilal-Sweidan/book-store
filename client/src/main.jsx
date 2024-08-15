import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import Main from './components/Main.jsx';
import Nopage from './components/NoPage.jsx';
import AddBook_comp from './components/Admin_comp/AddBook_comp.jsx';
import AddAuthor_comp from './components/Admin_comp/AddAuthor_comp.jsx';

import Search_comp from './components/Search_comp.jsx';
// Views
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import Sign_up from './pages/Sign_up.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './pages/Admin.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'seach',
        element: <Search_comp />
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
  {
    path: '/A',
    element: <Admin />,
    children: [
      {
        path: 'add-book',
        element: <AddBook_comp />
      },
      {
        path: 'add-author',
        element: <AddAuthor_comp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
)
