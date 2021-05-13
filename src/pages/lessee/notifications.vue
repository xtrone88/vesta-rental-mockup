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
            <v-col class="d-flex-column">
              <div class="d-flex align-center">
                <div class="pr-12 pl-12">
                  <v-icon>mdi-cellphone-arrow-down</v-icon>
                </div>
                <div class="d-flex-column">
                  <span>{{notif.title}}</span><br>
                  <span>{{notif.content}}</span><br>
                  <span>{{notif.date}}</span>
                </div>
              </div>
              <v-divider class="pt-0 pb-0" v-if="i != notifications.length - 1"></v-divider>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from '../../store/store';

export default {
  name: "BiddingPage",

  data: () => ({
  }),

  computed: {
    notifications() {
      return store.getters.notifications
    },
  }
};
</script>
