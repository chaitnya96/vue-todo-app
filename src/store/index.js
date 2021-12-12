import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    getTodos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=51')
        .then(response => {
          commit('SET_TODOS', response.data)
        })
    }
  },
  modules: {
  }
})
