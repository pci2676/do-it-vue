import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
//$mount : el 속성과 동일하게 인스턴스를 화면에 붙이는 역할, el 속성을 정의하지 않아도 mount로 강제로 붙이기 가능하다.
// 보통 el 지정안하고 mount로 지정한다.
