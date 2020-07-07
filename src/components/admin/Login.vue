<template>
  <div class="login">

        <v-form>
          <v-text-field
            outlined
            label="email"
            color="white"
            v-model="email"
            >User
          </v-text-field>
          <v-text-field
            outlined
            type="password"
            label="password"
            color="white"
            v-model="password"
            >Password
          </v-text-field>
        </v-form>
        <v-btn @click="login">login </v-btn>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      showLogin: false,
      password: "",
      email: ""
    };
  },
  methods: {
    login: function() {
      this.$http
        .post(this.apiUrl + "/auth", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          console.log(result.data.response);
          if (result.data.response.email != null) {
            this.$store.commit({
              type: "storeJwt",
              jwt: result.data.response.jwt,
              status: result.data.response.status,
              user_id: result.data.response.user_id
            });
            // this.$router.push({ path: "/welcome" });
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
        .post(
          this.apiUrl + "/tokenTest",
          { doesThisMatter: "I hope not" },
          { headers: { Authorization: `Bearer ${this.jwt}` } }
        )
        .then(response => {
          console.log(response);
          console.log(this.$store.state.jwt);
        })
        .catch(() => {
          window.alert("something went wrong");
        });
    },
    logOut: function() {
      this.$store.commit({
        type: "removeJwt",
        message: "hi"
      });
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    },
    jwt: function() {
      return this.$store.state.jwt;
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 416px) {
  .login {
    width: 500px;
    height: 200px;
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
  }
  .cardBody {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
}
</style>
