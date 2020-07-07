<template>
  <div v-if="$vuetify.breakpoint.smAndUp" class="introSlide">
    <v-row no-gutters cols="16">

      <v-col no-gutters align="right">
        <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-white"></div>
          <img
            class="imgWhole whole"
            v-bind:src="require('@/assets/photos/' + imgWhole)"
          />
        </div>
      </v-col>
          <v-col no-gutters align="left">
        <div>
          <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-white"></div>
            <img
              class="imgDetail right"
              v-bind:src="require('@/assets/photos/' + imgDetail1)"
            />
          </div>
        </div>
        <div>
          <div class="reveal-holder">
            <div data-aos="reveal-right" class="reveal-block-black"></div>
            <p class="introCopy">{{ para }}</p>
          </div>
        </div>
        <v-row>
          <div v-if="$vuetify.breakpoint.smAndUp" style="width: 325px;" />
                <div class="reveal-holder">
          <div data-aos="reveal-right" class="reveal-block-white"></div>
          <img
            class="imgDetail left"
            v-bind:src="require('@/assets/photos/' + imgDetail2)"
          />
        </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row no-gutters>
      
    </v-row>
  </div>
</template>
<script>
export default {
  name: "IntroSlide",
  props: {
    imgDetail1: String,
    imgDetail2: String,
    para: String,
    imgWhole: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .introSlide {
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
    margin-left: 10px;
  }
  .whole {
  }
}
@media screen and (min-width: 416px) {
  .introSlide {
    height: 100vh;
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
    margin-left: 25px;
  }
  .imgWhole {
    height: 810px;
  }
}
</style>
