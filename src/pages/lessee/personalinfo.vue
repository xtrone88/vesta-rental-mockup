<template>
  <div>
    <v-row class="text-start">
      <v-container class="pa-4">
        
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
                :rules="emailRules"
                label="Email"
                :value="info.email"
                required
              ></v-text-field>
            </div>
            <div>
              <!--<v-divider color="black"></v-divider>-->
              <div class="font-weight-bold text-h8 my-2"> Personal Info </div>
              <v-divider color="black"></v-divider>
            </div>
            <div class="d-flex flex-column">
              <VuePhoneNumberInput
                v-model="phoneNumber"
                clearable
                @update="onUpdate"
              />
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
            <div class="d-flex flex-column mb-4">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker without buttons"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
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

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

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

    phoneNumber: null,

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
  components: {
    VuePhoneNumberInput
  },
  watch: {
    menu () {
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
