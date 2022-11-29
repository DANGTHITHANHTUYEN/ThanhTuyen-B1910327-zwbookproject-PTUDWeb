import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"; 
import Book from "@/views/Book.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue"; 
import BookUpdate from "@/views/BookUpdate.vue";
import Profile from "@/components/Dashboard.vue";
import AppHeader from "@/components/AppHeader.vue"; 


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: "/books",
  //   name: "books",
  //   component: Book,
  // },
  {
    path: "/books/:id",
    name: "book",
    component: Book,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/header",
    name: "header",
    component: AppHeader,
  },
  {
    path: "/addbook",
    name: "addbook",
    component: BookUpdate,
  },
  {
    path: "/updatebook/:id",
    name: "updatebook",
    component: BookUpdate,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;