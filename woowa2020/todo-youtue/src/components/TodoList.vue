<template>
    <div>
        <TodoItem :key="item.id" :todo="item"
                  v-for="item in todoItems"/>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem";

    export default {
        name: "TodoList",
        computed: {
            todoItems: function () {
                return this.$store.state.todoItems;
            }
        },
        components: {
            TodoItem
        }
    }
</script>

<style scoped>

</style>