import { Outlet, Link, Navigate } from 'react-router-dom'

import { isLoggedIn } from '@stores/auth'

export default function Auth() {
  if (!isLoggedIn.value) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/planning">Planning</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </>
  )
}
