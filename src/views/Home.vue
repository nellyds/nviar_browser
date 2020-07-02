<template>
  <div class="home">
    <v-row>
      <div v-if="$vuetify.breakpoint.smAndUp" style="width: 33%;" />
      <v-col md="4">
        <LogoAnimated />
        <v-btn @click="showRegister = !showRegister" text>What?</v-btn>
        <transition name="slide">
          <v-overlay
            :value="showRegister"
            v-if="showRegister"
            opacity=1
            color="rgb(0,169,159)"
          >
            <Register v-if="showRegister" />
            <v-btn @click="showRegister = false">close</v-btn>
          </v-overlay>
        </transition>
        <v-btn @click="showLogin = !showLogin" text>Whatsdfs?</v-btn>
        <transition name="slide">
          <v-overlay
          :value="showLogin"
          v-if="showLogin"
          opacity=1
          color="rgb(0,169,159)">
          <Login />
          <v-btn @click="showLogin = false">close</v-btn>
          </v-overlay>
        </transition>
        <p>{{jwt}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LogoAnimated from "@/components/navigation/LogoAnimated.vue";
import Register from "@/components/admin/Register.vue";
import Login from "@/components/admin/Login.vue";
export default {
  name: "Home",
  components: {
    Register,
    Login,
    LogoAnimated
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
    };
  },
  computed: {
    jwt: function(){
      return this.$store.state.jwt
    }

  }
};
</script>
<style scoped>
.slide-enter {
  transform: translateY(-1500px);
}
.slide-enter-to {
  transform: translateY(0px);
}
.slide-enter-active {
  transition: transform 900ms ease-in-out;
}
.slide-leave {
  transform: translateY(0px);
}
.slide-leave-to {
  transform: translateY(-1500px);
}
.slide-leave-active {
  transition: transform 600ms ease-in-out;
}
</style>
