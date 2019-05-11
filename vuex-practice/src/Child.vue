<template lang="html">
  <!-- Child (Child.vue) Template -->
  <div>
    <hr>
    Child counter : {{ childCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>

</template>

<script>
// Child.vue
export default {
  computed: {
    childCounter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addCounter() {
      this.$store.commit('increment');
    },
    subCounter() {
      this.$store.commit('decrement');
    }
  },
  // // Parent 에서 넘겨준 counter 속성을 passedCounter 로 받음
  // props: ['passedCounter']
}
</script>

<style lang="css" scoped>
</style>
