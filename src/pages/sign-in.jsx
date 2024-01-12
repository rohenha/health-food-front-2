import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div className="t-error">
      <h1>Sign in</h1>
      <Link to={`/`}>Home</Link>
    </div>
  )
}
