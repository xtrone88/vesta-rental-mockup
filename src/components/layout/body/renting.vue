<template>
  <v-col v-if="!$vuetify.breakpoint.xs" :class="['text-center', !$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0 ma-0']">
    <h1>The New Way of Renting Properties</h1>
    <p style="font-size: 14px">
      New online auction-based application for booking rental properties
    </p>
    <v-img src="@/assets/home/rent-way.png"></v-img>
  </v-col>
</template>

<script>

export default {
  name: "Renting",

  components: {},

  data: () => ({
    
  }),

  computed: {
  },

  methods: {

  },
};
</script>
