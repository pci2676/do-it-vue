<style lang="css" scoped>



</style>

<template lang="html">

<div id="app">
    Parent counter : {{ parentCounter }}
    <br>
    <button @click="addCounter">+ mutations</button>
    <button @click="addCounterActions">+ actions</button>
    <button @click="subCounter">-</button>
    <button @click="addTen">+10</button>


    <!-- 기존 코드 -->
    <!-- <child v-bind:passedCounter="counter"></child> -->
    <child></child>
</div>

</template>

<script>
import Child from './Child.vue'
import {
  mapGetters
} from 'vuex'
import {
  mapMutations
} from 'vuex'

export default {
  computed: mapGetters({
    parentCounter: 'getCounter' // getCounter 는 Vuex 의 getters 에 선언된 속성 이름
  }),

  //
  methods: {
    ...mapMutations({
      addCounter: 'increment',
      subCounter: 'decrement'
    }),

    addCounterActions() {
      this.$store.dispatch('addCounter');
    },
    // addCounter() {
    //         this.$store.commit('increment');
    //     },
    //     subCounter() {
    //         this.$store.commit('decrement');
    //     },
    addTen() {
      this.$store.commit('addTen', {
        value: 10
      });
    }
  },
  components: {
    'child': Child
  }
}
</script>
