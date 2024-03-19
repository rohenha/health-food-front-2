// import { useUserStore } from '@stores/auth'
import { Button } from '@components/ui/button'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { ScrollArea } from '@components/ui/scroll-area'
import ShoppingItem from '@components/molecules/shopping-item'
import HeroApp from '@components/molecules/hero-app'

export default function Dashboard() {
  // const user = useUserStore.use.user()

  return (
    <>
      <HeroApp
        title="Bienvenue"
        subtitle="Voyons voir ce qui te réserve aujourd'hui !"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Button className="lg:col-span-2">Rechercher une recette</Button>
        <Card>
          <CardHeader>
            <CardTitle>Mon Planning</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link to="planning/list">Voir mon planning</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ma liste de courses</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] border px-4">
              <div className="grid grid-cols-1 divide-y">
                <ShoppingItem
                  name="Bananes"
                  id="banana"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
                <ShoppingItem
                  name="Emmental"
                  id="emmental"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
                <ShoppingItem
                  name="Bananes"
                  id="banana"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
                <ShoppingItem
                  name="Emmental"
                  id="emmental"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
                <ShoppingItem
                  name="Bananes"
                  id="banana"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
                <ShoppingItem
                  name="Emmental"
                  id="emmental"
                  cover="https://github.com/shadcn.png"
                  quantity="200g"
                />
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant="secondary">
              <Link to="/planning/shopping-list">Voir ma liste de course</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
