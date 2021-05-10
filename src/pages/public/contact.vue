<template>
  <v-container class="page-wrapper grey lighten-4" fluid>
    <v-container>
      <div class="font-weight-bold text-md-h3 text-sm-h4 text-h5 mb-4">
        Contact
      </div>
      <v-card
        :class="[
          'pa-md-16',
          'pa-3',
          !$vuetify.breakpoint.smAndDown ? 'rounded-xl' : '',
        ]"
      >
        <v-row>
          <v-col
            order="1"
            order-md="4"
            cols="12"
            :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }"
          >
            <div class="v-overlay__content">
              <ImageGallery ref="gallery" :pictures="property.pictures" />
              <v-chip
                @click="viewAllPhotos"
                v-if="!$vuetify.breakpoint.smAndDown"
                id="view-all-photos"
                color="grey lighten-5"
                label
                text-color="black"
              >
                <v-icon left> mdi-image </v-icon>
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
                <VuePhoneNumberInput
                  v-model="mobile"
                  clearable
                  @update="inputPhone"
                />
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
import VuePhoneNumberInput from 'vue-phone-number-input';
// import { sampleProperties } from "@/data/properties";
import guestyProperties from "@/data/guesty.json";
import { sampleProperty } from "@/data/fallback";

export default {
  name: "ContactPage",

  components: {
    ImageGallery,
    VuePhoneNumberInput
  },

  data: () => ({
    property: null,
    endTime: new Date(2021, 4, 10),

    valid: false,
    fullname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    mobile: "",
    message: "",
  }),

  methods: {
    viewAllPhotos: function () {
      this.$refs.gallery.index = 0;
    },
    inputPhone: function() {

    }
  },

  created() {
    let property = sampleProperty;
    let propertyId = this.$route.params.propertyId;
    guestyProperties.results.forEach(function (p) {
      if (propertyId == p._id) {
        property = p;
      }
    });
    this.property = property;
  },
};
</script>

<style scoped>
#view-all-photos {
  position: absolute;
  bottom: 20px;
  border-top-right-radius: 16px !important;
  border-bottom-right-radius: 16px !important;
  z-index: 1000;
}
</style>
