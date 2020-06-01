<template>
    <div>
        <TodoItem :key="item.id" :todo="item"
                  @removeItem="removeItem"
                  @toggleCheckBox="toggle"
                  v-for="item in todoItems"/>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem";

    export default {
        name: "TodoList",
        props: {
            todoItems: {
                type: Array,
                required: true
            }
        },
        methods: {
            toggle: function (value) {
                this.$emit('toggle', value);
            },
            removeItem: function (todoId) {
                this.$emit('removeItem', todoId);
            }
        },
        components: {
            TodoItem
        }
    }
</script>

<style scoped>

</style>