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
          <amplify-authenticator>
          <amplify-sign-up
            slot="sign-up"
            username-alias="email"
            :form-fields.prop="formFields"
          ></amplify-sign-up>
          </amplify-authenticator>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/register/intro.png" style="height:100%"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { listPropertys } from "../../../graphql/queries";
import { API } from "aws-amplify";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "SignUp2",

  data: () => ({
    properties: null,
    user: undefined,
    authState: undefined,
    unsubscribeAuth: undefined,
    formFields: [
      {
        type: 'name',
        label: 'Username',
        placeholder: 'Username',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Password.',
        required: true,
      },
      {
        type: 'email',
        label: 'Email',
        placeholder: 'Email.',
        required: false,
      },
      {
        type: 'birthdate',
        label: 'Date of Birth',
        placeholder: 'Enter your date of birth.',
        required: true,
      },
      {
        type: 'phone_number',
        label: 'Phone Number',
        placeholder: 'Enter your phone number.',
        required: true,
      },
    ]
  }),

  async created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
      console.log(JSON.parse(JSON.stringify(this.user)));
    });
    const allProperties = await API.graphql({ query: listPropertys });
    console.log(allProperties);
    console.log(JSON.parse(JSON.stringify(allProperties)));
    this.properties = allProperties;
  },
};
</script>
