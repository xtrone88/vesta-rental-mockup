<template>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="d-flex align-center justify-space-between">
              <div class="d-flex align-baseline">
                <span
                  class="font-weight-bold text-md-h3 text-sm-h4 text-h6 mr-2"
                  >Popular Destination</span
                >
                <span
                  class="text-md-h4 text-sm-h5 text-subtitle-1 grey--text text--lighten-1"
                  >{{ popularLocation }}</span
                >
              </div>
              <v-btn v-if="$vuetify.breakpoint.mobile" icon color="black">
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Location"
                prepend-inner-icon="mdi-target"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="menu"
                v-model="datePickerMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateRangeText"
                    label="Select Date"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    dense
                    clearable
                    outlined
                    hide-details="auto"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="datePickerMenu = false"
                />
              </v-menu>
            </v-col>
          </v-row>
          <v-row v-if="!$vuetify.breakpoint.xs">
            <v-col>
              <v-chip-group mandatory active-class="primary--text">
                <v-chip
                  class="sized-chip"
                  v-for="type in propertyTypes"
                  :key="type"
                  outlined
                >
                  {{ type }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-divider class="mb-4"></v-divider>
          <v-row v-for="property in properties" :key="property.id">
            <v-col cols="12">
              <v-lazy
                  v-model="property.isActive"
                  :options="{
                    threshold: 0.5,
                  }"
                >
                  <v-row no-gutters>
                    <v-col cols="12" lg="4" md="3" sm="4">
                      <v-img
                        :src="
                          $vuetify.breakpoint.mobile
                            ? property.pictures[0].thumb_750
                            : property.pictures[0].thumb_500
                        "
                        :aspect-ratio="3/2"
                        class="rounded-xl fill-height"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="12" lg="8" md="9" sm="8" class="pl-4">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <div class="font-weight-bold text-sm-h6 text-subtitle-1">
                            <router-link
                              :to="{ path: `/properties/${property.id}` }"
                            >
                            <span class="mr-4">{{ property.title }}</span>
                            </router-link>
                            <v-icon class="mr-1">mdi-eye-outline</v-icon>
                            <v-icon>mdi-heart-outline</v-icon>
                          </div>
                          <div class="text-body-2">
                            {{ property.address.street }}<br />
                            {{
                              property.address.city +
                              "," +
                              property.address.country
                            }}
                          </div>
                        </v-col>
                        <v-col cols="4">
                          <div class="text-body-2 black--text">
                            <div>TAKING POST BIDS</div>
                            <div>
                              <b>{{ property.postbids }} days</b>
                            </div>
                            <div>Ends {{ property.postBidsEndingDate }}</div>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="8" class="d-flex align-end">
                          <div>
                            <div class="text-body-2 mb-2">
                              {{ property.capacity }}
                            </div>
                            <div>
                              <v-btn
                                small
                                elevation="0"
                                color="primary"
                                class="mr-1 mb-1"
                                @click="dialog = true"
                              >
                                <v-icon class="rotate-270" left
                                  >mdi-hammer</v-icon
                                >
                                CURRENT BID | $900
                              </v-btn>
                              <v-btn
                                small
                                elevation="0"
                                color="secondary"
                                class="px-1 mb-1"
                                :to="{ path: `/properties/${property.id}` }"
                              >
                                LEASE IT FOR $1000
                              </v-btn>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="4">
                          <div class="text-body-2 black--text mt-2">
                            <div>Lease Start</div>
                            <div>
                              <b>{{ property.leaseStartDate }}</b>
                            </div>
                            <div>Lease End</div>
                            <div>
                              <b>{{ property.leaseEndDate }}</b>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-lazy>
              <v-divider class="mt-4"></v-divider>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mobile">
          <!-- Here it goes maps component -->
        </v-col>
      </v-row>

      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="700"
      >
        <v-card class="rounded-xl">
          <v-toolbar flat height="100">
            <v-row >
              <v-col cols="10" sm="6" offset-sm="3">
                <h1 class="text-center text-md-h4 font-weight-bold">Place a Bid</h1>
              </v-col>
              <v-col cols="1" sm="1" xs="1" offset-sm="2">
                <v-btn
                  icon
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>                            
          </v-toolbar>
          <v-divider></v-divider>
          <v-container>
            <v-row>
              <v-col>
                <div class="d-flex align-center">
                  <v-text-field
                  counter="25"
                  hint="Minium of $ 5 Increment"
                  label="Your Bid Amount"
                ></v-text-field>
                <span>$</span>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="10" offset-sm="1">
                <v-icon color="green">mdi-check</v-icon>
                <span class="font-weight-bold light-green--text accent-3">Property not Reserved - Available for Auction</span>                              
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" offset-sm="1">
                <v-row>
                  <v-col class="pt-1 pb-1">
                    <span class="font-weight-bold">Auction Remaining Time</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-1 pb-1">
                    <v-icon class="pr-2" color="primary">mdi-clock</v-icon>
                    <span class="text-simple">3d 23:26:32</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col  cols="12" sm="5" class="pb-0">
                <v-row>
                  <v-col class="pt-1 pb-1">
                    <span class="font-weight-bold">Number of Bids</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="4" class="pt-1 pb-1">
                    <v-icon color="primary" class="rotate-270" left
                                  >mdi-hammer</v-icon>
                    <span class="text-simple" > 100 </span>
                  </v-col>
                  <v-col cols="12" sm="6" class="pt-1 pb-1">
                    <a href="/" class="subtitle-2">View Bid History</a>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" offset-sm="2" class="pt-0 pr-2 pl-2 pb-0">
                <v-btn block class="mt-4 green white--text" @click="dialog = false"> BID </v-btn>
              </v-col>
              <v-col cols="12" sm="4" class="pt-0 pr-2 pl-2 pb-6">
                <v-btn block class="mt-4 cyan white--text" @click="dialog = false"> LEASE IT FOR $1299 </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </v-container>
</template>
<script>
import { sampleProperties } from "../../../data/properties";

export default {
  name: "PropertiesPage",
  title: "Properties",
  data: () => ({
    date: "",
    datePickerMenu: false,
    popularLocation: "New York",
    dialog: false,
  }),
  computed: {
    dateRangeText() {
      return "";
    },
    properties() {
      return sampleProperties.map((property) => {
        let details = [];
        details.push(
          this.stringHelpers.pluralize(property.accommodates, "guest", "guests")
        );
        details.push(
          this.stringHelpers.pluralize(property.bedrooms, "bedroom", "bedrooms")
        );
        details.push(
          this.stringHelpers.pluralize(
            property.bathrooms,
            "bathroom",
            "bathrooms"
          )
        );

        property.postbids = 3;
        property.postBidsEndingDate = "Mar 11, 2021";
        property.leaseStartDate = "Mar 24, 2021";
        property.leaseEndDate = "Mar 30, 2021";
        return {
          ...property,
          capacity: details.join("·"),
        };
      });
    },
    propertyTypes() {
      return ["All", "Apartment", "House", "More"];
    },
  },
};
</script>

<style lang="scss" scoped>
.sized-chip {
  display: inline-block;
  width: 100px;
  text-align: center;
}

.text-style-medium {
  font-size: 16px;
}

.text-style-medium1 {
  font-size: 16px;
  color: #25d848;
  font-weight: bold;
}

.text-style-small {
  font-size: 14px;
}
</style>
