<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-row>
            <v-col class="header">
              <div class="d-flex align-baseline">
                <h3 class="mr-1">Popular Destination</h3>
                <span>{{popularLocation}}</span>
              </div>
              <v-btn
                v-if="$vuetify.breakpoint.mobile"
                icon
                color="black"
                >
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row :class="{ compacted: $vuetify.breakpoint.mobile }">
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
                <v-date-picker v-model="date" no-title @input="datePickerMenu = false" />
              </v-menu>
            </v-col>
          </v-row>
          <v-row v-if="!$vuetify.breakpoint.mobile">
            <v-col>
              <v-chip-group
                mandatory
                active-class="primary--text">
                <v-chip
                  v-for="type in propertyTypes"
                  :key="type">
                  {{type}}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-row v-if="properties.length" style="{height: '100%'}">
            <v-col cols="12" v-for="property in properties" :key="property.id">
              <v-sheet min-height="{ $vuetify.breakpoint.mobile ? 400 : 20 }"
                class="fill-height"
                color="transparent">
                <v-lazy v-model="property.isActive" :options="{
                    threshold: .5
                  }"
                  class="fill-height">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-img
                        height="200"
                        src="https://picsum.photos/id/11/500/300"
                        class="rounded-image">
                      </v-img>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-row>
                        <v-col cols="8">
                          <div>
                            <div class="d-flex align-center">
                              <h3>{{property.title}}</h3>
                              <v-spacer></v-spacer>
                              <v-btn icon color="black">
                                <v-icon>mdi-eye-outline</v-icon>
                              </v-btn>
                              <v-btn icon color="black">
                                <v-icon>mdi-heart-outline</v-icon>
                              </v-btn>
                            </div>
                            <p>
                              {{property.address.street}}<br>
                              {{property.address.city + ',' + property.address.country}}
                            </p>
                            <p>
                              {{property.capacity}}
                            </p>
                            <template>
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
                              <v-btn small elevation="0" color="secondary" class="mb-1">
                                <v-icon left>mdi-hammer</v-icon>
                                LEASE IT FOR $1000
                              </v-btn>
                            </template>
                          </div>
                        </v-col>
                        <v-col cols="4" class="d-flex flex-column justify-space-between">
                          <div class="compacted">
                            <p>TAKING POST BIDS</p>
                            <p>{{property.postbids}} days</p>
                            <p>Ends {{property.postBidsEndingDate}}</p>
                          </div>
                          <div class="compacted">
                            <p>Lease Start</p>
                            <p>Starts {{property.leaseStartDate}}</p>
                            <p>Lease End</p>
                            <p>Ends {{property.leaseEndDate}}</p>
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-lazy>
              </v-sheet>
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
import { sampleProperties } from '../../../data/properties';

export default {
  name: 'PropertiesPage',
  title: 'Properties',
  data: () => ({
    dialog: false,
    date: '',
    datePickerMenu: false,
    popularLocation: 'New York',
  }),
  computed: {
    dateRangeText() {
      return '';
    },
    properties() {
      return sampleProperties.map((property) => {
        let details = [];
        details.push(this.stringHelpers.pluralize(property.accommodates, 'guest', 'guests'));
        details.push(this.stringHelpers.pluralize(property.bedrooms, 'bedroom', 'bedrooms'));
        details.push(this.stringHelpers.pluralize(property.bathrooms, 'bathroom', 'bathrooms'));
        return {
          ...property,
          capacity: details.join('·')
        }
      });
    },
    propertyTypes() {
      return [
        'All',
        'Apartment',
        'House',
        'More'
      ]
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

  .compacted {
    & > div:not(:first-child) {
      padding-top: 0px;
    }
    p {
      margin-bottom: 0;
    }
  }

  .rounded-image {
    border-radius: 20px;
  }
</style>