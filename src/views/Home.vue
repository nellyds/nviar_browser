<template>
  <div class="home">
    <div>
      <Header />
      <Intro id="intro" />
      <Process />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/FrontPage/intro.vue";
import Header from "@/components/navigation/Header.vue";
import Process from "@/components/FrontPage/process.vue";
export default {
  name: "Home",
  components: {
    Header,
    Intro,
    Process
  },
  data() {
    return {};
  },
  methods: {
    goToRequests: function() {}
  },

  computed: {
    jwt: function() {
      return this.$store.state.jwt;
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 415px) {
}
@media screen and (min-width: 416px) {
}
</style>
