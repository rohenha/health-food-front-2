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
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Mon compte</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full my-6"
        ></div>
        <nav className="flex flex-col space-y-1 md:items-start ">
          <Button variant="ghost" to="/account/edit" className="justify-start">
            Editer mon profile
          </Button>
          <Button variant="destructive" onClick={onLogout}>
            se déconnecter
          </Button>
        </nav>
      </div>
    </>
    // <div>
    //   <h1>Account</h1>
    // </div>
  )
}
