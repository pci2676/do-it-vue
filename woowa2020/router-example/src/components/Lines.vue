<template>
    <div>
        <h1>Line Page</h1>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Lines",
        created() {
            console.log("라인 라우트 로딩")
        }
    }
</script>

<style scoped>

</style>