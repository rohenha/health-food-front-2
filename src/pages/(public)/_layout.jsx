import { Outlet } from 'react-router-dom'

export default function Public() {
  return (
    <>
      <p>Public</p>
      <Outlet />
    </>
  )
}
