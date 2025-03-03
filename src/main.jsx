import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cars from './Pages/Cars.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/cars', element: <Cars/>},
  {path: '/about', element: <About/>},
  {path: '/contact', element: <Contact/>}
])


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router = {router} />
    </React.StrictMode>
)
