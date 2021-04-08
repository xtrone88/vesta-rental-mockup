<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Sidebar />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/header/header';
import Sidebar from './components/layout/sidebar/sidebar';
import Footer from './components/layout/footer/footer';

export default {
  name: "App",

  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>
