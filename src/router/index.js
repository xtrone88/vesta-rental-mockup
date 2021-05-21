import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";

import FAQPage from "../pages/public/faq";

//import HomePage from "../pages/public/home";
//import ContactPage from "../pages/public/contact";
//import PropertiesListPage from "../pages/public/properties/properties.list";
//import PropertyDetailPage from "../pages/public/properties/property.detail";
//import BidHistoryPage from "../pages/public/properties/bid.history";
//import TermsPage from "../pages/public/terms";
//import PrivacyPage from "../pages/public/privacy";

// Lessee
// import WatchingPage from "../pages/lessee/watching";
// import FavoritesPage from "../pages/lessee/favorites";

// import BiddingPage from "../pages/lessee/bidding";
// import NotificationsPage from "../pages/lessee/notifications";
// import NotificationSettingsPage from "../pages/lessee/notifications.settings";
// import LogoutPage from "../pages/lessee/auth/logout";
// import SignInPage from "../pages/lessee/auth/signin";

// import SignUpPage from "../pages/lessee/auth/signup";

// Old Auth Pages
// import LoginPageOld from "../pages/lessee/auth/login.old";
// import SignUpPageOld from "../pages/lessee/auth/signup.old";

// import TransactionsPage from "../pages/lessee/transactions";
// import SettingsDashboardPage from "../pages/lessee/settings";
// import TestAuth from "../pages/lessee/test.auth";

// import LesseePage from "../pages/lessee/lessee";
// import PersonalInfo from "../pages/lessee/personalinfo";
// import PaymentsPage from "../pages/lessee/payments";

// added by Malcom 4/14/2021
// import WonAuctionPage from "../pages/lessee/wonauction";

// Lessor
// import LessorPage from "../pages/lessor/lessor";
// import LessorDashboardPage from "../pages/lessor/dashboard";
// import LessorBiddingPage from "../pages/lessor/bidding";
// import LessorBookingPage from "../pages/lessor/bookings";
// import LessorRevenuePage from "../pages/lessor/revenue";
// import LessorListingsPage from "../pages/lessor/listings";

// Admin
// import AdminPage from "../pages/admin/admin";
// import AdminDashboardPage from "../pages/admin/dashboard";
// import AdminListingsPage from "../pages/admin/listings";
// import AdminBookingPage from "../pages/admin/bookings";
// import AdminLesseesPage from "../pages/admin/lessees";
// import AdminLessorsPage from "../pages/admin/lessors";
// import NotFoundPage from "../pages/notfound";

Vue.use(VueRouter);

const routes = [
  // Public routes
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../pages/public/home.vue"),
    nested: true
  },
  {
    path: "/contact/:propertyId",
    name: "Contact",
    component: () => import(/* webpackChunkName: "contact" */ "../pages/public/contact.vue")
  },
  {
    path: "/contact",
    name: "ContactAny",
    component: () => import(/* webpackChunkName: "contact" */ "../pages/public/contact.vue")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import(/* webpackChunkName: "terms" */ "../pages/public/terms.vue")
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import(/* webpackChunkName: "privacy" */ "../pages/public/privacy.vue")
  },
  {
    // path: "/properties",
    // name: "Properties",
    // component: PropertiesListPage
    path: "/properties",
    name: "Properties",
    redirect: "/locations/New%20Orleans"
  },
  {
    path: "/locations/:address",
    name: "Locations",
    component: () =>
      import(
        /* webpackChunkName: "propertieslistpage" */ "../pages/public/properties/properties.list"
      )
  },
  {
    path: "/properties/:propertyId",
    name: "PropertyDetail",
    component: () =>
      import(
        /* webpackChunkName: "propertydetailpage" */ "../pages/public/properties/property.detail"
      )
  },
  {
    path: "/bidhistory/:propertyId",
    name: "BidHistory",
    component: () =>
      import(/* webpackChunkName: "bidhistory" */ "../pages/public/properties/bid.history")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../pages/public/about.vue"),
    children: [
      {
        path: "frequently-asked-questions",
        component: FAQPage
      }
    ]
  },

  // Authenticated (lessee) routes
  {
    path: "/account",
    name: "Account",
    component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/lessee.vue"),

    children: [
      //test
      {
        path: "test",
        name: "Test Amplify Page",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/test.auth.vue"),
        meta: { requiresAuth: false }
      },
      // main
      {
        path: "settings",
        name: "SettingsDashboardPage",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/settings.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "watching",
        name: "Watching",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/watching.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "login",
        name: "Login",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/auth/signin.vue")
      },
      {
        path: "login_old",
        name: "LoginOld",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/lessee/auth/login.old.vue")
      },
      {
        path: "signup",
        name: "SignUp",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/auth/signup.vue")
      },
      {
        path: "signup_old",
        name: "SignUpOld",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/lessee/auth/signup.old.vue")
      },
      {
        path: "logout",
        name: "Logout",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/auth/logout.vue")
      },
      {
        path: "bidding",
        name: "Bidding",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/bidding.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "transactions",
        name: "Transactions",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/transactions.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "favorites",
        name: "Favorites",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/favorites.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "notifications",
        name: "Notifications",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/lessee/notifications.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "notifications/settings",
        name: "NotificationSettings",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/lessee/notifications.settings.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "personalinfo",
        name: "personalinfo",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/personalinfo.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "payments",
        name: "payments",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/payments.vue"),
        meta: { requiresAuth: false }
      },
      {
        path: "wonauction/:propertyId",
        name: "WonAuction",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessee/wonauction.vue"),
        meta: { requiresAuth: false }
      }
    ]
  },

  // Lessor routes
  {
    path: "/lessor",
    name: "Lessor",
    component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/lessor.vue"),

    children: [
      {
        path: "dashboard",
        name: "LessorDashboard",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/dashboard.vue")
      },
      {
        path: "listings",
        name: "LessorListings",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/listings.vue")
      },
      {
        path: "bookings",
        name: "LessorBookings",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/bookings.vue")
      },
      {
        path: "revenue",
        name: "LessorRevenue",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/revenue.vue")
      },
      {
        path: "bidding",
        name: "LessorBidding",
        component: () => import(/* webpackChunkName: "about" */ "../pages/lessor/bidding.vue")
      }
    ]
  },
  // Admin routes
  {
    path: "/admin",
    name: "Admin",
    component: () => import(/* webpackChunkName: "about" */ "../pages/admin/admin.vue"),

    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/admin/dashboard/index.vue")
      },
      {
        path: "listings",
        name: "AdminListings",
        component: () => import(/* webpackChunkName: "about" */ "../pages/admin/listings.vue")
      },
      {
        path: "bookings",
        name: "AdminBookings",
        component: () => import(/* webpackChunkName: "about" */ "../pages/admin/bookings.vue")
      },
      {
        path: "lessees",
        name: "AdminLessees",
        component: () => import(/* webpackChunkName: "about" */ "../pages/admin/lessees.vue")
      },
      {
        path: "lessors",
        name: "AdminLessors",
        component: () => import(/* webpackChunkName: "about" */ "../pages/admin/lessors.vue")
      }
    ]
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import(/* webpackChunkName: "about" */ "../pages/notfound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loginStatus) {
      next({
        path: "/account/login",
        query: { redirect: to.fullPath }
      });
      return;
    }
  }
  next();
});

export default router;
