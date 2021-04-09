<template>
  <div>
    <v-container>
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
                outlined
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
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
                    clearable
                    outlined
                    hide-details="auto"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="dates" no-title @input="menu1 = false" />
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <!-- Here it goes property list -->

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
import { sampleProperties } from '../../data/properties'

export default {
  name: 'PropertiesPage',
  title: 'Properties',
  data: () => ({
    properties: sampleProperties,
    popularLocation: 'New York',
  }),
  computed: {
  },
  methods: {

  }
}
</script>
<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .compacted div:not(:first-child) {
    padding-top: 0px;
  }
</style>