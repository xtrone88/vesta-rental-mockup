<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Notification Settings
        </h1>

      <v-card
        class="mb-4"
        elevation="2"
      >
        <v-card-title>Notification Messages</v-card-title>
        <v-card-text>Receive notifications from lesee, lessor, property manager and admin




              <v-switch
      v-model="email"
      label="Email"
    ></v-switch>
    <v-switch
      v-model="textMessages"
      label="Text Messages"
    ></v-switch>
        <v-switch
      v-model="browserNotifications"
      label="Browser Notifications"
    ></v-switch>
        </v-card-text>

      </v-card>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'NotificationSettingsPage',

    data: () => ({
      textMessages: false,
      email: true,
      browerNotifications: false

    }),
  }
</script>
