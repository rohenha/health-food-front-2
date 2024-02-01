import { Outlet, Navigate } from 'react-router-dom'

import { useUserStore } from '@stores/auth'

export default function Public() {
  const isLoggedIn = useUserStore.use.isLoggedIn()

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="h-screen flex flex-col gap-20 justify-center items-center">
      <h1 className="text-6xl font-bold uppercase">Health food</h1>
      <Outlet />
    </div>
  )
}
