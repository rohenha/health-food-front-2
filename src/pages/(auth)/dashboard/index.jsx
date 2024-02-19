import { useUserStore } from '@stores/auth'
import { Button } from '@components/ui/Button'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { ScrollArea } from '@components/ui/scroll-area'
import ShoppingItem from '@components/molecules/shopping-item'

export default function Dashboard() {
  // const user = useUserStore.use.user()

  return (
    <>
      <div className="p-10 pt-16 pb-16">
        <div className="space-y-0.5 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {/* Bienvenue {user.firstname} ! */}
            Bienvenue
          </h2>
          <p className="text-muted-foreground">
            Voyons voir ce qui te réserve aujourd'hui !
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full mb-16"
        ></div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="lg:col-span-2">
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
              <ScrollArea className="h-[200px] border px-4">
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
                <Link to="/planning/shopping-list">
                  Voir ma liste de course
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
