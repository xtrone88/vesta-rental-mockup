<template>
  <v-container>
    <v-row class="text-start">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Payments</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card height="300" class="rounded-xl">
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3" align-self="center">
              <v-list-item two-line>
                <v-list-item-avatar>
                  <v-icon>mdi-credit-card-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Visa ***  1316</v-list-item-title>
                  <v-list-item-subtitle>
                    Expiration: 06/2023
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" offset-sm="3" align-self="center">
              <v-list-item two-line>
                <v-list-item-avatar>
                  <v-icon>mdi-credit-card-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>MasterCard **** 1010</v-list-item-title>
                  <v-list-item-subtitle>
                    Expiration: 01/2022
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="2" offset-sm="5">
              <v-btn block class="mt-6 cyan white--text" @click="dialog = true"> ADD PAYMENT </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>    
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="700"
    >
      <v-card outlined>
        <v-row class="ma-4">
          <v-toolbar
            flat
          >
            <v-row align="center" class="font-weight-bold">
              <span>Add Payment</span>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>                            
          </v-toolbar>
        </v-row>
        <v-row class="ma-4">
          <v-text-field
            label="Payment Information"
            prepend-inner-icon="mdi-credit-card"
            hint="Please enter card details"
            suffix = "MM/YY   CVC"
          ></v-text-field>
        </v-row>
        <v-row class="ma-4 mt-2">
          <v-col cols="12" md="3">
            <v-btn block class="mt-4 cyan white--text" :to="{ path: '/account/transactions' }"
            > SUBMIT </v-btn>
          </v-col>
        </v-row>
        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { sampleNotifications } from "../../data/notifications";

export default {
  name: "BiddingPage",

  data: () => ({
    notifications: sampleNotifications,
    dialog: false,
  }),
};
</script>
