<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <ImageGallery :pictures="properties[0].pictures" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-card-title> Property Details </v-card-title>
          <v-card-subtitle>
            Seller reserves the right to a final review of all bids received.
            Seller my accept or reject any bid regardless of whether or not the
            reserve price has been met.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ImageGallery from "@/components/image.gallery";
import { sampleProperties } from "@/data/properties";

export default {
  name: "PropertiesListPage",
  components: {
    ImageGallery,
  },
  data: () => ({
    properties: sampleProperties,
  }),
};
</script>

