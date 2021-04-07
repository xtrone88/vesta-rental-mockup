<template>
  <v-app>
    <v-app-bar app color="#242424" dark>
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
        <v-badge color="green" content="6">
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
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
