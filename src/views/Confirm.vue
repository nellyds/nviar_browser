<template>
  <div>
    <p>Message: {{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: null
    };
  },
  mounted() {
    this.$http
      .post(this.apiUrl + "/user/confirm", {
        user_id: this.$route.params.id
      })
      .then(result => {
        if (
          result.data.message != "Welcome Data access error" &&
          result.data.message != "Error occured during confirmation"
        ) {
          this.message = result.data.message;
        }
      })
      .catch(() => {
        console.log("Internal Service error");
      });
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped></style>
