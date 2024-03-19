import { useLoaderData, useRouteError } from 'react-router-dom'

import { findOneRecipe, removeRecipe } from '@libs/recipes'
import RecipeTags from '@components/molecules/recipe-tags'

import HeroApp from '@components/molecules/hero-app'

export const Loader = async ({ params, token }) => {
  const recipe = await findOneRecipe(params.id, token)
  return {
    recipe,
  }
}

export const Catch = () => {
  let error = useRouteError()
  console.error(error)
  return <div>Dang!</div>
}

export default function Recipe() {
  const { recipe } = useLoaderData()

  return (
    <div className="grid grid-cols-2 gap-x-10">
      <div className="h-screen sticky top-0">
        <img
          src="https://www.hervecuisine.com/wp-content/uploads/Fotolia_4110216_S.jpg?x57657"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <HeroApp title={recipe.attributes.title} subtitle="" />
        <RecipeTags recipe={recipe} />
      </div>
    </div>
  )
}
