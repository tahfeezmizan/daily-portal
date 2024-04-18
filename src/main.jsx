import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
