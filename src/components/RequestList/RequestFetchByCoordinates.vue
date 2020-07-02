<template>
  <v-content>
    <LoadingAnimation v-if="gettingLocation" />
    <div v-if="coordinates != null">
      <LoadingAnimation v-if="gettingRequests" />
      <v-select
        :items="radii"
        v-model="radius"
        label="Outlined style"
        outlined
      ></v-select>
      <p>{{ radius }}</p>
      <v-btn @click="getRequests">Get Requests</v-btn>
    </div>
    <div v-for="(request, i) in requests" v-bind:key="i">
      <Request v-bind:listRequest="request" />
    </div>
  </v-content>
</template>
<script>
import LoadingAnimation from "@/components/navigation/LoadingAnimation.vue";
import ListRequest from "@/models/ListRequest.js";
import Request from "@/components/RequestList/Request.vue";
export default {
  components: {
    LoadingAnimation,
    Request
  },
  data() {
    return {
      gettingLocation: false,
      gettingRequests: false,
      requests: [],
      radii: [0.25, 0.5, 0.75],
      radius: null
    };
  },
  methods: {
    getRequests: function() {
      if (this.coordinates != null) {
        this.gettingRequests = true;
        this.$http
          .post(this.apiUrl + "/listing/request/coordinateGet", {
            coordinates: this.coordinates,
            radius: 50
          })
          .then(result => {
            this.gettingRequests = false;
            console.log(result.data.result);
            var i;
            for (i = 0; i < result.data.result.length; i++) {
              console.log(result.data.result);
              var request = new ListRequest(
                result.data.result[i].item,
                result.data.result[i].content,
                result.data.result[i].name,
                result.data.result[i].listingRequestId,
                result.data.result[i].coordinates
              );
              this.requests.push(request);
              console.log(this.requests);
            }
            this.gettingRequests = false;
          })
          .catch(() => {
            console.log("Unable to retrieve requested resource");
            this.gettingRequests = false;
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
