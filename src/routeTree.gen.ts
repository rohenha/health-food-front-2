import { Route as rootRoute } from "./pages/__root"
import { Route as IndexRoute } from "./pages/index"
import { Route as ContactIndexRoute } from "./pages/contact/index"
import { Route as AppRecipesIdRoute } from "./pages/app/recipes/$id"
import { Route as AppRecipesIndexRoute } from "./pages/app/recipes/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/contact/": {
      parentRoute: typeof rootRoute
    }
    "/app/recipes/": {
      parentRoute: typeof rootRoute
    }
    "/app/recipes/$id": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(ContactIndexRoute.options, {
  path: "/contact/",
  getParentRoute: () => rootRoute,
})

Object.assign(AppRecipesIndexRoute.options, {
  path: "/app/recipes/",
  getParentRoute: () => rootRoute,
})

Object.assign(AppRecipesIdRoute.options, {
  path: "/app/recipes/$id",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ContactIndexRoute,
  AppRecipesIndexRoute,
  AppRecipesIdRoute,
])
