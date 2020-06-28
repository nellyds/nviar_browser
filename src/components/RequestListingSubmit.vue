<template>
  <div>
    <v-text-field v-model="item" label="item" />
    <v-text-field v-model="content" label="content" />
    <v-text-field v-model="neighborhood" label="neighborhood" />
    <v-text-field v-model="city" label="city" />
    <v-text-field v-model="state" label="state" />
    <v-btn @click="submit">Submit</v-btn>
    <div v-if="location">
      Your location data is {{ location.coords.latitude }},
      {{ location.coords.longitude }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: null,
      gettingLocation: false,
      item: "",
      content: "",
      city: "",
      state: "",
      neighborhood: "",
      errorStr: null,
      user_id: "5ee5938e3a54de5c5888f28b"
    };
  },
  methods: {
    submit: function() {
      this.$http.post("http://127.0.0.1:5000/listing/request/post", {
        item: this.item,
        content: this.content,
        user_id: this.user_id,
        city: this.city,
        state: this.state,
        neighborhood: this.neighborhood,
        location: {
          type: "Point",
          coordinates: [
            this.location.coords.latitude,
            this.location.coords.longitude
          ]
        }
      });
    }
  },
  created() {
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.gettingLocation = false;
        this.location = pos;
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  }
};
</script>
<style scoped></style>
