<template>
  <div>
    <v-row class="text-start">
      <v-container>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-4">Personal Info</h1>
        </v-col>
        <v-card class="mx-auto pa-9">
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="First Name"
              value="John"
              suffix="Edit"
            ></v-text-field>
          </v-col>
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="Last Name"
              value="Smith"
              suffix="Edit"
            ></v-text-field>
          </v-col>
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="Gender"
              value="Male"
              suffix="Edit"
            ></v-text-field>
          </v-col>
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="Email"
              value="johnsmith@mail.com"
              suffix="Edit"
            ></v-text-field>
          </v-col>
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="Phone"
              value="1 202 555 0191"
              suffix="Edit"
            ></v-text-field>
          </v-col>
          <v-col class="mb-3" cols="12">
            <template>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    suffix="Edit"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </template>
          </v-col>
          <v-col class="mb-3" cols="12">
            <v-text-field
              label="Zip"
              value="91752"
              suffix="Edit"
            ></v-text-field>
          </v-col>
        </v-card>
      </v-container>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "LessorBiddingPage",
  title: "Bidding",

  data: () => ({
    date: null,
    menu: false,
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  computed: {
    
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
