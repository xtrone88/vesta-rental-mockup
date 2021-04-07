<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Properties
        </h1>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      <v-card
        class="mb-4"
        v-bind:key="property.id"
        v-for="property in properties"
          elevation="2">
        <v-card-title>{{ property.title }}</v-card-title>
        <v-card-text>{{ property.body }}</v-card-text>

      </v-card>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { sampleProperties } from '../../../data/properties';

export default {
  name: 'PropertiesListPage',

  data: () => ({
    properties: sampleProperties,
  }),
};
</script>
