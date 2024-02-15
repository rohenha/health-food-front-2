import { useMemo } from 'react'

import { useUserStore } from '@stores/auth'
import { useToast } from '@hooks/use-toast'

import { Button } from '@components/ui/button'

export default function Account() {
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

  return (
    <div>
      <h1>Account</h1>
      <Button variant="destructive" onClick={onLogout}>
        se déconnecter
      </Button>
    </div>
  )
}
