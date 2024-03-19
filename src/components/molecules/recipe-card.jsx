import { Button } from '@components/ui/button'
import RecipeTags from '@components/molecules/recipe-tags'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <article className="rounded-lg w-full overflow-hidden border">
      <div className="w-full">
        <img
          src="https://www.hervecuisine.com/wp-content/uploads/Fotolia_4110216_S.jpg?x57657"
          className="w-full object-cover h-30"
        />
      </div>
      <div className="p-4 grid gap-4">
        <p className="text-lg font-bold">{recipe.attributes.title}</p>
        <RecipeTags recipe={recipe} />
        <Button asChild className="w-full">
          <Link to={`/recipes/${recipe.id}`}>Voir La recette</Link>
        </Button>
      </div>
    </article>
  )
}
