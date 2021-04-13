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
          align="start"
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
              <router-link
                class="footer_bot_link"
                style=""
                :to="{ path: 'contact' }"
              >
                Contact US
              </router-link>

              |
              <router-link class="footer_bot_link" :to="{ path: '/privacy' }"
                >Privacy</router-link
              >
              |
              <router-link class="footer_bot_link" :to="{ path: '/terms' }">
                Terms
              </router-link>

              |
              <router-link class="footer_bot_link" :to="{ path: '/faq' }">
                FAQ
              </router-link>
            </v-card-text>
            <v-card-text class="black--text">
              Copyright @ {{ new Date().getFullYear() }} VestaLease.com. All
              rights Reserved.
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
        title: "VESTA LEASE",
        items: [
          {
            title: "About us",
            to: { path: "/about" },
          },
          {
            title: "Careers",
            to: { path: "/careers" },
          },
          {
            title: "Privacy Policy",
            to: { path: "/privacy" },
          },
          {
            title: "Terms",
            to: { path: "/terms" },
          },
        ],
      },
      {
        title: "SUPPORT",
        items: [
          {
            title: "Contact Us",
            to: { path: "/contact" },
          },
          {
            title: "Lessors ",
            to: { path: "/support/lessors  " },
          },
          {
            title: "Lessees",
            to: { path: "/support/lessees" },
          },
          {
            title: "Agents",
            to: { path: "/support/agents" },
          },
        ],
      },
      {
        title: "HELPFUL INFORMATION",
        items: [
          {
            title: "How to Bid",
            to: { path: "/help/bid" },
          },
          {
            title: "How to Sell",
            to: { path: "/help/sell" },
          },
          {
            title: "Common Questions",
            to: { path: "/help/faq" },
          },
          {
            title: "Helpful Site Features",
            to: { path: "/help/site" },
          },
        ],
      },
      // {
      //   title: "OTHER LINKS",
      //   items: [
      //     {
      //       title: "Link 1",
      //       to: { name: "Link 1" },
      //     },
      //     {
      //       title: "Link 2",
      //       to: { name: "Link 2" },
      //     },
      //     {
      //       title: "Link 3",
      //       to: { name: "Link 3" },
      //     },
      //     {
      //       title: "Link 4",
      //       to: { name: "Link 4" },
      //     },
      //   ],
      // },
    ],
  }),
};
</script>


<style scoped>
.footer_bot_link {
  text-decoration: none;
  color: black;
}
</style>
