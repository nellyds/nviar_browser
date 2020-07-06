<template>
  <v-app>
    <NavBar />

    <v-content>
      <transition :name="transitionName">
        <router-view> </router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/navigation/NavBar.vue";
import { db } from "./firebase";
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    things: [],
    chat: "",
    transitionName: null
  }),
  mounted() {
    // this.$firestore.transactionChats.
  },
  firestore() {
    return {
      things: db.collection("transactionChats")
    };
  },
  computed: {
    user_id: function() {
      return this.$store.state.user_id;
    }
  },
  watch: {
    $route(to) {
      if (to.name === "Offers") {
        this.transitionName = "slideLeft";
      }
      if (to.name === "Requests") {
        this.transitionName = "slideUp";
      }
      if (to.name === "About") {
        this.transitionName = "slideDown";
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;515;700&family=Kanit:wght@100;600;900&family=Oxygen:wght@300;400;700&family=Passion+One:wght@400;700;900&display=swap");
body {
  font-family: "Oxygen";
}
</style>
