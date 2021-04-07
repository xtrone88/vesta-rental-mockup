<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <ImageGallery />
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import ImageGallery from "@/components/image.gallery";

export default {
  name: "Detail",
  components: {
    ImageGallery,
  },
};
</script>
