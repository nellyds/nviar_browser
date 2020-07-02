<template>
  <v-content>
    <LoadingAnimation v-if="gettingLocation" />
    <div v-if="coordinates != null">
      <LoadingAnimation v-if="gettingOffers" />
      <v-select
        :items="radii"
        v-model="radius"
        label="Outlined style"
        outlined
      ></v-select>
      <p>{{ radius }}</p>
      <v-btn @click="getRequests">Get Offers</v-btn>
    </div>
    <div v-for="(offer, i) in offers" v-bind:key="i">
      <Offer v-bind:listOffer="offer" />
    </div>
  </v-content>
</template>
<script>
import LoadingAnimation from "@/components/navigation/LoadingAnimation.vue";
import ListOffer from "@/models/ListOffer.js";
import Offer from "@/components/OfferList/Offer.vue";
export default {
  components: {
    LoadingAnimation,
    Offer
  },
  data() {
    return {
      gettingLocation: false,
      gettingOffers: false,
      offers: [],
      radii: [0.25, 0.5, 0.75],
      radius: null
    };
  },
  methods: {
    getRequests: function() {
      if (this.coordinates != null) {
        this.gettingOffers = true;
        this.$http
          .post(this.apiUrl + "/listing/offer/coordinateGet", {
            coordinates: this.coordinates,
            radius: 50
          })
          .then(result => {
            this.gettingOffers = false;
            var i;
            for (i = 0; i < result.data.result.length; i++) {
              
              var offer = new ListOffer(
                                result.data.result[i].name,
                result.data.result[i].item,
                result.data.result[i].content,
                result.data.result[i].listingOfferingId,
                result.data.result[i].coordinates
              );
              this.offers.push(offer);
            }
            this.gettingOffers = false;
            console.log(this.offers)
          })
          .catch(() => {
            console.log("Unable to retrieve requested resource");
            this.gettingOffers = false;
          });
      }
    }
  },
  created() {
    if (!("geolocation" in navigator && this.coordinates == null)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }
    this.gettingLocation = true;
    navigator.geolocation.getCurrentPosition(
      pos => {
        var foundCoordinates = [pos.coords.latitude, pos.coords.longitude];
        this.$store.commit({
          type: "setCoordinates",
          coordinates: foundCoordinates
        });
        this.gettingLocation = false;
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
  computed: {
    user_id: function() {
      return this.$store.state.user_id;
    },
    apiUrl: function() {
      return this.$store.state.apiUrl;
    },
    coordinates: function() {
      return this.$store.state.coordinates;
    }
  }
};
</script>
<style scoped></style>
