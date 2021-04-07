<template>
  <div>
    <v-row class="text-center">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Transactions Page</h1>
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
            :items="desserts"
            item-key="name"
            class="elevation-1"
            :search="search"
            :custom-filter="filterOnlyCapsText"
          >
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search (UPPER CASE ONLY)"
                class="mx-4"
              />
            </template>
            <template v-slot:[`body.append`]>
              <tr>
                <td />
                <td>
                  <v-text-field
                    v-model="calories"
                    type="number"
                    label="Less than"
                  />
                </td>
                <td colspan="4" />
              </tr>
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

export default {
  name: "TransactionsPage",
  title: "Transactions",

  data: () => ({
    dates: ["2019-09-10", "2019-09-20"],
    search: "",
    calories: "",
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),

  computed: {
    dateRangeText() {
      return `${moment(this.dates[0]).format("MMM Do")} to ${moment(
        this.dates[1]
      ).format("MMM Do")}`;
    },
    headers() {
      return [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Calories",
          value: "calories",
          filter: (value) => {
            if (!this.calories) return true;

            return value < parseInt(this.calories);
          },
        },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
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
