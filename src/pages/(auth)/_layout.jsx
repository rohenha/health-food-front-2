import { Outlet, Link, Navigate } from 'react-router-dom'
import { Button } from '@components/ui/button.jsx'

import { useUserStore } from '@stores/auth'
import { nav } from '@libs/variables'

export default function Auth() {
  const isLoggedIn = useUserStore.use.isLoggedIn()
  const logout = useUserStore.use.logout()

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <>
      <Outlet />
      <ul>
        {nav.map((item, key) => (
          <li key={`nav${key}`}>
            <Link to={item.url} title={item.title}>
              {item.content}
            </Link>
          </li>
        ))}
        <li>
          <Button onClick={logout}>se déconnecter</Button>
          {/* <Link onClick={logout}>Se déconnecter</Link> */}
        </li>
      </ul>
    </>
  )
}
