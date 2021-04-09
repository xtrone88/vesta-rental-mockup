<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Contact Page</h1>

        <v-skeleton-loader
          v-for="n in 1"
          v-bind:key="n"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactPage",

  data: () => ({}),
};
</script>
