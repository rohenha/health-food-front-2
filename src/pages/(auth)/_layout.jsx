import { Outlet, Link } from 'react-router-dom'

export default function Auth() {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/planning">Planning</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
    </>
  )
}
