import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/public/home';
import FAQPage from '../pages/public/faq';
import ContactPage from '../pages/public/contact';
import PropertiesListPage from '../pages/public/properties/properties.list';

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

import LesseePage from '../pages/lessee/lessee';
import TermsPage from '../pages/public/terms';
import PrivacyPage from '../pages/public/privacy';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
