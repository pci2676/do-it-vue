<template>
    <div>
        <h2>지역 컴포넌트</h2>
        <div>부모 컴포넌트에서 전달받은 메세지 : {{msg}}</div>
        <div>서로 다른 계층의 컴포넌트에서 전달받은 메세지 : <span id="globalMessage">{{globalMessage}}</span></div>
    </div>
</template>

<script>
    import {EventBus} from "../utils/EventBus.js";

    export default {
        //컴포넌트 name 속성의 값을 컴포넌트를 사용 할때 사용한다.
        name: "local-component",
        // 부모가 전달한 데이터는 자식에서 props 속성을 이용해서 전달 받는다.
        props: ['msg'],
        data() {
            return {
                globalMessage: ''
            }
        },
        created: function () {
            //created 단계에서 fromGlobal이라는 이벤트를 등록해놓고 해당 이벤트가 발생하면 실행할 행위를 정의해놓는다.
            EventBus.$on('fromGlobal', function (globalMsg) {
                this.globalMessage = globalMsg;
                document.querySelector("#globalMessage").innerHTML = this.globalMessage;
            })
        }
    }
</script>

<style scoped>

</style>