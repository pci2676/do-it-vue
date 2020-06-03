<template>
    <div>
        User List
        <div :key="user.id" v-for="user in users">
            {{user.name}}
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "UserList",

        created() {
            this.getUsers();
        },

        computed: {
            ...mapState('user', ['users']),
        },
        methods: {
            ...mapActions('user', ['getUsers'])
        }
    }
</script>

<style scoped>

</style>