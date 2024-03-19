import { createRoot } from 'react-dom/client'
import { Toaster } from '@components/ui/toaster'
import Router from './router.jsx'
// import { RouterProvider } from 'react-router-dom'
// import { Routes } from '@generouted/react-router'

// import './styles/global.scss'
import './styles/global-components.css'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Routes /> */}
    <Router />
    <Toaster />
  </>,
)
