import { lazy } from 'react'

export const MainPage = lazy(() => import('./main/MainPage'))
export const MeetingPage = lazy(() => import('./meetings/MeetingPage'))
export const ErrorBoundaryPage = lazy(() => import('./error/ErrorBoundary'))
