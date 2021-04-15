const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/lists", component: () => import("pages/Lists.vue") }
    ]
  },
  {
    path: "/",
    component: () => import("layouts/NoAuth.vue"),
    children: [{ path: "/", component: () => import("pages/SignIn.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
