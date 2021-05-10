import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/public/home";
import FAQPage from "../pages/public/faq";
import ContactPage from "../pages/public/contact";
import PropertiesListPage from "../pages/public/properties/properties.list";
import PropertyDetailPage from "../pages/public/properties/property.detail";
import BidHistoryPage from "../pages/public/properties/bid.history";
import TermsPage from "../pages/public/terms";
import PrivacyPage from "../pages/public/privacy";

// Lessee
import WatchingPage from "../pages/lessee/watching";
import FavoritesPage from "../pages/lessee/favorites";

import BiddingPage from "../pages/lessee/bidding";
import NotificationsPage from "../pages/lessee/notifications";
import NotificationSettingsPage from "../pages/lessee/notifications.settings";
import LogoutPage from "../pages/lessee/auth/logout";
import LoginPage from "../pages/lessee/auth/login";

import SignUpPage from "../pages/lessee/auth/signup";

// Old Auth Pages
import LoginPageOld from "../pages/lessee/auth/login.old";
import SignUpPageOld from "../pages/lessee/auth/signup.old";

import TransactionsPage from "../pages/lessee/transactions";
import SettingsDashboardPage from "../pages/lessee/settings";
import TestAuth from "../pages/lessee/test.auth";

import LesseePage from "../pages/lessee/lessee";
import PersonalInfo from "../pages/lessee/personalinfo";
import PaymentsPage from "../pages/lessee/payments";

// added by Malcom 4/14/2021
import WonAuctionPage from "../pages/lessee/wonauction";

// Lessor
import LessorPage from "../pages/lessor/lessor";
import LessorDashboardPage from "../pages/lessor/dashboard";
import LessorBiddingPage from "../pages/lessor/bidding";
import LessorBookingPage from "../pages/lessor/bookings";
import LessorRevenuePage from "../pages/lessor/revenue";
import LessorListingsPage from "../pages/lessor/listings";

// Admin
import AdminPage from "../pages/admin/admin";
import AdminDashboardPage from "../pages/admin/dashboard";
import AdminListingsPage from "../pages/admin/listings";
import AdminBookingPage from "../pages/admin/bookings";
import AdminLesseesPage from "../pages/admin/lessees";
import AdminLessorsPage from "../pages/admin/lessors";
import NotFoundPage from "../pages/notfound";

Vue.use(VueRouter);

const routes = [
  // Public routes
  {
    path: "/",
    name: "Home",
    component: HomePage,
    nested: true
  },
  {
    path: "/contact/:propertyId",
    name: "Contact",
    component: ContactPage
  },
  {
    path: "/contact",
    name: "ContactAny",
    component: ContactPage
  },
  {
    path: "/terms",
    name: "Terms",
    component: TermsPage
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: PrivacyPage
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
    component: PropertiesListPage
  },
  {
    path: "/properties/:propertyId",
    name: "PropertyDetail",
    component: PropertyDetailPage
  },
  {
    path: "/bidhistory/:propertyId",
    name: "BidHistory",
    component: BidHistoryPage
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
    component: LesseePage,

    children: [
      //test
      {
        path: "test",
        name: "Test Amplify Page",
        component: TestAuth
      },
      // main
      {
        path: "settings",
        name: "SettingsDashboardPage",
        component: SettingsDashboardPage
      },
      {
        path: "watching",
        name: "Watching",
        component: WatchingPage
      },
      {
        path: "login",
        name: "Login",
        component: LoginPage
      },
      {
        path: "login_old",
        name: "LoginOld",
        component: LoginPageOld
      },
      {
        path: "signup",
        name: "SignUp",
        component: SignUpPage
      },
      {
        path: "signup_old",
        name: "SignUpOld",
        component: SignUpPageOld
      },
      {
        path: "logout",
        name: "Logout",
        component: LogoutPage
      },
      {
        path: "bidding",
        name: "Bidding",
        component: BiddingPage
      },
      {
        path: "transactions",
        name: "Transactions",
        component: TransactionsPage
      },
      {
        path: "favorites",
        name: "Favorites",
        component: FavoritesPage
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
      },
      {
        path: "personalinfo",
        name: "personalinfo",
        component: PersonalInfo
      },
      {
        path: "payments",
        name: "payments",
        component: PaymentsPage
      },
      {
        path: "wonauction/:propertyId",
        name: "WonAuction",
        component: WonAuctionPage
      }
    ]
  },

  // Lessor routes
  {
    path: "/lessor",
    name: "Lessor",
    component: LessorPage,

    children: [
      {
        path: "dashboard",
        name: "LessorDashboard",
        component: LessorDashboardPage
      },
      {
        path: "listings",
        name: "LessorListings",
        component: LessorListingsPage
      },
      {
        path: "bookings",
        name: "LessorBookings",
        component: LessorBookingPage
      },
      {
        path: "revenue",
        name: "LessorRevenue",
        component: LessorRevenuePage
      },
      {
        path: "bidding",
        name: "LessorBidding",
        component: LessorBiddingPage
      }
    ]
  },
  // Admin routes
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,

    children: [
      {
        path: "dashboard",
        name: "AdminDashboard",
        component: AdminDashboardPage
      },
      {
        path: "listings",
        name: "AdminListings",
        component: AdminListingsPage
      },
      {
        path: "bookings",
        name: "AdminBookings",
        component: AdminBookingPage
      },
      {
        path: "lessees",
        name: "AdminLessees",
        component: AdminLesseesPage
      },
      {
        path: "lessors",
        name: "AdminLessors",
        component: AdminLessorsPage
      }
    ]
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFoundPage
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

export default router;
