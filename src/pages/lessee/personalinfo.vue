<template>
  <v-container class="page-wrapper">
    <v-card
      class="mx-auto rounded-xl"
      :class="$vuetify.breakpoint.xs ? 'pa-8' : 'pa-16'"
      :elevation="$vuetify.breakpoint.xs ? 0 : 1"
      :outlined="!$vuetify.breakpoint.xs"
    >
      <v-form v-model="valid">
        <div class="d-flex flex-column">
          <v-text-field
            :rules="nameRules"
            :counter="10"
            label="First name"
            v-model="info.firstname"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            :rules="nameRules"
            :counter="10"
            label="Last name"
            v-model="info.lastname"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            :rules="emailRules"
            label="Email"
            v-model="info.email"
            required
          ></v-text-field>
        </div>
        <div>
          <div class="font-weight-bold text-h8 my-2">Personal Info</div>
          <v-divider color="black"></v-divider>
        </div>
        <div class="d-flex flex-column">
          <VuePhoneNumberInput v-model="info.phone" clearable />
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
                v-model="info.birthday"
                label="Birthday date"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
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
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            label="Address1"
            v-model="info.address1"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            label="Address2"
            v-model="info.address2"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            label="City"
            v-model="info.city"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field
            label="State"
            v-model="info.state"
            required
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <v-text-field label="Zip" v-model="info.zip" required></v-text-field>
        </div>
        <v-btn block color="primary" @click="saveAllUserInfo" width="212" height="52">Save Change</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { getUser } from "../../graphql/queries";
import { updateUser } from "../../graphql/mutations";

import { API } from "aws-amplify";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import store from "../../store/store";

export default {
  name: "LessorBiddingPage",
  title: "Edit Personal Info",

  data: () => ({
    date: null,
    menu: false,
    valid: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

  }),
  components: {
    VuePhoneNumberInput,
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  computed: {
    info: function () {
      return store.getters.user_info;
    }
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    inputPhone: function () {},
    saveAllUserInfo() {
      
      console.log(this.info.phone.replace(/[(). -]/g, ""));

      const inputData = {
        address1: this.info.address1,
        address2: this.info.address2,
        city: this.info.city,
        email: this.info.email,
        firstname: this.info.firstname,
        id: store.getters.user_id,
        lastname: this.info.lastname,
        phone: this.info.phone.replace(/[(). -]/g, ""),
        postalCode: "",
        state: this.info.state,
      }

      const updateDt = API.graphql({query: updateUser, variables:{input: inputData}});
      console.log(updateDt);
    },

  },
  async created() {

    if(store.getters.user_id == "")
      return;

//    let $this = this;

    console.log(store.getters.user_id);

    const userData = await API.graphql({ query: getUser, variables:{id:store.getters.user_id} });
    var user = userData.data.getUser;

    console.log(user);

    store.commit('setUserInfo', user);
  }
};
</script>

<style scoped>
.gender {
  background-color: cyan;
}
</style>
