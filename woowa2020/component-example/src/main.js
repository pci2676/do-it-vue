import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from "./components/GlobalComponent";

Vue.config.productionTip = false

// 전역 컴포넌트는 main.js 에서 등록을 해준다.
Vue.component(GlobalComponent.name, GlobalComponent);


new Vue({
    render: h => h(App),
}).$mount('#app')
