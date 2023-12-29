import { FileRoute } from '@tanstack/react-router'

const Recipes = () => {
  return (
    <div className="p-2">
      <h3>Recipes</h3>
    </div>
  )
}

export const Route = new FileRoute('/app/recipes/').createRoute({
  component: Recipes,
})
