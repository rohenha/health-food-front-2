import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Health Food</h1>
      </div>
      <div className="grid gap-6">
        <Button asChild>
          <Link to="/sign-in">Se connecter</Link>
        </Button>{' '}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou</span>
          </div>
        </div>
        <Button asChild variant="secondary">
          <Link to="/sign-up">S'inscrire</Link>
        </Button>
      </div>
    </>
  )
}
