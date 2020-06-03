import Vue from 'vue';
import Vuex from 'vuex';
import todo from '@/store/modules/todo'
import user from '@/store/modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo: todo, // 이름 같으면 K:V로 안하고 K 만 써줘도 된다.
        user: user
    }
})