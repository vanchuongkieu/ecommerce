import Router from 'vue-router'

export function createRouter(ssrContext, createDefaultRouter, routerOptions, ...re) {
  const options = routerOptions || createDefaultRouter(ssrContext).options

  let routesDirectory = null

  if (process.server && ssrContext && ssrContext.nuxt && ssrContext.req) {
    const req = ssrContext.req
    let LOCAL_LEVEL = 2
    const domainLevel = (req.headers.host.match(/\./g) || []).length + 1
    if (req.headers.host.includes('localhost')) {
      LOCAL_LEVEL = 1
    }
    routesDirectory = domainLevel > LOCAL_LEVEL ? 'user-store' : 'main'
    ssrContext.nuxt.routesDirectory = routesDirectory
  }
  if (process.client) {
    if (window.__NUXT__ && window.__NUXT__.routesDirectory) {
      routesDirectory = window.__NUXT__.routesDirectory
    }
  }

  function isUnderDirectory(route, directory) {
    const path = route.path
    return path === '/' + directory || path.startsWith('/' + directory + '/')
  }

  let newRoutes = options.routes

  if (routesDirectory) {
    newRoutes = options.routes
      .filter((route) => {
        const toRemove = routesDirectory === 'user-store' ? 'main' : 'user-store'
        return !isUnderDirectory(route, toRemove)
      })
      .map((route) => {
        if (isUnderDirectory(route, routesDirectory)) {
          return {
            ...route,
            path: route.path.substr(routesDirectory.length + 1) || '/',
            name: route.name || 'index',
          }
        }
        return route
      })
  }

  return new Router({
    ...options,
    routes: newRoutes,
  })
}
