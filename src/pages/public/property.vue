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
                            <div>
                              <v-btn small elevation="0" color="primary" class="mr-1 mb-1">
                                <v-icon left>mdi-hammer</v-icon>
                                CURRENT BID | $900
                              </v-btn>
                              <v-btn small elevation="0" color="secondary" class="mb-1">
                                <v-icon left>mdi-hammer</v-icon>
                                LEASE IT FOR $1000
                              </v-btn>
                            </div>
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
import { sampleProperties } from '../../data/properties';

export default {
  name: 'PropertiesPage',
  title: 'Properties',
  data: () => ({
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