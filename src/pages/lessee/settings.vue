<template>
  <div>
    <v-container class="pb-12">
      <v-row class="text-start">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Settings</h1>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col xs="12" md="3">
          <v-card
            :to="{ path: '/lessor/listings' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-view-list</v-icon>
            <v-card-title>
              Personal Info <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text
              >Basic info, like your name and photo, that you use in Vesta
              Lease.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            :to="{ path: '/account/notifications/settings' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-calendar-check</v-icon>

            <v-card-title
              >Notification Settings
              <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text>
              Choose notification preferences and how you want to be contacted
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            :to="{ path: '/lessor/revenue' }"
            rounded="xl"
            class="dashboard_card"
            elevation="4"
          >
            <v-icon size="64" class="ml-2">mdi-file</v-icon>

            <v-card-title
              >Payments<v-icon>mdi-chevron-right</v-icon>
            </v-card-title>
            <v-card-text> Setup your payments and payout . </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer";

export default {
  title: "Settings",
  name: "SettingsDashboardPage",
  components: { Footer },
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
