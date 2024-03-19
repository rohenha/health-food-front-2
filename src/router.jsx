import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useUserStore } from '@stores/auth'

// Auth
import * as Recipes from './pages/(auth)/recipes'
import * as Recipe from './pages/(auth)/recipes/[id]'
import Planning from './pages/(auth)/planning'
import PlanningCreate from './pages/(auth)/planning/create'
import PlanningShoppingList from './pages/(auth)/planning/shopping-list'
import Account from './pages/(auth)/account'
import AccountEdit from './pages/(auth)/account/edit'
import Dashboard from './pages/(auth)/dashboard'
import Auth from './pages/(auth)/_layout'
// Public
import Public from './pages/(public)/_layout'
import SignUp from './pages/(public)/sign-up/index'
import SignIn from './pages/(public)/sign-in/index'
// Error
import Error from './pages/404'

export default function Router() {
  const token = useUserStore((state) => state.token)
  console.log('render router')

  const router = createBrowserRouter([
    {
      element: <Public />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <SignIn />,
        },
        {
          path: '/sign-up',
          element: <SignUp />,
        },
      ],
    },
    {
      element: <Auth />,
      errorElement: <Error />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/planning',
          element: <Planning />,
        },
        {
          path: '/planning/create',
          element: <PlanningCreate />,
        },
        {
          path: '/planning/shopping-list',
          element: <PlanningShoppingList />,
        },
        {
          path: '/recipes',
          element: <Recipes.default />,
          loader: () => {
            return Recipes.Loader(token)
          },
          catch: Recipes.Catch,
        },
        {
          path: '/recipes/:id',
          element: <Recipe.default />,
          loader: ({ params }) => {
            return Recipe.Loader({ params, token })
          },
          catch: Recipe.Catch,
        },
        {
          path: '/account',
          element: <Account />,
        },
        {
          path: '/account/edit',
          element: <AccountEdit />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
