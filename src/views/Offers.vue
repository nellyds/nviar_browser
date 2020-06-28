<template>
  <v-content>
    <OfferFetchByLocation />
    <OfferFetchByCoordinates />
  </v-content>
</template>
<script>
import OfferFetchByLocation from "@/components/OfferList/OfferFetchByLocation.vue";
import OfferFetchByCoordinates from "@/components/OfferList/OfferFetchByCoordinates.vue";

export default {
  components: {
    OfferFetchByLocation,
    OfferFetchByCoordinates
  },
  data() {
    return {
      offers: []
    };
  }
};
</script>
<style scoped></style>
