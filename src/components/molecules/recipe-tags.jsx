import { memo, useMemo } from 'react'
import { Badge } from '@components/ui/badge'

const types = [
  { id: 'difficulty', name: 'Difficulté' },
  { id: 'nature', name: 'Type' },
  { id: 'diet', name: 'Régime' },
]

const RecipeTags = function ({ recipe }) {
  const time = useMemo(() => {
    return (
      recipe.attributes.preparation_duration +
      recipe.attributes.cooking_duration
    )
  }, [recipe])

  return (
    <ul className="flex flex-wrap gap-1">
      {types.map(({ id, name }) => {
        const value = recipe.attributes[id]
        if (value) {
          return (
            <li key={`recipe${recipe.id}${value}`}>
              <Badge variant="secondary">
                {name} : {value}
              </Badge>
            </li>
          )
        }
      })}
      <li>
        <Badge variant="secondary">Temps : {time}min</Badge>
      </li>
    </ul>
  )
}

const RecipeTagsMemo = memo(RecipeTags)
export default RecipeTagsMemo
