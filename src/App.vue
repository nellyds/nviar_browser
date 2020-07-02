<template>
  <v-app>
    <NavBar />

    <v-content>
      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/navigation/NavBar.vue";
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
  mounted(){

  
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;515;700&family=Kanit:wght@100;600;900&family=Oxygen:wght@300;400;700&family=Passion+One:wght@400;700;900&display=swap");
body {
  font-family: "Oxygen";
}
</style>
