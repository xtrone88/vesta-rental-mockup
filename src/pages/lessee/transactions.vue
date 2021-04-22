<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-2">
          <h1 class="display-2 font-weight-bold mb-3">Transactions Page</h1>
        </v-col>

        <v-col class="mb-1" cols="12" sm="6">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateRangeText"
                label="Select Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dates" range no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(dates)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
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
            <template v-slot:[`item.status`]="{ item }">
              <span class="green--text" dark>
                {{ item.status }}
              </span>
            </template>
          </v-data-table>
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import { sampleTransactions } from "../../data/transactions";

export default {
  name: "TransactionsPage",
  title: "Transactions",

  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    menu1: false,
    transactions: sampleTransactions,
  }),

  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
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
