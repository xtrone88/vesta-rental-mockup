<template>
  <div>
    <v-container>
      <v-row class="text-start">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">About Page</h1>

          <v-skeleton-loader
            v-bind="attrs"
            type="card-avatar, article"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "PropertiesPage",

  data: () => ({}),
};
</script>
