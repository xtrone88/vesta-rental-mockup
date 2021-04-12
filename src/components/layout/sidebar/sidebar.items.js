export default [
  {
    icon: 'mdi-home',
    title: 'Home',
    to: { name: 'Home' },
  },
  {
    icon: 'mdi-compare-horizontal',
    title: 'Transactions',
    to: { name: 'Transactions' },
  },
  {
    icon: 'mdi-eye',
    title: 'Watching',
    to: { name: 'Watching' },
  },
  {
    icon: 'mdi-heart',
    title: 'Favorites',
    to: { name: 'Favorites' },
  },
  {
    icon: 'mdi-gavel',
    title: 'Bidding',
    to: { name: 'Bidding' },
  },
  {
    icon: 'mdi-view-list',
    title: 'Properties',
    to: { name: 'Properties' },
  },
//--------------LESSOR---------------//
  {
    title: 'Lessor',
  },
  {
    icon: 'mdi-view-dashboard',
    title: 'Dashboard',
    to: { name: 'LessorDashboard' },
  },
  {
    icon: 'mdi-view-list',
    title: 'Listings',
    to: { name: 'LessorListings' },
  },
  {
    icon: 'mdi-calendar-check',
    title: 'Bookings',
    to: { name: 'LessorBookings' },
  },
  {
    icon: 'mdi-file',
    title: 'Revenue',
    to: { name: 'LessorRevenue' },
  },
  {
    icon: 'mdi-gavel',
    title: 'Bidding',
    to: { name: 'LessorBidding' },
  },
//--------------ADMIN---------------//
  {
    title: 'Admin',
  },
  {
    icon: 'mdi-view-dashboard',
    title: 'Dashboard',
    to: { path: '/admin/dashboard' },
  },
  {
    icon: 'mdi-compare-horizontal',
    title: 'Listings',
    to: { path: '/admin/transactions' },
  },
  {
    icon: 'mdi-eye',
    title: 'Watching',
    to: { path: '/admin/watching' },
  },
  {
    icon: 'mdi-heart',
    title: 'Favorites',
    to: { path: '/admin/favorites' },
  },
  {
    icon: 'mdi-gavel',
    title: 'Bidding',
    to: { path: '/admin/bidding' },
  },
  {
    icon: 'mdi-view-list',
    title: 'Properties',
    to: { path: '/admin/properties' },
  },
];
