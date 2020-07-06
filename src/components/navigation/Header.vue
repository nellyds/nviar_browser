<template>
  <div class="header">
    <v-row align="center" justify="center">
      <v-col v-if="$vuetify.breakpoint.smAndUp" align="center" justify="center">
        <LogoAnimated />
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
          <p class="headerCopy">{{ intro }}</p>
        </div>
      </v-col>
      <v-col align="center" justify="center">
        <p class="headerCopy" v-if="$vuetify.breakpoint.smAndDown">
          {{ intro }}
        </p>
        <Admin class="items" />
        <div>
          <v-btn
            class="items"
            @click="$router.push({ path: '/requests' })"
            raised
            outlined
            color="white"
            :block="$vuetify.breakpoint.smAndDown ? true : false"
            >Request</v-btn
          >
        </div>
        <div>
          <v-btn
            class="items"
            @click="$router.push({ path: '/offers/' })"
            raised
            outlined
            color="white"
            :block="$vuetify.breakpoint.smAndDown ? true : false"
            >Borrow</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import LogoAnimated from "@/components/navigation/LogoAnimated.vue";
import Admin from "@/components/admin/admin.vue";
export default {
  components: {
    LogoAnimated,
    Admin
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
      intro: "connecting your kitchen to your community"
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .items {
    margin: 10px;
  }
  .header {
    background-image: url("~@/assets/photos/mobileHead.jpg");
    background-size: 100%;
    height: 100vw;
  }
  .headerCopy {
    color: white;
    font-weight: bolder;
    font-size: 1.3em;
  }
}
@media screen and (min-width: 416px) {
  .items {
    margin: 10px;
  }
  .header {
    background-image: url("~@/assets/photos/fullFeader.jpg");
    background-size: 100%;
    height: 100vh;
  }
  .headerCopy {
    color: white;
    color: white;
    font-weight: bolder;
    font-size: 2.1em;
  }
}
</style>
