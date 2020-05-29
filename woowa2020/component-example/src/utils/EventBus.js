import Vue from "vue";
// 이벤트 버스 정의
// 이벤트 버스는 편리하긴 해도 컴포넌트의 갯수가 많아지면 어디로 보냈는지 관리가 잘되지 않는다.
// vuex 를 공부하자.
export const EventBus = new Vue();