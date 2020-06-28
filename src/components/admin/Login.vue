<template>
  <div class="login">
    <v-card style="padding: 10px; border; background-color: rgb(255,73,112);">
      <v-card-text style="color:white; font-size:2em;">Login</v-card-text>
    </v-card>
    <v-card
      color="black"
      style="padding: 20px; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border: solid 2px rgb(255,73,112)"
    >
      <v-card-text>
        <br />
        <v-form>
          <v-text-field
            outlined
            shaped
            label="username"
            color="white"
            v-model="user"
            >User
          </v-text-field>
          <v-text-field
            outlined
            shaped
            type="password"
            label="password"
            color="white"
            v-model="password"
            >Password
          </v-text-field>
        </v-form>
        <br />
        <v-btn @click="login">login </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      showLogin: false,
      apiUrl: this.$store.state.apiUrl,
      password: "",
      user: ""
    };
  },
  methods: {
    login: function() {
      this.$http
        .post(this.apiUrl + "/login", {
          user: this.user,
          password: this.password
        })
        .then(result => {
          console.log(result.data);
          if (result.data.status == "logged in") {
            this.$store.commit({
              type: "storeJwt",
              jwt: result.data.response,
              status: result.data.status,
              user: this.user,
              database: result.data.database
            });
            this.$router.push({ path: "/welcome" });
          } else {
            window.alert("Invalid Username and Password Supplied");
          }
        })
        .catch(() => {
          console.log("Internal Servor Error");
        });
    },
    testToken: function() {
      this.$http
        .post(this.apiUrl + "/protected", {
          headers: { Authorization: `Bearer ${this.$store.state.jwt}` }
        })
        .then(response => {
          console.log(response);
          console.log(this.$store.state.jwt);
          console.log(localStorage.getItem("isAuth"));
        });
    },
    logOut: function() {
      this.$store.commit({
        type: "removeJwt",
        message: "hi"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 416px) {
  .login {
    width: 500px;
    height: 200px;
    background-color: white;
  }
  .cardBody {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}
@media screen and (max-width: 415px) {
  .login {
    width: 375px;
    height: 300px;
    background-color: white;
  }
  .cardBody {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
}
</style>
