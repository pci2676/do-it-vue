<template>
    <div class="todo-item mb-5">
        완료된 갯수 : {{ completedTodoCount }}
    </div>
</template>

<script>
    export default {
        name: "DoneItem",
        props: {
            todoItems: {
                type: Array,
                required: true
            }
        },
        computed: {
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