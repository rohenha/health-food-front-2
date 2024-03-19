export default function ListItems({ children }) {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</ul>
  )
}
