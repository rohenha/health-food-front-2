import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="t-error">
      <h1>Home</h1>
      <Link to={`/`}>Home</Link>
    </div>
  )
}
