import store from "../store/index";

export function auth({ next, router }) {
  if (store.getters.getToken != null) {
    return next();
  }
  return router.push({ name: "Home" });
}

export function redirect({ next, router }) {
  if (store.state.getToken != null) {
    return router.push({ name: "Home" });
  }
  return next();
}
