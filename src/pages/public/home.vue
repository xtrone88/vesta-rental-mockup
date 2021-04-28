<template>
  <div>
    <v-container class="pa-0" fluid>
      <Slider />
      <Renting />
      <Destination />
      <Deals
        name="Featured Deals"
        background="#222"
        tColor="white--text"
        bColor="grey--text"
      />
      <Deals
        name="Ending Soon"
        background="#f0f0f0"
        tColor="black--text"
        bColor="red--text"
      />
    </v-container>
  </div>
</template>

<script>
import Slider from "@/components/layout/body/slider";
import Renting from "@/components/layout/body/renting";
import Destination from "@/components/layout/body/destination";
import Deals from "@/components/layout/body/deals";

export default {
  title: "Vesta Lease",
  name: "HomePage",
  methods: {},
  components: {
    Slider,
    Renting,
    Destination,
    Deals,
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    showlimit: 4,
  }),
};
</script>

<style lang="scss" scoped>
</style>
