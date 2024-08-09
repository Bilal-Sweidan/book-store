import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import Main from './components/Main.jsx';
import Nopage from './components/NoPage.jsx';
// Views
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import Sign_up from './pages/Sign_up.jsx';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Admin from './pages/Admin.jsx';
import AddBook_comp from './components/Admin_comp/AddBook_comp.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/sign-up',
    element: <Sign_up/>
  },
  {
    path: '/A',
    element: <Admin/>,
    children: [
      {
        path: 'add-book',
        element: <AddBook_comp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
