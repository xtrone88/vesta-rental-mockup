<template>
  <v-col
    :class="[
      !$vuetify.breakpoint.xs ? 'pr-12 pl-12' : 'pl-4 pr-4',
      'grey lighten-3',
    ]"
  >
    <h2>Popular Destination</h2>
    <v-row :class="['pt-8 mb-0', $vuetify.breakpoint.xs ? 'flex-card' : '']">
      <v-col
        :cols="$vuetify.breakpoint.xs ? 5 : 3"
        sm="6"
        md="3"
        lg="3"
        v-for="(city, i) in cities"
        :key="i"
      >
        <div class="mx-auto pa-0 ma-0" elevation="0">
          <div align="start">
            <img
              :width="$vuetify.breakpoint.xs ? '100' : '150'"
              class="rounded-xl"
              :src="city.img"
            />
            <p>
              <strong
                ><h3 class="text-body">{{ city.city }}</h3></strong
              >
              <span class="text-body">{{ city.state }}</span>
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { citiesOfProperties } from "../../../data/cities";

export default {
  name: "Destination",

  components: {},

  data: () => ({
    cities: citiesOfProperties,
  }),

  computed: {},

  methods: {},
};
</script>

<style scoped>
.flex-card {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
}
</style>
