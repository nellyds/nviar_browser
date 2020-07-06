<template>
  <div>
    <p>Something</p>
    <p>Listings: {{ listing }}</p>
  </div>
</template>
<script>
export default {
  name: "ListingView",
  data() {
    return {
      listings: []
    };
  },
  methods: {
    // getListings: function(){
    //     this.$http.post(this.apiUrl + "user/listing/get",
    //         { user_id: this.user_id},
    //         { headers: { Authorization: `Bearer ${this.jwt}` }}
    //     ).then( result =>{
    //         console.log(result.data.result)
    //         this.listings = result.data.response
    //     }).catch(
    //         () =>{
    //             console.log("Something went wrong")
    //         }
    //     )
    // },
  },
  computed: {
    user_id: function() {
      return this.$store.state.user_id;
    },
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  },
  mounted() {
    window.alert("hi");
    this.$http
      .post(
        this.apiUrl + "/user/listing/get",
        { user_id: this.user_id },
        { headers: { Authorization: `Bearer ${this.jwt}` } }
      )
      .then(result => {
        console.log(result.data.result);
        this.listings = result.data.response;
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }
};
</script>
<style scoped></style>
