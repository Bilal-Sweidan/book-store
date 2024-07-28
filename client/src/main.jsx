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
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
