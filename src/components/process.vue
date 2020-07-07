<template>
  <div>
    <!-- <v-carousel :hide-delimiters="true" align="center" justify="center" :show-arrows="false">
              <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
      <v-carousel-item
        v-for="(item, i) in process"
        :key="i"
        :src="require('@/assets/photos/' + item.imgUrl)"
        :height="$vuetify.breakpoint.smAndUp ? 800 : 300"
        class="slide"
        >
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-black"></div>
          <h1 class="slideCopy">{{ item.headline }}</h1>
          <p class="slideCopy">{{ item.explanation }}</p>
        </div>
      </v-carousel-item>
              </div>
    </v-carousel> -->
    
  </div>
</template>
<script>
export default {
  name: "Process",
  data() {
    return {
      process: [
        {
          headline: "Post",
          explanation:
            "A listing gets posted as either a request, what someone wants, or an offer, what they have to share.",
          imgUrl: "oranges.jpg"
        },
        {
          headline: "Search",
          explanation:
            "Once posted, a listing is indexed and viewable by the poster's location, name of the item, or category.",
          imgUrl: "lemons.jpg"
        },
        {
          headline: "Respond",
          explanation:
            "A registered used responds to the posting by sending a message.  We securely transmit the message to the posters inbox, keeping your contact information hidden and secured.",
          imgUrl: "blueberries.jpg"
        },
        {
          headline: "Communicate",
          explanation:
            "A users message should introduce themselves to the poster and let them know how they can help with the listing.  ",
          imgUrl: "grapes.jpg"
        },
        {
          headline: "Share",
          explanation:
            "We leave it to users to determine how and when to share.",
          imgUrl: "raspberry.jpeg"
        }
      ]
    };
  }
};
</script>
<style scoped>
@media screen and (min-width: 416px) {
  .slideCopy {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .slide {
    height: 100vh;
    width: 45vw;
  }
}
@media screen and (max-width: 415px) {
  .slideCopy {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .slide {
    height: 100vh;
  }
}
</style>
