<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      color="#F7F7F7"
      class="black--text text-center"
      width="100%"
    >
      <v-row class="pa-8 d-none d-sm-flex">
        <v-col>
          <v-row class="text-h4">Vestalease</v-row>
          <v-row
            ><router-link :to="{ path: '/about' }">
              About Us</router-link
            ></v-row
          >
          <v-row>Careers</v-row>
          <v-row
            ><router-link :to="{ path: '/terms' }"> Terms</router-link></v-row
          >
          <v-row
            ><router-link :to="{ path: '/privacy' }">
              Privacy</router-link
            ></v-row
          >
        </v-col>

        <v-col>
          <v-row class="text-h4">Support</v-row>
          <v-row
            ><router-link :to="{ path: '/contact' }">
              Contact Us</router-link
            ></v-row
          >
          <v-row>Lessess</v-row>
          <v-row>Lessors</v-row>
          <v-row>Agents</v-row>
        </v-col>
        <v-col>
          <v-row class="text-h4">Helpful information</v-row>
          <v-row>How to bid</v-row>
          <v-row>How to sell</v-row>
          <v-row>Common Questions</v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="justify-space-between px-12 pt-8">
        <span>
          <router-link :to="{ path: '/contact' }"> Contact Us</router-link> |
          <router-link :to="{ path: '/privacy' }"> Privacy</router-link> |
          <router-link :to="{ path: '/terms' }"> Terms</router-link> |
          <router-link :to="{ path: '/about/frequently-asked-questions' }">
            FAQ</router-link
          >
        </span>
        <span>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            color="#686868"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </span>
      </v-row>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vesta Lease</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      // 'mdi-linkedin',
      "mdi-instagram",
    ],
  }),
};
</script>
