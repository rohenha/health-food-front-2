import { Outlet, Navigate } from 'react-router-dom'

import { useUserStore } from '@stores/auth'

export default function Public() {
  const isLoggedIn = useUserStore.use.isLoggedIn()

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}
