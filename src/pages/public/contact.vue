<template>
  <v-container class="grey lighten-4" fluid>
    <v-container>
      <h3 class="text-h3 my-16">Contact</h3>
      <v-card class="pa-16 rounded-xl">
        <v-row>
          <v-col cols="12" md="auto" class="mr-auto">
            <h5 class="text-h5">
              Property Lease
            </h5>
            <p class="text-body-1">
              <b>3345 Edson Ave,</b><br>
              <span class="text-caption">Bronx County, Bronx, NY 10469</span>
            </p>
          </v-col>
          <v-col cols="12" md="auto">
            <p class="text-body-1">Auction Remaining Time</p>
            <p class="text-body-2">
              <v-icon
                color="cyan"
              >
                mdi-alarm
              </v-icon>
              <span class="ml-4">3d 24:26:32</span>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="v-overlay__content">
              <ImageGallery :pictures="samplePictures" />
              <v-chip
                id="view-all-photos"
                color="grey lighten-5"
                label
                text-color="black"
              >
                <v-icon left>
                  mdi-image
                </v-icon>
                View all Photos
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-form v-model="valid">
              <div class="d-flex flex-column">
                <v-text-field
                  v-model="fullname"
                  :rules="nameRules"
                  :counter="20"
                  label="Full name"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                  <vue-tel-input-vuetify></vue-tel-input-vuetify>
              </div>
              <div class="d-flex flex-column">
                <v-textarea
                  name="message"
                  label="Message"
                  :counter="500"
                  value=""
                ></v-textarea>
              </div>
              <div class="d-flex justify-center">
                <v-btn class="primary">SUBMIT</v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import ImageGallery from "@/components/image.gallery";
import { sampleProperties } from "@/data/properties";

export default {
  name: 'ContactPage',

  components: {
    ImageGallery,
  },

  data: () => ({
    properties: sampleProperties,
    endTime: new Date(2021, 4, 10),

    valid: false,
    fullname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 20 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    mobile: '',
    message: '',
  }),

  computed: {
    samplePictures() {
      return [
        require("@/assets/property/property_1.png"),
        require("@/assets/property/property_1_01.png"),
        require("@/assets/property/property_1_02.png"),
        require("@/assets/property/property_1_03.png"),
        require("@/assets/property/property_1_04.png"),
      ]
    }
  }
};
</script>

<style scoped>
  #view-all-photos {
    position: absolute;
    bottom:20px;
    border-top-right-radius:16px !important;
    border-bottom-right-radius:16px !important;
  }
</style>
