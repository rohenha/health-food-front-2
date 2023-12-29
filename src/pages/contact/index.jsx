import { FileRoute } from '@tanstack/react-router'

const Contact = () => {
  return (
    <div className="p-2">
      <h3>Contact!</h3>
    </div>
  )
}

export const Route = new FileRoute('/contact/').createRoute({
  component: Contact,
})
