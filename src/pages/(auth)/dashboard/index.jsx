import { Button } from '@components/ui/button.jsx'

// import { useUserStore } from '@stores/auth'

export default function Dashboard() {
  // const logout = useUserStore.use.logout()

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>Nom du bouton</Button>
      {/* <Button onClick={logout}>Logout</Button> */}
    </div>
  )
}
