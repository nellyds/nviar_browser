<template>
  <div class="home">
      <LogoAnimated />
      <v-btn @click="showRegister = !showRegister" text>What?</v-btn>
      <transition name="slide">
        <v-overlay
        :value="showRegister"
        v-if="showRegister"
        color="rgb(0,169,159)">
          <Register v-if="showRegister"/>
          <v-btn  @click="showRegister =false" >close</v-btn>

        </v-overlay>
      </transition>

  </div>
</template>

<script>
import LogoAnimated from "@/components/navigation/LogoAnimated.vue";
import Register from "@/components/admin/Register.vue";
export default {
  name: "Home",
  components: {
    Register,
    LogoAnimated
  },
  data(){
    return{
      showRegister:false
    }
  }
};
</script>
<style scoped>
.slide-enter{
  transform: translateY(-1500px)

}
.slide-enter-to{
  transform: translateY(0px)

}
.slide-enter-active{
  transition: transform 900ms ease-in-out;
}
.slide-leave{
  transform: translateY(0px);
}
.slide-leave-to{
  transform: translateY(-1500px);
}
.slide-leave-active{
  transition: transform 600ms ease-in-out;
}
</style>
