import { Outlet, Link, Navigate } from 'react-router-dom'
import { useMemo } from 'react'

import { Button } from '@components/ui/button'
import { Toaster } from '@components/ui/toaster'
import { useUserStore } from '@stores/auth'
import { nav } from '@libs/variables'

import { useToast } from '@hooks/use-toast'

export default function Auth() {
  const isLoggedIn = useUserStore.use.isLoggedIn()
  const logout = useUserStore.use.logout()
  const { toast } = useToast()

  const onLogout = useMemo(() => {
    return async () => {
      const loggedOut = await logout()
      if (loggedOut) {
        toast({
          title: 'Bye !',
          description: 'A bientôt chez nous',
          variant: 'success',
        })
      } else {
        toast({
          description:
            'Une erreur est survenue lors de la déconnection, veuillez réessayer',
          title: 'Erreur',
          variant: 'destructive',
        })
      }
    }
  }, [logout, toast])

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <div>
      <Outlet />
      <Toaster />
      <ul>
        {nav.map((item, key) => (
          <li key={`nav${key}`}>
            <Link to={item.url} title={item.title}>
              {item.content}
            </Link>
          </li>
        ))}
        <li>
          <Button variant="destructive" onClick={onLogout}>
            se déconnecter
          </Button>
          {/* <Link onClick={logout}>Se déconnecter</Link> */}
        </li>
      </ul>
    </div>
  )
}
