<template>
  <div>
    <v-card>
      <v-card-title>
        <p @click="overlay = true">{{ listOffer.item }}</p>
      </v-card-title>
      <v-card-text>
        <p>{{ listOffer.content }}</p>
      </v-card-text>
    </v-card>
    <transition name="slide">
      <v-overlay :value="overlay" v-if="overlay" color="rgb(0,169,159)">
        <p @click="overlay = false">{{ listOffer }}</p>
      </v-overlay>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    listOffer: {
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
