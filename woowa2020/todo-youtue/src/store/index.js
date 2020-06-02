import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeConfig = {
    state: {
        todoItems: [
            {
                id: 1,
                text: '뷰 강의 완강하기',
                checked: false
            },
            {
                id: 2,
                text: '인터뷰 질문 정리하기',
                checked: false
            }
        ]
    },
    mutations: {
        //state에 있는 데이터를 직접적으로 변경시키는 메서드가 위치한다.
        //사용할때는 commit 명령어를 이용해서 mutations에 있는 메서드를 사용한다.
        ADD_TODO: function (state, text) {
            state.todoItems.push({
                id: Math.random(),
                text: text,
                checked: false
            });
        },
        TOGGLE_TODO: function (state, {id, checked}) {
            const index = state.todoItems.findIndex(item => {
                return item.id === id;
            });
            state.todoItems[index].checked = checked;
        },
        REMOVE_TODO: function (state, id) {
            const index = state.todoItems.findIndex(item => {
                return item.id === id;
            });
            state.todoItems.splice(index, 1);
        }
    },
    actions: {
        //비동기 적인 작업이 필요할때 사용한다.
        //dispatch 명령어를 통해서 사용한다.
        //따라서 보통 디비와 연결이 되어있다면 사용하는곳에서 dispatch를 호출해 비동기 작업을 수행하고
        //commit을 통해 mutation으로 compute 에 있는 값을 바꾼다.
        addTodo: function (context, text) {
            context.commit('ADD_TODO', text);
        },
        toggleTodo: function (context, {id, checked}) {
            context.commit('TOGGLE_TODO', {id, checked});
        },
        removeTodo: function (context, id) {
            context.commit('REMOVE_TODO', id);
        }

    },
    getters: {}
};

export default new Vuex.Store(
    storeConfig
)
