<template>
  <v-app-bar app color="black" dark>
    <v-app-bar-nav-icon @click="setSidebarDrawer(!Sidebar_drawer)"></v-app-bar-nav-icon>
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
    ...mapState(["Sidebar_drawer"]),
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    })
  },
};
</script>
