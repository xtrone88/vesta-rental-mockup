<template>
  <v-container class="page-wrapper">
    <div class="font-weight-bold text-md-h3 text-sm-h4 text-h5 mb-4">
      Settings
    </div>
    <v-row class="text-start">
      <v-col class="d-flex" align="stretch" cols="12" sm="4" md="4" xs="4">
        <v-card
          :to="{ path: '/account/personalinfo' }"
          rounded="xl"
          class="dashboard_card"
          elevation="4"
        >
          <img
            src="../../assets/paid/icon8/Personal_info.svg"
            class="svg_icon"
          />
          <v-card-title>
            Personal Info <v-icon>mdi-chevron-right</v-icon></v-card-title
          >
          <v-card-text
            >Basic info, like your name and photo, that you use in Vesta Lease.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="4" xs="4">
        <v-card
          :to="{ path: '/account/notifications/settings' }"
          rounded="xl"
          class="dashboard_card"
          elevation="4"
        >
          <img
            src="../../assets/paid/icon8/Notification.svg"
            class="svg_icon"
          />
          <!-- <v-icon size="64" class="ml-2">mdi-calendar-check</v-icon> -->

          <v-card-title
            >Notification Settings<v-icon
              >mdi-chevron-right</v-icon
            ></v-card-title
          >
          <v-card-text>
            Choose notification preferences and how you want to be contacted
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" md="4" xs="4">
        <v-card
          :to="{ path: '/account/payments' }"
          rounded="xl"
          class="dashboard_card"
          elevation="4"
        >
          <img src="../../assets/paid/icon8/Payments.svg" class="svg_icon" />

          <v-card-title
            >Payments<v-icon>mdi-chevron-right</v-icon>
          </v-card-title>
          <v-card-text> Setup your payments and payout . </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  title: "Settings",
  name: "SettingsDashboardPage",
  data: () => ({}),
};
</script>


<style >
.v-card .svg_icon {
  /* required to stop dumb radius thing */
  padding: 20px;
}
</style>