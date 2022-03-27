import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from '../views/Blogs.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title : "Home"
    }
  },
  {
    path: "/Blogs",
    name: "Blogs",
    component: Blogs,
    meta:{
      title : "Blogs"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title} | YourBlogs`;
  next();
})

export default router;
