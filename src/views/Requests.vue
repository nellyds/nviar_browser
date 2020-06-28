<template>
  <v-content>
    <RequestSubmit />
    <RequestFetchByLocation />
    <RequestFetchByCoordinates />
    <p>Request page</p>
  </v-content>
</template>
<script>
import RequestFetchByLocation from "@/components/RequestList/RequestFetchByLocation.vue";
import RequestFetchByCoordinates from "@/components/RequestList/RequestFetchByCoordinates.vue";
import RequestSubmit from "@/components/RequestList/RequestSubmit.vue";
export default {
  components: {
    RequestFetchByLocation,
    RequestFetchByCoordinates,
    RequestSubmit
  },
  data() {
    return {
      requests: []
    };
  }
};
</script>
<style scoped></style>
