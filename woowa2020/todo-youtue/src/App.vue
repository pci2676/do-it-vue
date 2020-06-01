<template>
    <div class="container" id="app">
        <h1 class="text-center">TODO APP</h1>
        <DoneItem :todoItems="todoItems"/>
        <TodoInput
                @addTodo="addTodo"/>
        <hr>
        <TodoList
                :todoItems="todoItems"
                @removeItem="removeItem"
                @toggle="toggle"/>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import TodoInput from '@/components/TodoInput'
    import DoneItem from "@/components/DoneItem";

    export default {
        data() {
            return {
                todoItems: [
                    {
                        id: 1,
                        text: '뷰 강의 완강하기',
                        checked: false
                    },
                    {
                        id: 2,
                        text: '인터뷰 질문 정리하기',
                        checked: false
                    }
                ]
            }
        },
        methods: {
            addTodo: function (text) {
                this.todoItems.push({
                    id: Math.random(),
                    text: text,
                    checked: false
                })
            },
            toggle: function ({id, checked}) {
                const index = this.todoItems.findIndex(item => {
                    return item.id === id;
                });
                this.todoItems[index].checked = checked;
            },
            removeItem: function ({id}) {
                const index = this.todoItems.findIndex(item => {
                    return item.id === id;
                });
                this.todoItems.splice(index, 1);
            }
        }
        ,
        components: {
            TodoInput,
            TodoList,
            DoneItem
        }

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .w-100 {
        width: 100%;
    }

    .p-2 {
        padding: 2px;
    }


</style>
