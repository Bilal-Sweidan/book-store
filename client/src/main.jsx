import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


// Components
import Home from './pages/Home.jsx'

// Views
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
