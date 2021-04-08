<template>
  <div>
    <v-row class="text-center">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Revenue</h1>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-inner-icon="mdi-calendar"
                readonly
                clearable
                outlined
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false" />
          </v-menu>

          <v-data-table
            :headers="headers"
            :items="transactions"
            item-key="name"
            class="elevation-1"
            :search="search"
            :custom-filter="filterOnlyCapsText"
          >
            <template v-slot:top>
              <v-text-field v-model="search" label="Search" class="mx-4" />
            </template>
          </v-data-table>
        </v-col>
      </v-container>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import moment from "moment";
import { sampleTransactions } from "../../data/transactions";

export default {
  name: "LessorRevenuePage",
  title: "Transactions",

  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    transactions: sampleTransactions,
  }),

  computed: {
    dateRangeText() {
      return `${moment(this.dates[0]).format("MMM Do")} to ${moment(
        this.dates[1]
      ).format("MMM Do")}`;
    },
    headers() {
      return [
        { text: "ID", value: "id" },
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
