<template>
    <div>
        <Todo
                :key="todo.id"
                :todo="todo"
                v-for="todo in todos"
        />
    </div>
</template>

<script>
    import Todo from "./Todo";

    export default {
        name: "TodoList",
        components: {
            Todo
        },
        computed: {
            todos() {
                return this.$store.state.todo.todos;
            }
        }
    }
</script>

<style scoped>

</style>