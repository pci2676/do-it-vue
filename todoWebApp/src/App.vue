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

const axios = require('axios');
const baseUrl = require('./components/common/urlConfig.js')

function todoMemo(idx, todo) {
  this.idx = idx;
  this.todo = todo;
}

export default {

  data() {
    return {
      todoItems: []
    }
  },

  created() {
    axios.get(baseUrl + '/api/memo/all')
      .then((res) => {
        if (res.data.length > 0) {
          this.todoItems = [];
          for (var i = 0; i < res.data.length; i++) {
            this.todoItems.push(new todoMemo(res.data[i].id, res.data[i].todo));
          }
        }
      });
  },

  methods: {
    addTodo(trimedItem) {
      axios.post(baseUrl + '/api/memo/add', {

          headers: {
            'Content-Type': 'application/json',
          },

          memo: trimedItem
        })
        .then((res) => {
          this.todoItems.push(new todoMemo(res.data, trimedItem));
        })
        .catch((error) => {
          console.log(error);
        })


    },

    clearAll() {
      axios.delete(baseUrl + '/api/memo/delete')
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteOne(index) {
      axios.delete(baseUrl + '/api/memo/delete/memo', {
          params: {
            id: index
          }
        })
        .then((res) => {
          var deleteIdx = this.findMemoIdx(index);
          this.todoItems.splice(deleteIdx, 1);
          console.log(res)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    findMemoIdx(index) {
      for (var i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].idx == index) {
          return i;
        }
      }
      throw "unexpected index error.";
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
