import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://127.0.0.1:5000",
    user_id: null,
    jwt: null,
    coordinates: null
  },
  mutations: {
    setCoordinates(state, argument){
      this.state.coordinates = argument.coordinates
      console.log('set')
      console.log(this.state.coordinates)
    }
  },
  actions: {},
  modules: {}
});
