<template>
    <div>
        <input @keyup.enter.prevent="addTodo"
               class="w-100 p-2"
               placeholder="input todo item"
               type="text"/>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        methods: {
            addTodo: function (event) {
                const text = event.target.value;
                event.target.value = '';
                this.$store.dispatch('addTodo', text);
            }
        }
    }
</script>

<style scoped>

</style>