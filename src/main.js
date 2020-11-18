import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import LogIn from "./components/LogIn";
import BrowsePage from "./components/BrowsePage";
import User from "./models/User";
import Profile from "./models/Profile";
import Post from "./models/Post";
import UserInfo from "./components/UserInfo";
import Home from "@/components/Home";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/BrowsePage', name: BrowsePage, component: BrowsePage},
    {path: '/LogIn', name: LogIn, component: LogIn},
    {path: '/UserInfo', name: UserInfo, component: UserInfo}
]

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        user: new User("Joe", "Biden", "mina@gmail.com"),
        posts: [
            new Post()
        ],
        profiles: [
            new Profile()
        ]
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.selected.indexOf(id) > -1
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');