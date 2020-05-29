<template>
    <div>
        <h1>전역 컴포넌트</h1>
        <div>
            <button v-on:click="showAlert">자식이 부모에게 일을 시키네</button>
        </div>
        <div>
            <button v-on:click="eventBusSend">전역 컴포넌트에서 지역 컴포넌트로 정보를 보낸다.</button>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../utils/EventBus.js";

    export default {
        //컴포넌트 name 속성의 값을 컴포넌트를 사용 할때 사용한다.
        name: "global-component",
        methods: {
            showAlert: function () {
                // 부모쪽에서 event로 정의된 일을 args를 가지고 하라고 시킨다.
                this.$emit('alertMessageByChild', "자식이 부모에게 전달한 데이터");
            },
            eventBusSend: function () {
                //이벤트 버스를 이용하여 서로 다른 컴포넌트간의 통신방법
                EventBus.$emit('fromGlobal', "글로벌 컴포넌트에서 보내는 메세지 입니다.");
            }
        }

    }
</script>

<style scoped>

</style>