<template>
  <v-app-bar app color="black" dark>
    <v-app-bar-nav-icon @click="setSidebarDrawer(!Sidebar_drawer)"></v-app-bar-nav-icon>
    
    <div class="d-flex align-center">
      <v-btn :to="{ name: 'Home' }" plain>
        <v-img
          alt="vesta leese"
          class="mt-1"
          contain
          min-width="100"
          src="@/assets/logo.png"
          width="100"
        />
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-btn :to="{ name: 'Notifications' }" text>
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
          <v-list-item :to="{ name: 'SignUp' }">
            <v-list-item-title>Sign up</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Login' }">
            <v-list-item-title>Log in</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://www.privacypolicygenerator.info">
            <v-list-item-title>Terms and privacy policy</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item :to="{ name: 'NotificationSettings' }">
            <v-list-item-title>Notification Settings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'SettingsDashboardPage' }">
            <v-list-item-title>Account Settings</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Logout' }">
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item :to="{ name: 'Properties' }">
            <v-list-item-title>List your properties for lease</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/help' }">
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",

  components: {},

  data: () => ({
    items: [
      {
        title: 'Sign in',
        to: { name: 'Sign in'}
      },
      {
        title: 'Notification Settings',
        to: { name: 'NotificationSettings'}
      },
      {
        title: 'Log out',
        to: { name: 'Log out'}
      }
    ]
  }),

  computed: {
    ...mapState(["Sidebar_drawer"])
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    })
  },
};
</script>
