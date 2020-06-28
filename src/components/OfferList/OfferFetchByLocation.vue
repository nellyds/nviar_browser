<template>
  <v-content>
    <v-text-field v-model="city" label="city" />
    <v-text-field v-model="state" label="state" />
    <v-text-field v-model="neighborhood" label="neighborhood" />
    <v-btn color="white" @click="getOffersByLocation">Go!</v-btn>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      city: "",
      state: "",
      neighborhood: ""
    };
  },
  methods: {
    getOffersByLocation: function() {
      this.$http
        .post(this.apiUrl + "/listing/offer/locationGet", {
          neighborhood: this.neighborhood,
          city: this.city,
          state: this.state
        })
        .then(result => {
          console.log(result.data.result);
        })
        .catch(() => {
          console.log("500 error, resource unavailable");
        });
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped></style>
