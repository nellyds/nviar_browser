<template>
    <v-content class="navBar">
        <v-navigation-drawer
          v-model="drawer"
          color="rgba(0,169,159,1)"
          :right="right"
          permanent
          dark

        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title>N-viar</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>
  
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

    </v-content>
</template>
<script>
export default {
    data(){
        return{
    items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
        }
    }
}
</script>
<style scoped>
.navBar{
    border: solid 2px black;
}
</style>