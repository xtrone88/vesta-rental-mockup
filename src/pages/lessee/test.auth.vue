<template>
  <amplify-authenticator>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12"> </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Test Amplify Page</h1>
        </v-col>
      </v-row>
    </v-container>
  </amplify-authenticator>
</template>

<script>
import { listPropertys } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export default {
  name: "AmplifyTestPage",

  data: () => ({
    properties: null,
  }),

  async created() {
    const properties = await API.graphql(graphqlOperation(listPropertys));
    console.log(properties);
    this.properties = properties;
  },
};
</script>
