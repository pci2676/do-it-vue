<template>
    <div>
        완료된 개수 : {{completedTodo}}
    </div>
</template>

<script>
    export default {
        name: "CompletedTodo",
        computed: {
            completedTodo() {
                return this.$store.getters['todo/completedTodo'];
            }
        }
    }
</script>

<style scoped>

</style>