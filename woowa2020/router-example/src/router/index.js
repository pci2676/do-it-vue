// 파일 이름을 index로 하면 경로 입력만 하면 자동으로 임포트 된다.
import Vue from 'vue'
import Router from 'vue-router'
import Paths from "../components/Paths";
import Favorites from "../components/Favorites";

Vue.use(Router);

const DefaultContainer = () => import('@/containers/DefaultContainer');

const Home = () => import('@/components/Home');
const Lines = () => import('@/components/Lines');
const Stations = () => import('@/components/Stations');

function configRoutes() {
    return [
        {
            path: '/',
            redirect: '/home',
            name: 'DefaultContainer',
            component: DefaultContainer,
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'lines',
                    meta: {label: 'Lines'},
                    component: Lines,
                    children: [
                        {
                            path: 'favorites',
                            name: 'Favorties',
                            component: Favorites,
                        },
                        {
                            path: 'paths',
                            name: 'Paths',
                            component: Paths,
                        },
                    ]
                },
                {
                    path: 'stations',
                    meta: {label: 'Stations'},
                    component: Stations
                }
            ]
        }

    ]
}

export default new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active', // 전역 설정
    scrollBehavior: () => ({y: 0}), // 라우트 변경시 맨 위로 offset로 이
    routes: configRoutes()
})
