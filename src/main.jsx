import { createRoot } from 'react-dom/client'
import { Toaster } from '@components/ui/toaster'
import { Routes } from '@generouted/react-router'

// import './styles/global.scss'
import './styles/global-components.css'

createRoot(document.getElementById('root')).render(
  <>
    <Routes />
    <Toaster />
  </>,
)
