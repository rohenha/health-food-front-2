import { useMemo } from 'react'

import { useUserStore } from '@stores/auth'
import { useToast } from '@hooks/use-toast'

import { Button } from '@components/ui/button'
import HeroApp from '@components/molecules/hero-app'

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
    <>
      <HeroApp
        title="Mon compte"
        subtitle=" Manage your account settings and set e-mail preferences."
      />
      <nav className="flex flex-col space-y-1 md:items-start ">
        <Button variant="ghost" to="/account/edit" className="justify-start">
          Editer mon profile
        </Button>
        <Button variant="destructive" onClick={onLogout}>
          se déconnecter
        </Button>
      </nav>
    </>
  )
}
