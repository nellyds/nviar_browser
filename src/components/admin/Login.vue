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
            label="email"
            color="white"
            v-model="email"
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
        <v-btn @click="testToken">Test</v-btn>
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
              user_id: result.data.response.user_id,
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
        .post(this.apiUrl + "/tokenTest", 
        {doesThisMatter: "I hope not"},
         { headers: { Authorization: `Bearer ${this.jwt}` }}
        )
        .then(response => {
          console.log(response);
          console.log(this.$store.state.jwt);
          console.log(localStorage.getItem("isAuth"));
        })
        .catch(() =>{
            window.alert('something went wrong');
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
    apiUrl: function(){
      return this.$store.state.apiUrl;
    },
    jwt: function(){
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
