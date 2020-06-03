<template>
    <div>
        <input
                :checked="todo.checked"
                @change="toggleCheckBox"
                type="checkbox">
        <span
                :class="todo.checked? 'text-muted': ''"
                :style="todo.checked? 'text-decoration:line-through': ''">
            {{todo.text}}
        </span>
        <button @click="clickDelete"
                class="btn btn-danger btn-sm">Delete
        </button>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        props: { //부모가 보내주는거 받는거야
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleCheckBox(event) {
                //emit: 상위 컴포넌트로 이벤트를 보낸다
                this.$store.dispatch('todo/toggleTodo', {
                    id: this.todo.id,
                    checked: event.target.checked
                })
            },
            clickDelete() {
                this.$store.dispatch('todo/deleteTodo', this.todo.id);
            }
        }
    }
</script>

<style scoped>

</style>