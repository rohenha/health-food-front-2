import { FileRoute } from '@tanstack/react-router'

const $id = () => {
  return (
    <div className="p-2">
      <h3>Single recipe!</h3>
    </div>
  )
}

export const Route = new FileRoute('/app/recipes/$id').createRoute({
  component: $id,
})
