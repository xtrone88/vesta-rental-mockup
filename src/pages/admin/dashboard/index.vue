<style lang="scss" scoped>
.admin_dashboard_widget {
  color: white;
  .v-icon {
    color: white;
    align-self: end;
  }
  .v-card__title {
    font-size: 64px;
  }
  .v-card__subtitle {
    font-size: 20px;
    color: white;
  }
  .v-card__text {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
<template>
  <div>
    <v-container class="pb-12">
      <v-row class="text-start">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Admin Dashboard</h1>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="12" sm="4">
          <v-card
            color="#12a7c6"
            rounded="md"
            class="admin_dashboard_widget"
            elevation="4"
          >
            <v-card-title>
              246
              <v-icon size="64" class="ml-2">mdi-chart-box</v-icon>
            </v-card-title>
            <v-card-subtitle>Total Views </v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            color="#346f9a"
            rounded="md"
            class="admin_dashboard_widget"
            elevation="4"
          >
            <v-card-title>
              150 <v-icon size="64" class="ml-2">mdi-heart</v-icon>
            </v-card-title>
            <v-card-subtitle>Favorites</v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            color="#19424b"
            rounded="md"
            class="admin_dashboard_widget"
            elevation="4"
          >
            <v-card-title>
              200 <v-icon size="64" class="ml-2">mdi-share</v-icon>
            </v-card-title>
            <v-card-subtitle>Shares</v-card-subtitle>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="12" md="3">
          <v-card
            :to="{ path: '/lessor/bidding' }"
            rounded="md"
            class="dashboard_card"
            elevation="4"
          >
            <v-card-title>Total Views </v-card-title>
            <v-card-text> <LineChart /> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="12" sm="8">
          <v-card
            :to="{ path: '/lessor/bidding' }"
            rounded="md"
            class="dashboard_card"
            elevation="4"
          >
            <v-card-title>Recent Property Listing </v-card-title>
            <v-card-text> A datatable here </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
            :to="{ path: '/lessor/bidding' }"
            rounded="md"
            class="dashboard_card"
            elevation="4"
          >
            <v-card-title>Top Locations </v-card-title>
            <v-card-text> <PieChart /></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LineChart from "./line.chart.vue";
import PieChart from "./pie.chart.vue";

export default {
  title: "Dashboard",
  name: "AdminDashboardPage",
  components: {
    PieChart,

    LineChart,
  },
  data: () => ({}),
};
</script>



