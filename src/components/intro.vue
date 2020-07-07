<template>
  <div class="introSection">
    <div v-for="(item, i) in slide" v-bind:key="i">
      <v-row no-gutters cols="16">
        <v-col no-gutters align="right">
          <div>
            <div class="reveal-holder">
              <div data-aos="reveal-right" class="reveal-block-white"></div>
              <img
                class="imgDetail right"
                v-bind:src="require('@/assets/photos/' + item.imgDetail1)"
              />
            </div>
          </div>
          <div>
            <div class="reveal-holder">
              <div data-aos="reveal-right" class="reveal-block-black"></div>
              <p @click="$vuetify.goTo('.para2')" class="introCopy">
                {{ item.para }}
              </p>
            </div>
          </div>
          <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-white"></div>
            <img
              class="imgDetail left"
              v-bind:src="require('@/assets/photos/' + item.imgDetail2)"
            />
          </div>
        </v-col>
        <v-col no-gutters>
          <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-white"></div>
            <img
              class="imgWhole whole"
              v-bind:src="require('@/assets/photos/' + item.imgWhole)"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <introSlide />
  </div>
</template>
<script>
import introSlide from "@/components/FrontPage/introSlide.vue";
export default {
  name: "Intro",
  components: {
    introSlide
  },
  data() {
    return {
      slide: [
        {
          para:
            "n-viar is on a mission to connect communities and make cooking less wasteful",
          imgDetail1: "berries.jpg",
          imgDetail2: "brocolli2.jpg",
          imgWhole: "market.jpeg"
        },
        {
          para: "statement 2, work on this",
          imgDetail1: "apple.jpg",
          imgDetail2: "grapes.jpg",
          imgWhole: "oranges.jpg"
        },
        {
          para: "statement 3, work on this",
          imgDetail1: "greenApples.jpg",
          imgDetail2: "lemons.jpg",
          imgWhole: "raspberry.jpeg"
        }
      ],
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
  .introSection {
    height: 100vh;
    position: relative;
  }
  .imgDetail {
    height: 150px;
    width: 150px;
  }
  .right {
    clip: rect(25px, 175px, 175px, 25px);
  }
  .left {
    clip: rect(50px, 200px, 200px, 50px);
  }
  .imgWhole {
    height: 330px;
    width: 150px;
    clip: rect(50px, 200px, 200px, 50px);
  }
  .introCopy {
    height: 150px;
    width: 150px;
    margin-right: 10px;
  }
  .whole {
  }
}
@media screen and (min-width: 416px) {
  .introSection {
  }
  .imgDetail {
    height: 325px;
    width: 325px;
  }
  .right {
    clip: rect(25px, 350px, 350px, 25px);
  }
  .left {
    clip: rect(50px, 400px, 400px, 50px);
  }
  .introCopy {
    height: 450px;

    font-weight: bold;
    font-size: 2.5em;
    margin-right: 25px;
  }
  .imgWhole {
    height: 810px;
  }
}
</style>
