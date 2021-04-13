<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Listings</h1>
        </v-col>

        <v-col class="mb-5" cols="12">
          <v-data-table
            :headers="headers"
            :items="properties"
            item-key="name"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                class="mx-4"
              />
            </template>
            <template v-slot:[`item.manager`]="{ item }">
              <div class="d-flex">
                <v-chip class="ma-2" color="primary" label>
                  <v-icon left> mdi-account-circle-outline </v-icon>
                  John Leider
                </v-chip>
                <v-btn
                  @click="addManagerListing(item)"
                  class="ma-2"
                  x-small
                  fab
                  dark
                  color="green"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
              </div>
            </template>
            <template v-slot:[`item.stats.views`]="{ item }">
              <v-chip color="red" dark>
                {{ item.stats.views }}
              </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";
import { sampleProperties } from "../../data/properties";

export default {
  name: "AdminListingsPage",
  title: "Listings",

  data: () => ({
    search: "",
    properties: sampleProperties,
  }),

  computed: {
    dateRangeText() {
      return `${moment(this.dates[0]).format("MMM Do")} to ${moment(
        this.dates[1]
      ).format("MMM Do")}`;
    },
    headers() {
      return [
        { text: "Property Type", value: "propertyType" },
        { text: "Property Title", value: "title" },
        { text: "Property Manager", value: "manager" },
        { text: "Reserve Bids" },
        { text: "Base Price", value: "prices.basePrice" },
        { text: "Views", value: "stats.views" },
        { text: "Favorites", value: "stats.favorites" },
        { text: "Shares", value: "stats.shares" },
        { text: "Actions", value: "actions", sortable: false },
      ];
    },
  },
};
</script>
