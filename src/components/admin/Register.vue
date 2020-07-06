<template>
  <div>
    <v-form @submit.prevent>
      <v-text-field v-model="name" label="Your name" />
      <v-text-field v-model="lastName" label="Your surname" />
      <v-text-field v-model="email" label="Email address" />
      <v-text-field v-model="password" label="password" />
      <v-btn @click="submitRegistration" color="rgb(0,169,159)">Submit</v-btn>
    </v-form>
    <p @click="showLogin">Login</p>
    <v-btn @click="showLogin = !showLogin" text>Whatsdfs?</v-btn>
    <transition name="slideLeft">
      <v-overlay
        :value="showLogin"
        v-if="showLogin"
        opacity="1"
        color="rgb(0,169,159)"
      >
        <Login />
        <v-btn @click="showLogin = false">close</v-btn>
      </v-overlay>
    </transition>
    <p>sthis isn't showing up</p>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="rgba(0,169,159,1)"
      dark
      dismissible
    >
    </v-alert>
  </div>
</template>
<script>
import Login from "@/components/admin/Login.vue";
export default {
  name: "Register",
  components: {
    Login
  },
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
      result: "",
      alert: false,
      showLogin: false
    };
  },
  methods: {
    submitRegistration: function() {
      this.$http
        .post(this.apiUrl + "/user/add", {
          firstName: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
          this.alert = true;
          this.result = response.data;
        });
    },
    submitConfirmation: function() {
      this.$http.post(this.apiUrl + "/user/confirmation");
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped></style>
