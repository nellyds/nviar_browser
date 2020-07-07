<template>
  <div>
    <p class="processHeader">How does it work?</p>
    <v-col align="center" justify="center">
    <div v-for="(step,i) in process" v-bind:key="i">
      <div class="processSlide">
          <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-white"></div>
      <img :src="require('@/assets/'+ step.imgUrl)" />
          </div>
                <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-black"></div>
      <p class="slideTitle">{{step.headline}}</p>
      <p class="slideContent">{{step.explanation}}</p>
                </div>

      </div>
    </div>
    </v-col>
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
          imgUrl: "browse.jpg"
        },
        {
          headline: "Search",
          explanation:
            "Once posted, a listing is indexed and viewable by the poster's location, name of the item, or category.",
          imgUrl: "scroll.jpg"
        },
        {
          headline: "Respond",
          explanation:
            "A registered used responds to the posting by sending a message.  We securely transmit the message to the posters inbox, keeping your contact information hidden and secured.",
          imgUrl: "shop.jpg"
        },
        // {
        //   headline: "Communicate",
        //   explanation:
        //     "A users message should introduce themselves to the poster and let them know how they can help with the listing.  ",
        //   imgUrl: "grapes.jpg"
        // },
        {
          headline: "Share",
          explanation:
            "We leave it to users to determine how and when to share.",
          imgUrl: "share.jpg"
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

  img{
    height: 150px;
    width: 150px;
  }
  .processSlide{
    width: 400px;
  }
  .slideContent{
      font-weight: bold;
      text-align: left;
      margin-left: 15px;
  }
  .slideTitle{
          font-weight: bolder;
          font-size: 2.1em;
      text-align: left;
      margin-left: 15px;
  }

}
@media screen and (max-width: 415px) {
  .slideCopy {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }

    img{
    height: 150px;
    width: 150px;
  }
    .slideContent{
      font-weight: bold;
      text-align: left;
      margin-left: 15px;
  }
  .slideTitle{
          font-weight: bolder;
          font-size: 2.1em;
      text-align: left;
      margin-left: 15px;
  }
  .processHeader{
          font-weight: bolder;
          font-size: 2.7em;
      text-align: left;
      margin-left: 15px;

  }
}
</style>
