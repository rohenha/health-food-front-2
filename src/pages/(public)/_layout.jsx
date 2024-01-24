import { Outlet, Navigate } from 'react-router-dom'

import { useUserStore } from '@stores/auth'

export default function Public() {
  const isLoggedIn = useUserStore.use.isLoggedIn()

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <>
      <p>Public</p>
      <Outlet />
    </>
  )
}
