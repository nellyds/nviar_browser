<template>
  <v-content>
    <OfferSubmit />
    <OfferFetchByLocation />
    <OfferFetchByCoordinates />
  </v-content>
</template>
<script>
import OfferFetchByLocation from "@/components/OfferList/OfferFetchByLocation.vue";
import OfferFetchByCoordinates from "@/components/OfferList/OfferFetchByCoordinates.vue";
import OfferSubmit from "@/components/OfferList/OfferSubmit.vue";
export default {
  components: {
    OfferFetchByLocation,
    OfferFetchByCoordinates,
    OfferSubmit
  },
  data() {
    return {
      offers: []
    };
  }
};
</script>
<style scoped></style>
