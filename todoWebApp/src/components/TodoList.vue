<template lang="html">
  <div>
    <section>
      <transition-group name="list" tag="ul">
        <!--v-bind:key로 속성지정해놓으면 렌더링할때 속도 빨라짐 디비에서 인덱스와 같은느낌이라 생각
            index를 키로 지정하니 vue에서 하지말라고 경고뜸;-->
        <li v-for="todoMemo in propsdata" v-bind:key="todoMemo.idx" class="shadow">
          <i class="checkBtn fas fa-check" aria-hidden="true"></i>
          {{todoMemo.todo}}
          <span class="removeBtn" type="button" @click="removeTodo(todoMemo.idx)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </span>
        </li>
      </transition-group>
    </section>
  </div>
</template>








<script>
export default {

  props: ['propsdata'],

  methods: {
    removeTodo(index) {
      this.$emit('deleteOne', index);
    }
  }
}
</script>









<style lang="css" scoped>

ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn{
  line-height: 45px;
  color:#62acde;
  margin-right:5px;
}

.removeBtn{
  margin-left: auto;
  color: #de4343;
}

.list-enter-active, .list-leave-active{
  transition: all 1s;
}

.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>
