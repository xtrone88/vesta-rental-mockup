<template>
  <v-container class="page-wrapper">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <div class="font-weight-bold text-md-h3 text-sm-h4 text-h5 mb-4">
          Notifications
        </div>
        <v-card
          class="rounded-xl"
          :elevation="$vuetify.breakpoint.xs ? 0 : 1"
          :outlined="!$vuetify.breakpoint.xs"
        >
          <v-row
            class="mb-4"
            v-bind:key="notif.id"
            v-for="(notif, i) in notifications"
            elevation="2"
          >
            <v-col align-self="center">
              <v-list-item three-line>
                <v-list-item-avatar>
                  <v-icon>mdi-cellphone-arrow-down</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ notif.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ notif.body }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ notif.date }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="i != notifications.length - 1"></v-divider>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sampleNotifications } from "../../data/notifications";

export default {
  name: "BiddingPage",

  data: () => ({
    notifications: sampleNotifications,
  }),
};
</script>
