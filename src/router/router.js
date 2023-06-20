import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { MainPage, MeetingPage, ErrorBoundaryPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorBoundaryPage />,
      },
      {
        path: 'meetings',
        element: <MeetingPage />,
        errorElement: <ErrorBoundaryPage />,
      },
    ],
  },
])
