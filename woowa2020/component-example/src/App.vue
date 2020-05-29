<template>
    <div id="app">
        <!--        전역 컴포넌트는 바로 main.js에서 등록하면 바로 사용가능 하다.-->
        <global-component v-on:alertMessageByChild="alertByParent"/> <!--하위 컴포넌트에서 전달하는 이벤트="상위 컴포넌트 메서드"-->
        <local-component :msg=this.msg/>
    </div>
</template>

<script>
    // 지역 컴포넌트는 사용될 컴포넌트에서 임포트를 한뒤
    import LocalComponent from "./components/LocalComponent";

    export default {
        name: 'App',
        components: {
            //직접 등록을 해서 사용해준다.
            LocalComponent
        },
        data() {
            return {
                msg: '부모 컴포넌트가 전달하는 데이터'
            }
        },
        methods: {
            alertByParent: function (msgFromChild) {
                alert(msgFromChild);
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
