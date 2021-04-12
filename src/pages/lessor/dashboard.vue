<template>
  <div>
    <v-container class="pb-12">
      <v-row class="text-start">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Lessor Dashboard</h1>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="12" md="3">
          <v-card
            :to="{ path: '/lessor/listings' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-view-list</v-icon>
            <v-card-title>
              Listings <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text
              >Basic info, like your name and photo, that you use in Vesta
              Lease.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            :to="{ path: '/lessor/bookings' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-calendar-check</v-icon>

            <v-card-title
              >Bookings <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text>
              Choose notification preferences and how you want to be contacted
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            :to="{ path: '/lessor/revenue' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-file</v-icon>

            <v-card-title
              >Revenue Report<v-icon>mdi-chevron-right</v-icon>
            </v-card-title>
            <v-card-text> Setup your payments and payout . </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="12" md="3">
          <v-card
            :to="{ path: '/lessor/bidding' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-gavel</v-icon>
            <v-card-title
              >Bidding Report<v-icon>mdi-chevron-right</v-icon>
            </v-card-title>
            <v-card-text>
              Basic info, like your name and photo, that you use in Vesta Lease.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  title: "Dashboard",
  name: "LessorDashboardPage",
  data: () => ({}),
};
</script>


<style >
.dashboard_card {
  height: 220px;
  padding-top: 20px;
  padding-left: 5px;
}
</style>
