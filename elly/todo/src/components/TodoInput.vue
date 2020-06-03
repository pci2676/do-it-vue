<template>
    <div>
        <input
                @keyup.enter.prevent.stop="addTodo"
                class="w-100"
                placeholder="Type todo"
                type="text"
                v-model="todoText">
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                todoText: ''
            }
        },
        methods: {
            addTodo(event) {
                this.$store.dispatch('todo/addTodo', event.target.value);
                this.todoText = '';
            }
        }
    }
</script>

<style scoped>

</style>