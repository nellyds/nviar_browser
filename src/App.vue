<template>
  <v-app>
    <NavBar />

    <v-content>
      <router-view> </router-view>
      <div v-for="(thing,i) in things" v-bind:key="i">
        <p>{{thing}}</p>
        <p>{{user_id}}</p>
      </div> 
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/navigation/NavBar.vue";
 import  {db}  from "./firebase";
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    things: [],
    chat: ''
  }),
  mounted(){
    // this.$firestore.transactionChats.
  },
  firestore(){
    return {
      things: db.collection('transactionChats')
    }
  },
  computed: {
    user_id: function(){
      return this.$store.state.user_id;
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
