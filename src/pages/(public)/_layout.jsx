import { Outlet, Navigate } from 'react-router-dom'

import { isLoggedIn } from '@stores/auth'

export default function Public() {
  console.log(isLoggedIn.value)
  if (isLoggedIn.value) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <>
      <p>Public</p>
      <Outlet />
    </>
  )
}
