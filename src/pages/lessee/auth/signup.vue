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
      <v-col md="6" class="text-center">
        <div>
          <div class="title pa-16">
            <h1 class="login-title">Registration</h1>
          </div>
          <amplify-sign-up
            slot="sign-up"
            username-alias="email"
            :form-fields.prop="formFields"
          >
            <div v-if="authState === 'signedup' && user">
              <div>New Account successfuly created.</div>
            </div>
          </amplify-sign-up>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/register/intro.png" style="height: 100%"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "SignUp",

  data: () => ({
    properties: null,
    user: undefined,
    authState: undefined,
    unsubscribeAuth: undefined,
    formFields: [
      {
        type: "name",
        label: "Username",
        placeholder: "Username",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "Password.",
        required: true,
      },
      {
        type: "email",
        label: "Email",
        placeholder: "Email.",
        required: false,
      },
      {
        type: "date",
        label: "Date of Birth",
        placeholder: "Date of Birth",
        required: false,
      },
      {
        type: "phone_number",
        label: "Phone Number",
        placeholder: "Enter your phone number.",
        required: false,
      },
    ],
  }),

  async created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
};
</script>
