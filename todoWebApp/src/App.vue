<template lang="html">
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:deleteOne="deleteOne"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  data() {
    return {
      todoItems: []
    }
  },

  created() {
    //TODO api에서 데이터 받아오기
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },

  methods: {
    addTodo(trimedItem) {
      //TODO api와 연결해서 데이터 추가
      localStorage.setItem(trimedItem, trimedItem);
      this.todoItems.push(trimedItem);
    },

    clearAll() {
      //TODO api 요청해서 저장 목록 전부 삭제
      localStorage.clear();
      this.todoItems = [];
    },

    deleteOne(todoItem, index) {
      //TODO api 요청해서 데이터 삭제
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }

  },

  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
