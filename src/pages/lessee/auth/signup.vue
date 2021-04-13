<style lang="scss" scoped>
.signup-title {
  text-align: center;
  font-size: 50px;
  margin-top: 49px;
}
.signup-panel {
  margin-top: 69px;
  margin-bottom: 65px;
  border-radius: 36px;
  padding: 36px;
}
</style>

<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col md="6">
        <div class="mx-16">
          <h1 class="signup-title">Registration</h1>
          <v-card class="signup-panel" elevation="1" outlined>
            <v-form v-model="valid">
              <div class="d-flex flex-column">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                  <vue-tel-input-vuetify></vue-tel-input-vuetify>
              </div>
              <div class="d-flex flex-column">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                <v-text-field
                  label="Date of Birth"
                  required
                ></v-text-field>
              </div>
              <div class="d-flex flex-column">
                <v-text-field
                  label="Zip"
                  required
                ></v-text-field>
              </div>
              <v-btn color="primary" width="212" height="52">REGISTER</v-btn>
            </v-form>
          </v-card>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/register/intro.png" style="height:100%"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignupPage",

  data: () => ({
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
  }),
};
</script>
