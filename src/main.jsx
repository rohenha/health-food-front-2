import { createRoot } from 'react-dom/client'
import { App } from 'antd'

import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { routeTree } from './routeTree.gen'

// import './styles/global.scss'

// const rootRoute = new RootRoute({
//   component: () => (
//     <>
//       <App>
//         <div className="p-2 flex gap-2">
//           <Link to="/" className="[&.active]:font-bold">
//             Home
//           </Link>{' '}
//           <Link to="/about" className="[&.active]:font-bold">
//             About
//           </Link>
//         </div>
//         <hr />
//         <Outlet />
//       </App>
//       <TanStackRouterDevtools />
//     </>
//   ),
// })

// const indexRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: function Index() {
//     return (
//       <div className="p-2">
//         <h3>Welcome Home!</h3>
//       </div>
//     )
//   },
// })

// const aboutRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/about',
//   component: function About() {
//     return <div className="p-2">Hello from About!</div>
//   },
// })

// const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// const router = new Router({ routeTree })
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
})

createRoot(document.getElementById('root')).render(
  // <ConfigProvider
  //   theme={{
  //     token: {
  //       // Seed Token
  //       // colorPrimary: '#092635',
  //       // borderRadius: 2,
  //       // Alias Token
  //       // colorBgContainer: '#9EC8B9',
  //     },
  //   }}
  // >
  <RouterProvider router={router} />
  // </ConfigProvider>
  // </ToastContextProvider>
)
