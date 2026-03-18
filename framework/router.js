class Router {
  constructor() {
    this.routes = []
  }

  add(method, path, handler) {
    this.routes.push({ method, path, handler })
  }

  match(method, path) {
    return this.routes.find(
      (route) => route.method === method && route.path === path
    )
  }
}

module.exports = Router
