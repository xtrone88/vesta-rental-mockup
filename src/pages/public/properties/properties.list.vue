<template>
  <div>
    <v-container class="pa-8" fluid>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="d-flex align-center justify-space-between">
              <div class="d-flex align-baseline">
                <h3 class="text-sm-h3">Popular Destination</h3>
                <span class="text-sm-h5 ml-4 grey--text text--lighten-1">{{
                  popularLocation
                }}</span>
              </div>
              <v-btn v-if="$vuetify.breakpoint.mobile" icon color="black">
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Location"
                prepend-inner-icon="mdi-target"
                dense
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" md="6">
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
          <v-row v-if="!$vuetify.breakpoint.mobile">
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
              <v-sheet
                min-height="{ $vuetify.breakpoint.mobile ? 400 : 200 }"
                class="mb-2 fill-height"
                color="transparent"
              >
                <v-lazy
                  v-model="property.isActive"
                  :options="{
                    threshold: 0.5,
                  }"
                  class="fill-height"
                >
                  <v-row no-gutters>
                    <v-col cols="12" md="4">
                      <v-img
                        max-width="100%"
                        height="100%"
                        :src="property.picture.thumbnail"
                        :aspect-ratio="3 / 2"
                        class="rounded-xl"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="12" md="8" class="pa-2">
                      <v-row no-gutters>
                        <v-col cols="8" class="pr-2">
                          <div>
                            <div class="d-flex align-center">
                              <h6 class="text-h6">{{ property.title }}</h6>
                              <v-spacer></v-spacer>
                              <v-btn icon color="black">
                                <v-icon>mdi-eye-outline</v-icon>
                              </v-btn>
                              <v-btn icon color="black">
                                <v-icon>mdi-heart-outline</v-icon>
                              </v-btn>
                            </div>
                            <div class="text-body-2 mb-2">
                              {{ property.address.street }}<br />
                              {{
                                property.address.city +
                                "," +
                                property.address.country
                              }}
                            </div>
                            <div class="text-body-2 mb-2">
                              {{ property.capacity }}
                            </div>
                            <div>
                              <v-btn small elevation="0" color="primary" class="mr-1 mb-1"  @click="dialog = true">
                                <v-icon left>mdi-hammer</v-icon>
                                CURRENT BID | $900
                              </v-btn>
                                
                              <v-dialog
                                v-model="dialog"
                                transition="dialog-bottom-transition"
                                max-width="700"
                              >
                                <v-card>
                                  <v-toolbar
                                    flat
                                    height="100"
                                  >
                                    <v-row align="center">
                                      <v-col cols="12" md="6" offset-md="3">
                                        <h1 class="text-center font-weight-bold font-size-36">Place a Bid</h1>
                                      </v-col>
                                      <v-col cols="12" md="1" offset-md="2">
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
                                      <v-col
                                        align-self="center"
                                        cols="12"
                                        sm="9"
                                        offset-sm="1"
                                      >
                                        <v-text-field
                                          v-model="title"
                                          :rules="wordsRules"
                                          counter="25"
                                          hint="Minium of $ 5 Increment"
                                          label="Your Bid Amount"
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12"
                                        sm="1" align-self="center">
                                        <span>$</span>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col align-self="center" cols="12" sm="10" offset-sm="1">
                                        <img src="../../../assets/paid/icon8/Check.svg" class="mr-1"/>
                                        <span class="text-style-medium1">Property not Reserved - Available for Auction</span>                              
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col cols="12" sm="4" offset-sm="1">
                                        <v-row>
                                          <v-col align-self="center">
                                            <span class="text-style-medium font-weight-bold">Auction Remaining Time</span>
                                          </v-col>
                                        </v-row>
                                        <v-row>
                                          <v-col align-self="center">
                                            <img src="../../../assets/paid/icon8/Clock.svg"  class="mr-1" />
                                            <span class="text-simple">3d 23:26:32</span>
                                          </v-col>
                                        </v-row>
                                      </v-col>
                                      <v-col  cols="12" sm="5">
                                        <v-row>
                                          <v-col align-self="center">
                                            <span class="font-weight-bold text-style-medium">Number of Bids</span>
                                          </v-col>
                                        </v-row>
                                        <v-row>
                                          <v-col align-self="center" cols="12" sm="4">
                                            <img src="../../../assets/paid/icon8/Bids.svg"  class="mr-1" />
                                            <span class="text-simple text-style-medium" > 100 </span>
                                          </v-col>
                                          <v-col align-self="bottom" cols="12" sm="6">
                                            <span class="text-style-small" color="primary">View Bid History</span>
                                          </v-col>
                                        </v-row>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <v-col cols="12" md="4" offset-md="2">
                                        <v-btn block class="mt-4 green white--text" @click="dialog = false"> BID </v-btn>
                                      </v-col>
                                      <v-col cols="12" md="4">
                                        <v-btn block class="mt-4 cyan white--text" @click="dialog = false"> LEASE IT FOR $1299 </v-btn>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                  <div style="flex: 1 1 auto;"></div>
                                </v-card>
                              </v-dialog>
                              <v-btn
                                small
                                elevation="0"
                                color="secondary"
                                class="px-1 mb-1"
                                :to="{name:'PropertyDetail'}"
                              >
                                LEASE IT FOR $1000
                              </v-btn>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="4" class="pl-2">
                          <div class="text-body-2 black--text">
                            <div>TAKING POST BIDS</div>
                            <div>
                              <b>{{ property.postbids }} days</b>
                            </div>
                            <div>Ends {{ property.postBidsEndingDate }}</div>
                          </div>
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
              </v-sheet>

              <v-divider></v-divider>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mobile">
          <!-- Here it goes maps component -->
        </v-col>
      </v-row>
    </v-container>
  </div>
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
        property.picture.thumbnail = require("@/assets/property/property_200_300_" +
          property.id +
          ".png");
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
  methods: {},
};
</script>

<style scoped lang="scss">
.sized-chip {
  display: inline-block;
  width: 100px;
  text-align: center;
}

.text-style-medium{
  font-size: 16px;
}

.text-style-medium1{
  font-size: 16px;
  color: #25D848;
  font-weight: bold;
}

.text-style-small {
  font-size: 14px;
}
</style>