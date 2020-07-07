<template>
  <div v-if="$vuetify.breakpoint.smAndUp" class="introSection">
    <p @click="changeSlide" >change</p>
    <transition name="slideOver">
    <introSlide @click="changeSlide" v-if="show1" :imgDetail1=slide[0].imgDetail1 :imgDetail2=slide[0].imgDetail2 :imgWhole=slide[0].imgWhole :para=slide[0].para />
    <introSlide2  v-if="show2" :imgDetail1=slide[1].imgDetail1 :imgDetail2=slide[1].imgDetail2 :imgWhole=slide[1].imgWhole :para=slide[1].para />
    <introSlide3 v-if="show3" :imgDetail1=slide[2].imgDetail1 :imgDetail2=slide[2].imgDetail2 :imgWhole=slide[2].imgWhole :para=slide[2].para />
    <p class="outro" v-if="show4"> Ominous fourth statement</p> 
    </transition>
  </div>
  <div v-else>
    <div id="slide1" @click="$vuetify.goTo('#slide2')">
      <introSlide   :imgDetail1=slide[0].imgDetail1 :imgDetail2=slide[0].imgDetail2 :imgWhole=slide[0].imgWhole :para=slide[0].para />
    </div >
    <div id="slide2" @click="$vuetify.goTo('#slide3')" >
    <introSlide   :imgDetail1=slide[1].imgDetail1 :imgDetail2=slide[1].imgDetail2 :imgWhole=slide[1].imgWhole :para=slide[1].para />
    </div>
    <div id="slide3" @click="$vuetify.goTo('#slide1')">
    <introSlide  :imgDetail1=slide[2].imgDetail1 :imgDetail2=slide[2].imgDetail2 :imgWhole=slide[2].imgWhole :para=slide[2].para />
    </div>
  </div>
</template>
<script>
import introSlide from "@/components/FrontPage/introSlide";
import introSlide2 from "@/components/FrontPage/introSlide2";
import introSlide3 from "@/components/FrontPage/introSlide3";
export default {
  name: "Intro",
  components:{
    introSlide,
    introSlide2,
    introSlide3
  },
  data() {
    return {
      slide: [
        {
          para:
            "statement 1, make this ",
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
      show1: true,
      show2: false,
      show3: false,
      show4: false
    };
  },
  methods:{
    changeSlide: function(){
      if (this.show1 ===true){
        this.show1 = false;
        this.show3 = false;
        this.show2 = true;
      }
      else if (this.show2 === true){
        this.show2 = false;
        this.show1 = false;
        this.show3 = true;
      }
      else{ 
        this.show3 = false;
        this.show1 = true;
      }
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
  .introSection {
    min-height: 100vh;
  }

}
@media screen and (min-width: 416px) {
  .introSection {
    min-height: 100vh;
  }

}
</style>
