<template>
  <v-container class="page-wrapper" :fluid="!$vuetify.breakpoint.mdAndUp">
    <v-row>
      <v-col class="d-flex">
        <span class="font-weight-bold text-md-h3 text-sm-h4 text-h5"
          >Transactions Page</span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-1" cols="12">
        <v-menu
          ref="dialog"
          v-model="dateModal"
          :return-value.sync="dates"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              label="Select Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              style="max-width: 250px"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="dates"
            range
            no-title
            scrollable
            color="primary"
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateModal = false"
              >Cancel</v-btn
            >
            <v-btn text color="primary" @click="$refs.dialog.save(dates)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="mt-1" cols="12">
        <v-data-table
          :headers="headers"
          :items="transactions"
          item-key="name"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
          hide-default-footer
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="ma-4"
              append-icon="mdi-magnify"
            />
          </template>
          <template v-slot:[`item.createdAt`]="{ item }">
            {{ item.createdAt | formatDateTime }}
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <span class="green--text" dark>
              {{ item.status }}
            </span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sampleTransactions } from "../../data/transactions";

export default {
  name: "TransactionsPage",
  title: "Transactions",

  data: () => ({
    dateModal: false,
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    menu1: false,
    transactions: sampleTransactions,
  }),

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    headers() {
      return [
        { text: "Date", value: "createdAt" },
        { text: "Property Type", value: "propertyType" },
        { text: "Property Description", value: "propertyDescription" },
        { text: "Amount", value: "amount" },
        { text: "Status", value: "status" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>
