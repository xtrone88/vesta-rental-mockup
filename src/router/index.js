import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/public/home';
import FAQPage from '../pages/public/faq';
import ContactPage from '../pages/public/contact';
import PropertiesListPage from '../pages/public/properties/properties.list';
import TermsPage from '../pages/public/terms';
import PrivacyPage from '../pages/public/privacy';

// Lessee
import WatchingPage from '../pages/lessee/watching';
import FavoritesPage from '../pages/lessee/favorites';

import BiddingPage from '../pages/lessee/bidding';
import NotificationsPage from '../pages/lessee/notifications';
import NotificationSettingsPage from '../pages/lessee/notifications.settings';
import LogoutPage from '../pages/lessee/auth/logout';
import LoginPage from '../pages/lessee/auth/login';
import SignUpPage from '../pages/lessee/auth/signup';
import TransactionsPage from '../pages/lessee/transactions';
import SettingsDashboardPage from '../pages/lessee/settings';
import LesseePage from '../pages/lessee/lessee';

// Lessor
import LessorPage from '../pages/lessor/lessor';
import LessorDashboardPage from '../pages/lessor/dashboard';
import LessorBiddingPage from '../pages/lessor/bidding';
import LessorBookingPage from '../pages/lessor/bookings';
import LessorRevenuePage from '../pages/lessor/revenue';
import LessorListingsPage from '../pages/lessor/listings';


Vue.use(VueRouter);

const routes = [
  // Public routes
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPage,
  },
  {
    path: '/properties',
    name: 'Properties',
    component: PropertiesListPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/public/about.vue'),
    children: [
      {
        path: 'frequently-asked-questions',
        component: FAQPage,
      },
    ],
  },

  // Authenticated routes
  {
    path: '/account',
    name: 'Account',
    component: LesseePage,

    children: [
      {
        path: 'settings',
        name: 'SettingsDashboardPage',
        component: SettingsDashboardPage,
      },
      {
        path: 'watching',
        name: 'Watching',
        component: WatchingPage,
      },
      {
        path: 'login',
        name: 'Login',
        component: LoginPage,
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUpPage,
      },
      {
        path: 'logout',
        name: 'Logout',
        component: LogoutPage,
      },
      {
        path: 'bidding',
        name: 'Bidding',
        component: BiddingPage,
      },
      {
        path: 'transactions',
        name: 'Transactions',
        component: TransactionsPage,
      },
      {
        path: 'favorites',
        name: 'Favorites',
        component: FavoritesPage,
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: NotificationsPage,
      },
      {
        path: 'notifications/settings',
        name: 'NotificationSettings',
        component: NotificationSettingsPage,
      },
    ],
  },

  // Authenticated routes
  {
    path: '/lessor',
    name: 'Lessor',
    component: LessorPage,

    children: [
      {
        path: 'dashboard',
        name: 'LessorDashboard',
        component: LessorDashboardPage,
      },
      {
        path: 'listings',
        name: 'LessorListings',
        component: LessorListingsPage,
      },
      {
        path: 'bookings',
        name: 'LessorBookings',
        component: LessorBookingPage,
      },
      {
        path: 'revenue',
        name: 'LessorRevenue',
        component: LessorRevenuePage,
      },
      {
        path: 'bidding',
        name: 'LessorBidding',
        component: LessorBiddingPage,
      },


    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
