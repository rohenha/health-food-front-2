import { useLoaderData, useRouteError } from 'react-router-dom'
import { searchRecipes } from '@libs/recipes'

import HeroApp from '@components/molecules/hero-app'
import ListItems from '@components/molecules/list-items'
import RecipeCard from '@components/molecules/recipe-card'

export const Loader = async (token) => {
  const recipesData = await searchRecipes('', 1, token)
  return {
    recipes: recipesData,
  }
}

export const Catch = () => {
  let error = useRouteError()
  console.error(error)
  return <div>Dang!</div>
}

export default function Recipes() {
  const { recipes } = useLoaderData()

  return (
    <>
      <HeroApp title="Recettes" subtitle="" />
      <>
        <ListItems>
          {recipes.data.map((recipe) => (
            <li key={`recipe${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ListItems>
      </>
    </>
  )
}
