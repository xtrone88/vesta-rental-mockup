<template>
  <amplify-authenticator>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12"> </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Test Amplify Page</h1>
          <div v-if="authState === 'signedin' && user">
            <div>Hello, {{ user.attributes.email }}</div>
            <div>Phone: {{ user.attributes.phone_number }}</div>
          </div>
          <amplify-sign-out></amplify-sign-out>
        </v-col>
      </v-row>
    </v-container>
  </amplify-authenticator>
</template>

<script>
import { listPropertys } from "../../graphql/queries";
import { API } from "aws-amplify";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "AmplifyTestPage",

  data: () => ({
    properties: null,
    user: undefined,
    authState: undefined,
    unsubscribeAuth: undefined,
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
