<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Lessees</h1>
        </v-col>

        <v-col class="mb-5 text-end" cols="12">
          <v-data-table
            :headers="headers"
            :items="data"
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
              <v-icon small class="mx-1" @click="editLessee(item)">
                mdi-pencil
              </v-icon>
              <v-icon small class="mx-1" @click="viewLessee(item)">
                mdi-eye
              </v-icon>
              <v-icon small class="mx-1" @click="contactLessee(item)">
                mdi-email
              </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";
import { sampleLessees } from "../../data/lessees";

export default {
  name: "LessorBookingsPage",
  title: "Bookings",

  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    data: sampleLessees,
  }),

  computed: {
    dateRangeText() {
      return `${moment(this.dates[0]).format("MMM Do")} to ${moment(
        this.dates[1]
      ).format("MMM Do")}`;
    },
    headers() {
      return [
        { text: "Customer Name", value: "name" },
        { text: "Customer Phone", value: "phone" },
        { text: "Email", value: "email" },

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
