import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/public/home";
import FAQPage from "../pages/public/faq";
import ContactPage from "../pages/public/contact";
import PropertiesListPage from "../pages/public/properties/properties.list";
import WatchingPage from "../pages/lessee/watching";

import BiddingPage from "../pages/lessee/bidding";
import NotificationsPage from "../pages/lessee/notifications";
import NotificationSettingsPage from "../pages/lessee/notifications.settings";

import LesseePage from "../pages/lessee/lessee";

Vue.use(VueRouter);

const routes = [
  // Public routes
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage
  },
  {
    path: "/properties",
    name: "Properties",
    component: PropertiesListPage
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/public/about.vue"),
    children: [
      {
        path: "frequently-asked-questions",
        component: FAQPage
      }
    ]
  },

  // Authenticated routes
  {
    path: "/account",
    name: "Account",
    component: LesseePage,

    children: [
      {
        path: "watching",
        name: "Watching",
        component: WatchingPage
      },
      {
        path: "bidding",
        name: "Bidding",
        component: BiddingPage
      },
      {
        path: "notifications",
        name: "Notifications",
        component: NotificationsPage
      },
      {
        path: "notifications/settings",
        name: "NotificationSettings",
        component: NotificationSettingsPage
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
