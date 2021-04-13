<template>
  <v-container>
    <v-row class="text-start">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Notifications</h1>
      </v-col>
    </v-row>

    <v-card class="mb-4" elevation="2">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card-title>Notification Messages</v-card-title>
          <v-card-text>Receive notifications from lesee, lessor, property manager and admin</v-card-text>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="5" offset="3">
          <v-card-text class="font-weight-bold">Email</v-card-text>
        </v-col>
        <v-col cols="12" sm="1">
          <v-switch v-model="email"></v-switch>
        </v-col>
        <v-col cols="12" sm="6" offset="3">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="5" offset="3">
          <v-card-text class="font-weight-bold">Text Messages</v-card-text>
        </v-col>
        <v-col cols="12" sm="1">
          <v-switch v-model="textMessages"></v-switch>
        </v-col>
        <v-col cols="12" sm="6" offset="3">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="5" offset="3">
          <v-card-text class="font-weight-bold">Browser Notifications</v-card-text>
        </v-col>
        <v-col cols="12" sm="1">
          <v-switch v-model="browerNotifications"></v-switch>
        </v-col>
        <v-col cols="12" sm="6" offset="3">
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-card>

    <!-- <v-row class="text-start">
      <v-col cols="12"> </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Notification Settings</h1>

        <v-card class="mb-4" elevation="2">
          <v-card-title>Notification Messages</v-card-title>
          <v-card-text
            >Receive notifications from lesee, lessor, property manager and
            admin

            <v-switch v-model="email" label="Email"></v-switch>
            <v-switch v-model="textMessages" label="Text Messages"></v-switch>
            <v-switch
              v-model="browserNotifications"
              label="Browser Notifications"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
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
