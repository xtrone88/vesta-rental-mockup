<template>
  <v-container class="page-wrapper" fluid>
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
          <v-row>
            <v-col>
              <div>
                <v-card-title>Notification Messages</v-card-title>
                <v-card-text
                  >Receive notifications from lesee, lessor, property manager
                  and admin</v-card-text
                >
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row align="center">
            <v-col cols="9" sm="10">
              <v-card-text class="font-weight-bold">Email</v-card-text>
              <v-spacer></v-spacer>
            </v-col>
            <v-col cols="1" sm="1">
              <v-switch v-model="email"></v-switch>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row align="center">
            <v-col cols="9" sm="10">
              <v-card-text class="font-weight-bold">Text Messages</v-card-text>
            </v-col>
            <v-col cols="1" sm="1">
              <v-switch v-model="textMessages"></v-switch>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row align="center">
            <v-col cols="9" sm="10">
              <v-card-text class="font-weight-bold"
                >Browser Notifications</v-card-text
              >
            </v-col>
            <v-col cols="1" sm="1">
              <v-switch v-model="browerNotifications"></v-switch>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotificationSettingsPage",

  data: () => ({
    textMessages: false,
    email: true,
    browerNotifications: false,
  }),
};
</script>
