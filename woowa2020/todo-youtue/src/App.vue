<template>
    <div class="container" id="app">
        <h1 class="text-center">TODO APP</h1>
        <DoneItem/>
        <TodoInput/>
        <hr>
        <TodoList/>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import TodoInput from '@/components/TodoInput'
    import DoneItem from "@/components/DoneItem";

    export default {
        data() {
            return {}
        },
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
