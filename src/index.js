import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import router from './router'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
