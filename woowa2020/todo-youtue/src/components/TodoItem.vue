<template>
    <div class="todo-item mb-5">
        <input :checked="todo.checked"
               @change="toggle"
               type="checkbox">
        <span :class="todo.checked ? 'text-muted' : '' "
              :style="todo.checked ? 'text-decoration:line-through' : '' "
              class="ml-5"
        >{{todo.text}}</span>
        <button @click="removeItem"
                class="right"
        >삭제
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true,
            }
        },
        methods: {
            toggle: function (event) {
                this.$store.dispatch('toggleTodo', {
                    id: this.todo.id,
                    checked: event.target.checked
                })
            },
            removeItem: function () {
                this.$store.dispatch('removeTodo', {
                    id: this.todo.id
                })
            }
        },
        name: "TodoItem"
    }
</script>

<style scoped>
    .mb-5 {
        margin-bottom: 5px;
    }

    .ml-5 {
        margin-left: 5px;
    }

    .right {
        float: right;
    }

    .todo-item {
        text-align: left;
    }

</style>