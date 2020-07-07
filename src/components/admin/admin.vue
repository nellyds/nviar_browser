<template>
  <div>
    <v-btn
      raised
      outlined
      color="white"
            :width="$vuetify.breakpoint.smAndDown ? 200 : 450"
      @click="showRegister = !showRegister"
      >Register/Login</v-btn
    >
    <transition name="slideUp">
      <v-overlay
        :value="showRegister"
        v-if="showRegister"
        opacity="1"
        color="rgb(0,169,159)"
      ><div style="width:100%;">
        <Register />
        </div>
        <v-btn @click="showRegister = false">close</v-btn>
      </v-overlay>
    </transition>
  </div>
</template>
<script>
import Register from "@/components/admin/Register.vue";
export default {
  components: {
    Register
  },
  data() {
    return {
      showRegister: false
    };
  }
};
</script>
<style scoped></style>
