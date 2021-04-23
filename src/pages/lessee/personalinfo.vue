<template>
  <div>
    <v-row class="text-start">
      <v-container class="pa-4">
        <!-- <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-4">Personal Info</h1>
        </v-col> -->
        <v-card class="mx-auto rounded-xl" :class="$vuetify.breakpoint.xs?'pa-8':'pa-16'"
          :elevation="$vuetify.breakpoint.xs?0:2"
        >
          <div justify="space-around" align="center" class="mb-4">
            <v-avatar width="150px" height="150px">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
          </div>          
          <v-form v-model="valid">
            <div class="d-flex flex-column">
                <v-divider class="mb-2"></v-divider>
                <center>User Info</center>
                <v-divider class="mt-2"></v-divider>
            </div>
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
            <div class="d-flex flex-column mb-4">
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
                    label="Date of Birth"
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
                <v-divider class="mb-2"></v-divider>
                <center>Personal Info</center>
                <v-divider class="mt-2"></v-divider>
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
              <vue-tel-input-vuetify></vue-tel-input-vuetify>
            </div>
            <div class="d-flex flex-column mb-4">
              <v-text-field 
                v-on:click="changeContent"
                :value = "gender"
                :prepend-inner-icon="genderIcon"
                readonly
              >
              </v-text-field>
            </div>
            <div class="d-flex flex-column">
                <v-divider class="mb-2"></v-divider>
                <center>Other Info</center>
                <v-divider class="mt-2"></v-divider>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                label="Address"
                :value="info.address"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                label="City"
                :value="info.city"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                label="State"
                :value="info.state"
                required
              ></v-text-field>
            </div>
            <div class="d-flex flex-column">
              <v-text-field
                label="Zip"
                :value="info.zip"
                required
              ></v-text-field>
            </div>
            <v-btn block color="primary" width="212" height="52">Save Change</v-btn>
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
    gender: 'Male',
    genderIcon: 'mdi-human-male',
    info: {
      firstname: "John",
      lastname: "Smith",
      gender: "Male",
      email: "johnsmith@mail.com",
      phone: "1 202 555 0191",
      birthdate: "1990-12-10",
      address: "222 Hallec St",
      city: "San Francisco",
      state: "California",
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
    changeContent: function() {
      if(this.gender == "Male"){
        this.gender = "Female";
        this.genderIcon = "mdi-human-female";
      }
      else {
        this.gender = "Male";
        this.genderIcon = "mdi-human-male";
      }
    },
  },
};
</script>

<style scoped>

.gender{
  background-color: cyan;
}

</style>
