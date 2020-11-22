import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        posts: [],
        profiles: []
    },
    actions: {
        fetchPosts({commit}) {
            axios.get("https://private-anon-e3f0ec5c7e-wad20postit.apiary-mock.com/posts").then(response => {
                commit("setPosts", response.data);
            }).catch(error => {
                alert("Error! Cannot fetch posts data. " + error);
            });
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
    }
});