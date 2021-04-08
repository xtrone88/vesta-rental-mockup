<template>
  <div>
    <v-container>
      <v-row class="text-start">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Lessor Dashboard</h1>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="4">
          <v-card rounded="xl" class="pt-4" height="200">
            <v-icon x-large class="ml-2">mdi-view-list</v-icon>
            <v-card-title
              >Listings <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text
              >Basic info, like your name and photo, that you use in Vesta
              Lease.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card rounded="xl" class="pt-4" height="200">
            <v-icon x-large class="ml-2">mdi-calendar-check</v-icon>

            <v-card-title
              >Bookings <v-icon>mdi-chevron-right</v-icon></v-card-title
            >
            <v-card-text>
              Choose notification preferences and how you want to be contacted
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card rounded="xl" class="pt-4" height="200">
            <v-icon x-large class="ml-2">mdi-file</v-icon>

            <v-card-title
              >Revenue Report<v-icon>mdi-chevron-right</v-icon>
            </v-card-title>
            <v-card-text> Setup your payments and payout . </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="text-start">
        <v-col cols="4">
          <v-card rounded="xl" class="pt-4" height="200">
            <v-icon x-large class="ml-2">mdi-gavel</v-icon>
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
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/footer";

export default {
  title: "Dashboard",
  name: "LessorDashboardPage",
  components: { Footer },
  data: () => ({}),
};
</script>
