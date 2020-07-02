<template>
  <div>
    <v-card>
      <v-card-title>
        <p @click="overlay = true">{{listRequest.name}} would like {{ listRequest.item }}</p>
      </v-card-title>
      <v-card-text>
        <p>{{ listRequest.content }}</p>
      </v-card-text>
    </v-card>
    <transition name="slide">
      <v-overlay :value="overlay" v-if="overlay">
        <p @click="overlay = false">{{ listRequest }}</p>
      </v-overlay>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    listRequest: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      overlay: false
    };
  }
};
</script>
<style scoped>
.slide-enter {
  transform: translateY(-1500px);
}
.slide-enter-to {
  transform: translateY(0px);
}
.slide-enter-active {
  transition: transform 900ms ease-in-out;
}
.slide-leave {
  transform: translateY(0px);
}
.slide-leave-to {
  transform: translateY(-1500px);
}
.slide-leave-active {
  transition: transform 600ms ease-in-out;
}
</style>
