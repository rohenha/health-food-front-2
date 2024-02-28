import { Outlet, NavLink, Navigate } from 'react-router-dom'

import { Toaster } from '@components/ui/toaster'
import { useUserStore } from '@stores/auth'
import { nav } from '@libs/variables'

import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'

export default function Auth() {
  const isLoggedIn = useUserStore.use.isLoggedIn()

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <>
      <div className="px-4 pt-16 pb-36 lg:px-10 max-w-screen-xl mx-auto">
        <Outlet />
      </div>
      <Toaster />
      <nav className="fixed w-auto bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 border rounded-lg bg-background text-center overflow-hidden">
        <ul className="flex align-center justify-between">
          {nav.map((item, key) => (
            <li key={`nav${key}`}>
              <NavLink
                to={item.url}
                title={item.title}
                end
                className={({ isActive }) => {
                  const string =
                    'flex flex-col gap-1 items-center justify-center text-xs px-2.5 py-2 h-full hover:text-primary hover:text-accent-foreground'
                  if (isActive) {
                    return string + ' text-primary'
                  }
                  return string
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                >
                  <path
                    d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"
                    fill="currentColor"
                  ></path>
                </svg>
                {item.content}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/account"
              title="Mon compte"
              className={({ isActive }) => {
                const string =
                  'text-sm px-2.5 py-2 h-full h-full block hover:bg-accent hover:text-accent-foreground'
                if (isActive) {
                  return string + ' text-primary'
                }
                return string
              }}
            >
              <Avatar className="m-auto">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
