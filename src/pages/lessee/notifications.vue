<template>
  <v-container>
    <v-row class="text-center">


      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Notifications
        </h1>

      <v-card
      class="mb-4"
        v-bind:key="notif.id"
        v-for="notif in notifications"
          elevation="2">
        <v-card-title>{{ notif.title }}</v-card-title>
        <v-card-text>{{ notif.body }}</v-card-text>

      </v-card>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
import {sampleNotifications} from "../../data/notifications";

  export default {
    name: 'BiddingPage',

    data: () => ({
      notifications: sampleNotifications,

    }),
  }
</script>
