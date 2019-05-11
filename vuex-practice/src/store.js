import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: function(state) {
      return state.counter;
    }
  },
  //
  mutations: {
    increment(state) {
      return state.counter++
    },
    decrement(state) {
      return state.counter--
    },
    addTen(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    addCounter: function(context) {
      // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('increment');
    }

    //// 통신 로직을 보통 actions을 이용한다.
    // getServerData: function (context) {
    //   return axios.get("sample.json").then(function() {
    //     // ...
    //   });
    // },
  }
});
