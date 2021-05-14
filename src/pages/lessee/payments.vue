<template>
  <v-container class="page-wrapper">
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <div class="font-weight-bold text-md-h3 text-sm-h4 text-h5 mb-4">
          Payments
        </div>
        <v-card class="rounded-xl pb-4" outlined>
          <div  v-bind:key="pay.id" v-for="pay in payments">
            <v-list-item two-line >
              <v-list-item-avatar>
                <v-icon>mdi-credit-card-check</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ pay.title }}</v-list-item-title>
                <v-list-item-subtitle> Expiration: {{ pay.date }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </div>
          <div class="text-center">
            <v-btn class="mt-6 cyan white--text" @click="dialog = true">
              ADD PAYMENT
            </v-btn>
          </div>
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
          <v-toolbar flat>
            <v-row align="center" class="font-weight-bold">
              <span>Add Payment</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
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
            suffix="MM/YY   CVC"
          ></v-text-field>
        </v-row>
        <v-row class="ma-4 mt-2">
          <v-col cols="12" md="3">
            <v-btn
              block
              class="mt-4 cyan white--text"
              :to="{ path: '/account/transactions' }"
            >
              SUBMIT
            </v-btn>
          </v-col>
        </v-row>
        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { sampleNotifications } from "@/data/notifications";
import store from '@/store/store';

export default {
  name: "PaymentPage",

  data: () => ({
    notifications: sampleNotifications,
    dialog: false,
    payments: store.getters.payments,
  }),
};
</script>
