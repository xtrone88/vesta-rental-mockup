<style lang="scss">
i.v-icon.v-icon {
  color: black;
}
</style>
<template>
  <v-app>
    <v-app-bar app :color="appBarColor" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-btn :to="{ name: 'Home' }" plain>
          <v-img
            :to="{ name: 'Home' }"
            alt="vesta leese"
            class="mt-1"
            contain
            min-width="100"
            src="./assets/logo.png"
            width="100"
          />
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn :to="{ path: '/account/notifications' }" text>
        <v-badge overlap color="green" content="6">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item :to="{ path: '/account/sigup' }">
            <v-list-item-title>Sign up</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/account/login' }">
            <v-list-item-title>Log in</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item :to="{ path: '/account/notifications/settings' }">
            <v-list-item-title>Notification Settings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/account/settings' }">
            <v-list-item-title>Account Settings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/account/logout' }">
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item :to="{ path: '/help' }">
            <v-list-item-title
              >List your properties for lease</v-list-item-title
            >
          </v-list-item>
          <v-list-item :to="{ path: '/help' }">
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="indigo--text text--accent-4">
          <v-list-item :to="{ path: '/' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/account/transactions' }">
            <v-list-item-icon>
              <v-icon>mdi-compare-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Transactions</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/account/watching' }">
            <v-list-item-icon>
              <v-icon>mdi-eye</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Watching</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/account/favorites' }">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/account/bidding' }">
            <v-list-item-icon>
              <v-icon>mdi-gavel</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bidding</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/properties' }">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Properties</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Lessor</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/lessor/dashboard' }">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/lessor/listings' }">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Listings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/lessor/bookings' }">
            <v-list-item-icon>
              <v-icon>mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bookings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/lessor/revenue' }">
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Revenue</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/lessor/bidding' }">
            <v-list-item-icon>
              <v-icon>mdi-gavel</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bidding</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/admin/dashboard' }">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/admin/transactions' }">
            <v-list-item-icon>
              <v-icon>mdi-compare-horizontal</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Listings</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ path: '/admin/watching' }">
            <v-list-item-icon>
              <v-icon>mdi-eye</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Watching</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/admin/favorites' }">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/admin/bidding' }">
            <v-list-item-icon>
              <v-icon>mdi-gavel</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bidding</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/properties' }">
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Properties</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import Header from "./components/layout/header/header";
// import Sidebar from "./components/layout/sidebar/sidebar";
import Footer from "./components/layout/footer/footer";
import "./assets/css/main.css";
export default {
  name: "App",
  computed: {
    appBarColor: function () {
      if (this.$route.path.startsWith("/lessor")) {
        return "#12a7c6";
      } else if (this.$route.path.startsWith("/admin")) {
        return "blue";
      }
      return "#242424";
    },
  },
  components: {
    Footer,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
