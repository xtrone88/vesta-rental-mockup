<style lang="scss" scoped>
.login-title {
  text-align: center;
  font-size: 50px;
}
.login-panel {
  min-height:100vh;
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
        <div class="login-panel d-flex flex-column align-center justify-center">
          <h1 class="login-title text-center">Log In</h1>
          <amplify-authenticator>
            <div v-if="authState === 'signedin' && user">
              <div class="pa-12">
                <h2 class="text-center">{{ user.username }}  is successfuly logged in.</h2>
              </div>
            </div>
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
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import store from '@/store/store';

export default {
  name: "SignIn",

  data: () => ({
    properties: null,
    user: null,
    authState: null,
    unsubscribeAuth: null,
    email: '',
    password: '',
    catchUser: null,
  }),

  async created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      if (!authData || authState != "signedin") {
        return;
      }
      this.authState = authState;
      this.user = authData;

      let userAttrs = JSON.parse(authData.storage[authData.userDataKey]);
      let id = '';
      userAttrs.UserAttributes.map((item) => {
        if (item.Name == "sub") {
          id = item.Value;
        }
      });
      store.commit('setUserLogInfo', {id, state:true});
    });
  },

  mounted() {
    let amplifyShadow = document.querySelector("amplify-authenticator").shadowRoot;
    let style = document.createElement('style');
    style.textContent = `
      .auth-container {
        min-height: auto !important;
      }
    `;
    amplifyShadow.appendChild(style);
  }
};
</script>
