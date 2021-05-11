<style lang="scss" scoped>
.title {
  height: 10px;
}
.login-title {
  text-align: center;
  font-size: 50px;
  margin-top: 150px;
}
.login-panel {
  margin-top: 79px;
  margin-bottom: 113px;
  border-radius: 36px;
  padding: 138px 36px 88px 36px;
}
.login-buttons {
  min-width: 300px;
  max-width: 550px;
}
.login-button {
  &.v-size--default {
    padding: 17px 21px;
    margin-bottom: 30px;
  }
  &.v-btn--outlined {
    border: thin solid #707070;
  }
  i.v-icon--left {
    position: absolute;
    left: 0px;
    font-size: 24px;
  }
}
.bar-text {
  border-top: 1px solid rgba(112, 112, 112, 0.3);
  margin-top: 55px;
  margin-bottom: 25px;
  text-align: center;
  > span {
    display: inline-block;
    padding: 0px 10px;
    font-size: 16px;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background-color: white;
  }
}

</style>

<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col md="6">
        <div>
          <div class="title">
            <h1 class="login-title">Log In</h1>
          </div>
          <amplify-authenticator>
            <div v-if="authState === 'signedin' && user">
              <div>You are already logged in.</div>
            </div>
            <amplify-sign-out button-text="Sign Out"></amplify-sign-out>
          </amplify-authenticator>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/login/intro.png" height="100%"></v-img>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { listPropertys } from "../../../graphql/queries";
import { API } from "aws-amplify";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "Login2",

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