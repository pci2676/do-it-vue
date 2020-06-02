<template>
    <div class="todo-item mb-5">
        완료된 갯수 : {{ completedTodoCount }}
    </div>
</template>

<script>
    export default {
        name: "DoneItem",
        computed: {
            todoItems: function () {
                return this.$store.state.todoItems;
            },
            completedTodoCount: function () {
                return this.todoItems
                    .filter(item => item.checked)
                    .length;
            }
        }
    }
</script>

<style scoped>

</style>