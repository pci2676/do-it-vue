<template>
    <div class="todo-item mb-5">
        완료된 갯수 : {{ getCompletedItemCount }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {

        name: "DoneItem",
        computed: {
            ...mapGetters('todo', ['getCompletedItemCount']) // 앞에는 모듈이름 뒤에는 함수명
        }
    }
</script>

<style scoped>

</style>