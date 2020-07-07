<template>
  <v-content class="navBar">
    <v-app-bar app clipped-left color="rgb(0,169,159)">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <h2 style="color: white; ">n-viar</h2>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="rgb(0,169,159)">
      <v-list dense class="rgb(0,169,159)">
        <v-list-item>
          <router-link style="color: white;" to="/requests"
            >Requests</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link style="color: white;" to="/offers">Offers</router-link>
        </v-list-item>
        <v-list-item>
          <router-link style="color: white;" to="/listings"
            >Listing</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link style="color: white;" to="/about">About</router-link>
        </v-list-item>
        <v-list-item>
          <router-link style="color: white;" to="/"
            >Login / Register</router-link
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Your Lists" },
        { title: "Recipes" },
        { title: "Nviars" },
        { title: "About" }
      ],
      drawer: true,
      clipped: false
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
  font-weight: bolder;
}
.a:visited {
  text-decoration: none;
  color: white;
  font-weight: bolder;
}
</style>
