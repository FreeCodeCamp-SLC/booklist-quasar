import { authGuard } from "../auth/authGuard";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "lists",
        component: () => import("pages/Lists.vue"),
        beforeEnter: authGuard
      },
      {
        path: "profile",
        component: () => import("pages/Profile.vue"),
        beforeEnter: authGuard
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
