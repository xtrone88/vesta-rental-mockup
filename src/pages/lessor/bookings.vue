<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Bookings</h1>
        </v-col>

        <v-col class="mb-5 text-end" cols="12">
          <v-btn class="mx-2" color="primary">Current </v-btn>
          <v-btn class="mx-2" color="disabled">Past </v-btn>
          <v-data-table
            :headers="headers"
            :items="bookings"
            item-key="name"
            class="elevation-1"
            :search="search"
            :custom-filter="filterOnlyCapsText"
          >
            <template v-slot:top>
              <v-text-field
                append-icon="mdi-magnify"
                v-model="search"
                label="Search"
                class="mx-4"
              />
            </template>
            <template v-slot:[`item.name`]="{ item }">
              {{ item.firstName }} {{ item.lastName }}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn @click="contactItem(item)" class="mx-2" color="primary"
                >Contact
              </v-btn>
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
import { sampleBookings } from "../../data/bookings";

export default {
  name: "LessorBookingsPage",
  title: "Bookings",

  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    bookings: sampleBookings,
  }),

  computed: {
    dateRangeText() {
      return `${moment(this.dates[0]).format("MMM Do")} to ${moment(
        this.dates[1]
      ).format("MMM Do")}`;
    },
    headers() {
      return [
        { text: "Property Title", value: "propertyTitle" },
        { text: "In Date", value: "inDate" },
        { text: "Out Date", value: "outDate" },

        { text: "Customer Name", value: "name" },
        { text: "Customer Phone", value: "phone" },

        { text: "Action", value: "actions" },
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
