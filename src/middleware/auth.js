export function auth({ next, router }) {
  if ("token" in localStorage) {
    return next();
  }
  return router.push({ name: "Home" });
}

export function redirect({ next, router }) {
  if ("token" in localStorage) {
    return router.push({ name: "Home" });
  }
  return next();
}
