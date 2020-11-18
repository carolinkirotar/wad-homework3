import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import LogIn from "./components/LogIn";
import BrowsePage from "./components/BrowsePage";
import Main from "./components/Main"
import User from "./models/User";
import Profile from "./models/Profile";
import Post from "./models/Post";
import UserInfo from "./components/UserInfo";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/Main', component: Main},
    {path: '/BrowsePage', component: BrowsePage},
    {path: '/LogIn', component: LogIn},
    {path: '/UserInfo', component: UserInfo}
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
    mutations: {
        toggleItem: (state, id) => {
            let index = state.selected.indexOf(id);

            if (index > -1) {
                state.selected.splice(index, 1);
                return false;
            }

            state.selected.push(id);
            return true;
        }
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