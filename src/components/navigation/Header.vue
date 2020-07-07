<template>
<div class="headerSection">
  <div @click="$vuetify.goTo('#intro')">
    <v-row align="center" justify="center" v-if="$vuetify.breakpoint.smAndDown" >
    <h1>n-viar</h1>
  <LogoAnimated />
  </v-row>
    </div>
  <div class="header">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-row
          align="center"
          justify="center"
          v-if="$vuetify.breakpoint.smAndUp"
          @click="$vuetify.goTo('#intro')"
        >
          <LogoAnimated   />
          <div class="reveal-holder headerParagraph">
            <div  data-aos="reveal-right" class="reveal-block-black"></div>
            <p class="headerTitle">n-viar</p>
            <p class="headerCopy">{{ intro }}</p>
          </div>
        </v-row>
        <p class="headerCopy" v-if="$vuetify.breakpoint.smAndDown">
          {{ intro }}
        </p>
        <Admin class="items" />
        <div>
          <v-btn
            class="items"
            @click="$router.push({ path: '/requests' })"
            raised
            color="rgba(255,255,255,.8)"
            :width="$vuetify.breakpoint.smAndDown ? 200 : 450"
            >Request</v-btn
          >
        </div>
        <div>
          <v-btn
            class="items"
            @click="$router.push({ path: '/offers/' })"
            raised
            color="rgba(255,255,255,.8)"

            :width="$vuetify.breakpoint.smAndDown ? 200 : 450"
            >Borrow</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
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
      intro: "connecting your kitchen to your community",
      
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
    background-color: rgba(0,0,0,.5);
    border: solid 2px white;
    
  }
  .headerSection{
    height: 100vh;
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
    font-weight: bold;
    font-size: 2.1em;
    text-align: left;
    margin-left: 15px;
  }
  .headerTitle{
    text-align: left;
    font-size: 3.1em;
    color: white;
    font-weight: bolder;
        margin-left: 15px;
  }
  .headerParagraph{
    background-color: rgba(0,0,0,.5);
    padding: 15px;
  }
}
</style>
