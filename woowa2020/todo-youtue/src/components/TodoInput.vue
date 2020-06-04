<template>
    <div>
        <input @keyup.enter.prevent="addTodo"
               v-model="text"
               class="w-100 p-2"
               placeholder="input todo item"
               type="text"/>
    </div>
</template>

<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                text: ''
            }
        },
        methods: {
            addTodo: function (event) {
                const text = event.target.value;
                this.text = '';
                this.$store.dispatch('todo/addTodo', text);
            }
        }
    }
</script>

<style scoped>

</style>