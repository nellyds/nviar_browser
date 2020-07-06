<template>
  <v-content>
    <OfferSubmit />
    <OfferFetchByCoordinates />
  </v-content>
</template>
<script>
import OfferFetchByCoordinates from "@/components/OfferList/OfferFetchByCoordinates.vue";
import OfferSubmit from "@/components/OfferList/OfferSubmit.vue";
export default {
  components: {
    OfferFetchByCoordinates,
    OfferSubmit
  },
  data() {
    return {
      offers: []
    };
  },
  computed: {
    loggedIn: function() {
      return this.$store.state.jwt != null ? true : false;
    }
  }
};
</script>
<style scoped></style>
