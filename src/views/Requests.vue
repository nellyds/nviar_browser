<template>
  <v-content>
    <RequestSubmit />
    <RequestFetchByCoordinates />
  </v-content>
</template>
<script>
import RequestFetchByCoordinates from "@/components/RequestList/RequestFetchByCoordinates.vue";
import RequestSubmit from "@/components/RequestList/RequestSubmit.vue";
export default {
  components: {
    RequestFetchByCoordinates,
    RequestSubmit
  },
  data() {
    return {
      requests: []
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
