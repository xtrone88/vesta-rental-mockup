<template>
  <v-container class="pa-8" fluid>
    <v-row class="text-start">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Notifications</h1>
      </v-col>
    </v-row>

    <v-card class="mb-4 rounded-xl" :elevation="$vuetify.breakpoint.smAndDown ? 0 : 1">
      <v-col cols="12" md="6" sm="6" offset-sm="3">
        <v-row>
          <v-col>
            <div>
              <v-card-title>Notification Messages</v-card-title>
              <v-card-text>Receive notifications from lesee, lessor, property manager and admin</v-card-text>
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
            <v-card-text class="font-weight-bold">Browser Notifications</v-card-text>
          </v-col>
          <v-col cols="1" sm="1">
            <v-switch v-model="browerNotifications"></v-switch>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-col>
    </v-card>
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
