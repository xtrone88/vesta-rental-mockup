<template>
  <v-footer padless>
    <v-card
      flat
      tile
      class="grey lighten-4 black--text text-center"
      width="100%"
    >
      <!-- Footer Links -->
      <v-container>
        <!-- Grid row -->
        <v-row
          class="text-center text-md-left"
          justify="space-around"
          align="center"
        >
          <v-col v-for="group in groups" md="2" :key="group.title">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ml-4">
              {{ group.title }}
            </h5>
            <v-list-item
              v-for="item in group.items"
              :key="item.title"
              :to="item.to"
              link
              dense
              inactive
              color="black"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-container class="pa-4">
        <v-row justify="space-between">
          <v-col cols="8">
            <v-card-text class="pb-0">
              <a style="text-decoration: none; color: black;" href="#">Contact US</a> |
              <a style="text-decoration: none; color: black;" href="#">Privacy</a> |
              <a style="text-decoration: none; color: black;" href="#">Lessers Terms Of Use</a> |
              <a style="text-decoration: none; color: black;" href="#">Lesses Terms of Use</a> |
              <a style="text-decoration: none; color: black;" href="#">FAQ</a>
            </v-card-text>
            <v-card-text class="black--text">
              Copyright @ {{ new Date().getFullYear() }} VestaLease.com. All rights Reserved.
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 black--text"
                icon
              >
                <v-icon size="36px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    groups: [
      {
        title: "VESTALEASE",
        items: [
          {
            title: "About us",
            to: { name: "AboutUs" },
          },
          {
            title: "Careers",
            to: { name: "Careers" },
          },
          {
            title: "Bidder/Site Terms of Use",
            to: { name: "Bidder/Site Terms of Use" },
          },
          {
            title: "Privacy Policy",
            to: { name: "Privacy Policy" },
          },
        ],
      },
      {
        title: "SUPPORT",
        items: [
          {
            title: "Contact Us",
            to: { name: "Contact Us" },
          },
          {
            title: "Lessors ",
            to: { name: "Lessors  " },
          },
          {
            title: "Lessees",
            to: { name: "Lessees" },
          },
          {
            title: "Agents",
            to: { name: "Agents" },
          },
        ],
      },
      {
        title: "HELPFUL INFORMATION",
        items: [
          {
            title: "How to Bid",
            to: { name: "How to Bid" },
          },
          {
            title: "How to Sell",
            to: { name: "How to Sell" },
          },
          {
            title: "Common Questions",
            to: { name: "Common Questions" },
          },
          {
            title: "Helpful Site Features",
            to: { name: "Helpful Site Features" },
          },
        ],
      },
      {
        title: "OTHER LINKS",
        items: [
          {
            title: "Link 1",
            to: { name: "Link 1" },
          },
          {
            title: "Link 2",
            to: { name: "Link 2" },
          },
          {
            title: "Link 3",
            to: { name: "Link 3" },
          },
          {
            title: "Link 4",
            to: { name: "Link 4" },
          },
        ],
      },
    ],
  }),
};
</script>
