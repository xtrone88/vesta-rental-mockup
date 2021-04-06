<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="vesta leese"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        :to="{ name: 'Notifications' }"
        text
      >
      <v-badge color="green"
          content="6">
        <v-icon>mdi-bell</v-icon>
      </v-badge>

      </v-btn>

      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
       <v-btn
          v-bind="attrs"
          v-on="on"
        text
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item :to="{ name: 'Sign in' }">
          <v-list-item-title>Sign in</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'NotificationSettings' }">
          <v-list-item-title>Notification Settings</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'Log out' }">
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


    </v-app-bar>
 <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Account' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

           <v-list-item :to="{ name: 'Transactions' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Transactions</v-list-item-title>
          </v-list-item>

           <v-list-item :to="{ name: 'Watching' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Watching</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Bidding' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bidding</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Properties' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Properties</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
      drawer: false,
      group: null,
  }),
};
</script>
