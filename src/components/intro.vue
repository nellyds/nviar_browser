<template>
  <div>
      <v-col>
    <div class="para1">
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p @click="$vuetify.goTo('.para2')" class="introCopy">{{ p1 }}</p>
            <p class="question">Why?</p>
      </div>
    </div>
    <div @click="$vuetify.goTo('.para3')" class="para2">
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p2 }}</p>
      </div>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p3 }}</p>
      </div>
      <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p5 }}</p>
      </div>
          <p class="question">How?</p>
    </div>


    <div class="para3">
        <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p6 }}</p>
        </div>
                <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p7 }}</p>
        </div>
                <div class="reveal-holder">
        <div data-aos="reveal-right" class="reveal-block-white"></div>
        <p class="introCopy">{{ p8 }}</p>
                  <p class="question">What next?</p>
        </div>
    </div>
      </v-col>
  </div>
</template>
<script>
export default {
  name: "Intro",
  data() {
    return {
      p1:
        "n-viar is on a mission to connect communities and make cooking less wasteful",
      p2:
        "Every year in the United States, about 30 to 40 percent of the food we grow goes uneaten, according to the U.S. Department of Agriculture.",
      p3:
        "The longer a food item stays fresh, the greater its chance of being eaten.",
      p5: "Our schedules don't always allow us to eat food while fresh though.",

      p6:
        "Growing food requires investments of water, land, energy, and fuel. Now consider that we throw away 30 to 40 percent of everything we grow. That means we’re not just wasting food, we’re wasting 30 to 40 percent of all the resources we used to grow that food. ",
      p7: "I need to hire someone to actually market this idea",
      p8:
        "At n-viar we are creating a community of concious, sharing chefs.  Putting in the effort to make sure food winds up on a plate and in your stomach, not in the garbage.",
      p9:
        "If you ask to 'borrow' something today, you might 'lend' someone something tomorrow."
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .introCopy {
    font-size: 1.1em;
    color: white;
    font-weight: bolder;
    text-align: right;
    margin-right: 10%;
    width: 80%;
    background-color: rgba(0,0,0,.3);
    padding: 10px;
    margin: 10px;
  }
  .para1 {
    background-image: url("~@/assets/photos/limes.jpg");
    background-size: cover;
    height: 100vh;
    margin: 20px;
  }
  .para2 {
    background-image: url("~@/assets/photos/brocolli.jpg");
    background-size: cover;
    height: 100vh;
        margin: 20px;
  }
    .para3 {
    background-image: url("~@/assets/photos/prepared.jpg");
    background-size: cover;
    height: 100vh;
        margin: 20px;
  }
  .question{
      color: white;
      font-weight: bolder;
      font-size: 2.1em;
  }

}
@media screen and (min-width: 416px) {
  .introCopy {
    font-size: 1.4em;
    color: black;
    font-weight: bolder;
    text-align: center;
    margin-right: 10%;
  }
    .para1 {
    background-image: url("~@/assets/photos/limes.jpg");
    background-size: auto;
  }
  .para2 {
    background-image: url("~@/assets/photos/brocolli.jpg");
    background-size: auto;
  }
    .para3 {
    background-image: url("~@/assets/photos/prepared.jpg");
    background-size: auto;
  }
  .question{
      color: white;
      font-weight: bolder;
      font-size: 2.1em;
  }
}
</style>
