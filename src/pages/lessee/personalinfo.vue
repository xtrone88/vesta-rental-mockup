<template>
  <div>
    <v-row class="text-start">
      <v-container class="pa-4">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-4">Personal Info</h1>
        </v-col>
        <v-card class="mx-auto rounded-xl" :class="$vuetify.breakpoint.xs?'pa-8':'pa-16'"
          :elevation="$vuetify.breakpoint.xs?0:2"
        >
          <v-form v-model="valid">
            <div class="d-flex flex-column">
              <v-text-field
                :rules="nameRules"
                :counter="10"
                label="First name"
                :value="info.firstname"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                :rules="nameRules"
                :counter="10"
                label="Last name"
                :value="info.lastname"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                :rules="genderRules"
                :counter="10"
                label="Gender"
                :value="info.gender"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                :rules="phoneRules"
                :counter="15"
                label="Phone"
                :value="info.phone"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                :rules="emailRules"
                label="Email"
                :value="info.email"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
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
                    readonly
                    v-model="date"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-show="menu"
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                label="Zip"
                :value="info.zip"
                required
              ></v-text-field>
            </div>
            <v-btn color="primary" width="212" height="52">Save</v-btn>
          </v-form>
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
    date: "1998-10-15",
    menu: false,
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],

    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    gender: '',
    genderRules: [
      v => !!v || 'Gender is required',
      v => v.length <= 10 || 'Gender must be valid',
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => v.length <= 15 || 'Phone must be valid',
    ],
    info: {
      firstname: "John",
      lastname: "Smith",
      gender: "Male",
      email: "johnsmith@mail.com",
      phone: "1 202 555 0191",
      birthdate: "1990-12-10",
      zip: "91752",
    }
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
