<style lang="scss" scoped>
.login-title {
  text-align: center;
  font-size: 50px;
  margin-top: 131px;
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
        <div class="mx-16">
          <h1 class="login-title">Log In</h1>
          <v-card class="login-panel" elevation="1" outlined>
            <div class="login-buttons mx-auto">
              <v-btn class="login-button" color="primary" block elevation="1">
                <v-icon left dark>mdi-phone</v-icon>
                SIGN IN WITH PHONE
              </v-btn>

              <v-btn class="login-button" block outlined>
                <v-icon left dark>mdi-email</v-icon>
                SIGN IN WITH EMAIL
              </v-btn>

              <div class="bar-text">
                <span>or</span>
              </div>

              <v-btn class="login-button" color="error" block elevation="1">
                <v-icon left dark>mdi-google</v-icon>
                SIGN IN WITH GOOGLE
              </v-btn>

              <v-btn class="login-button" color="secondary" block elevation="1">
                <v-icon left dark>mdi-facebook</v-icon>
                SIGN IN WITH FACEBOOK
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col md="6" class="hidden-sm-and-down">
        <v-img src="@/assets/login/intro.png" height="100%"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",

  data: () => ({}),
};
</script>
