<style lang="scss" scoped>

.login-title {
  text-align: center;
  font-size: 50px;
  margin-top: 50px;
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
          <div class="pt-12 pb-12">
            <h1 class="login-title">Log In</h1>
          </div>
          <div class="text-center">
            <amplify-sign-in>
              <div v-if="authState === 'signedin' && user">
                <div class="pa-12">
                  <center><h2>{{user.username}} is successfuly logged in.</h2></center>
                </div>
              </div>
            </amplify-sign-in>
          </div>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/login/intro.png" height="100%"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import store from '@/store/store';

export default {
  name: "SignIn",

  data: () => ({
    properties: null,
    user: undefined,
    authState: undefined,
    unsubscribeAuth: undefined,
    email: '',
    password: '',
  }),

  async created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;

      store.commit('setUserLogInfo', this.authState);
    });
  },
};
</script>
