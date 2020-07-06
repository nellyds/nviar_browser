<template>
  <div>
    <p>submission</p>
    <div v-if="showOfferMetaPrompt">
      <v-text-field v-model="item" label="item" />
      <v-text-field v-model="content" label="content" />
      <v-select :items="items" label="Category" v-model="category" />
      <v-btn @click="submitMeta">Submit</v-btn>
    </div>
    <div v-if="showLocationPrompt">
      <v-btn @click="getCoordinates">Get coordinates </v-btn>
      <v-text-field v-model="city" label="city" />
      <v-text-field v-model="state" label="state" />
      <v-text-field v-model="neighborhood" label="neighborhood" />
      <v-btn @click="submitGeo">Submit</v-btn>
    </div>
    <div v-if="reviewSubmission">
      <p>What you would like to borrow : {{ item }}</p>
      <p>
        The incredibly evocative prose to sum it up (description): {{ content }}
      </p>
      <p v-if="coordinates.length > 0">Submission using geolocation</p>
      <p v-if="validLocation">{{ neighborhood }} in {{ city }}, {{ state }}</p>
      <v-btn @click="submitOffer">Submit</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: "",
      content: "",
      neighborhood: "",
      city: "",
      state: "",
      category: null,
      showOfferMetaPrompt: true,
      showLocationPrompt: false,
      gettingCoordinates: false,
      reviewSubmission: false,
      items: this.$store.state.itemCategory
    };
  },
  methods: {
    getCoordinates: function() {
      if (!("geolocation" in navigator && this.coordinates == null)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }
      this.gettingCoordinates = true;
      navigator.geolocation.getCurrentPosition(
        pos => {
          var foundCoordinates = [pos.coords.latitude, pos.coords.longitude];
          this.$store.commit({
            type: "setCoordinates",
            coordinates: foundCoordinates
          });
          this.gettingCoordinates = false;
        },
        err => {
          this.gettingCoordinates = false;
          this.errorStr = err.message;
        }
      );
    },
    submitMeta: function() {
      if (this.item != "" && this.content != "") {
        this.showRequestMetaPrompt = false;
        this.showLocationPrompt = true;
      }
    },
    submitGeo: function() {
      if (
        (this.neighborhood != "" && this.city != "" && this.state != "") ||
        this.coordinates != []
      ) {
        this.showLocationPrompt = false;
        this.reviewSubmission = true;
      }
    },
    submitOffer: function() {
      this.$http
        .post("http://127.0.0.1:5000/listing/offer/post", {
          item: this.item,
          content: this.content,
          user_id: this.user_id,
          city: this.city,
          category: this.category,
          state: this.state,
          neighborhood: this.neighborhood,
          location: {
            type: "Point",
            coordinates: this.coordinates
          }
        })
        .then(() => {
          window.alert("success");
        })
        .catch(() => {
          window.alert("failure");
        });
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    },
    coordinates: function() {
      return this.$store.state.coordinates;
    },
    user_id: function() {
      return this.$store.state.user_id;
    }
  }
};
</script>
<style scoped></style>
