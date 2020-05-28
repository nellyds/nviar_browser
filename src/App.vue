<template>
  <v-app>
    <v-row cols="16">
    <v-col cols="2" md="2">
    <!-- <NavBar /> -->
    </v-col>
    <v-col>
  <router-view>
  </router-view>
    </v-col>
    </v-row>
  </v-app>
</template>

<script>

// import NavBar from "@/components/navigation/NavBar.vue";

export default {
  name: "App",

  components: {
    // NavBar
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;515;700&family=Kanit:wght@100;600;900&family=Oxygen:wght@300;400;700&family=Passion+One:wght@400;700;900&display=swap');
body{
  font-family: "Oxygen";
}
</style>
