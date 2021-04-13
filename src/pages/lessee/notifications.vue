<template>
  <v-container>
    <v-row class="text-start">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Notifications</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row 
            class="mb-4"
            v-bind:key="notif.id"
            v-for="notif in notifications"
            elevation="2"
          >
            <v-col cols="12" sm="6" offset-sm="3" align-self="center">
              
              <v-list-item three-line>
                <v-list-item-avatar>
                  <v-icon>mdi-cellphone-arrow-down</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ notif.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{notif.body}}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{notif.date}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
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
