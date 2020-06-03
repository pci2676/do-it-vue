<template>
    <div class="container" id="app">
        <h1 class="text-center">Todo App</h1>
        <CompletedTodo/>
        <TodoInput/>
        <hr>
        <TodoList/>
        <hr>
        <UserList/>
    </div>
</template>

<script>
    import CompletedTodo from "./components/CompletedTodo";
    import TodoInput from "./components/TodoInput";
    import TodoList from "./components/TodoList";
    import UserList from "./components/UserList";

    export default {
        components: {
            UserList,
            CompletedTodo,
            TodoInput,
            TodoList
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
        margin-top: 60px;
    }
</style>
