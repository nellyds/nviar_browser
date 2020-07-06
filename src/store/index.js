import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://127.0.0.1:5000",
    // apiUrl: "http://nviar.herokuapp.com",
    user_id: null,
    jwt: null,
    coordinates: null,
    itemCategory: [
      "fruit",
      "vegetable",
      "spices",
      "beef",
      "dairy",
      "fish",
      "vegetarian",
      "oil",
      "sweetener",
      "soy",
      "sauces",
      "flourOrGrain",
      "beverage",
      "nutsAndBeans",
      "miscellaneous"
    ]
  },
  mutations: {
    setCoordinates(state, argument) {
      this.state.coordinates = argument.coordinates;
      console.log("set");
      console.log(this.state.coordinates);
    },
    storeJwt(state, payload) {
      console.log("payload");
      console.log(payload);
      this.state.jwt = payload.jwt;
      this.state.user_id = payload.user_id;
    }
  },
  actions: {},
  modules: {}
});
