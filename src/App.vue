<template>
  <v-app>
    <Header />

    <Sidebar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/layout/header/header";
import Sidebar from "./components/layout/sidebar/sidebar";
import Footer from "./components/layout/footer/footer";

export default {
  name: "App",

  computed: {
    appBarColor: function () {
      if (this.$route.path.startsWith("/lessor")) {
        return "#12a7c6";
      } else if (this.$route.path.startsWith("/admin")) {
        return "blue";
      }
      return "#242424";
    },
  },
  components: {
    Header,
    Sidebar,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
