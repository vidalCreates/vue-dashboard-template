import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    loggedIn: false,
    navi: true,
    token: null,
    user: {
      userId: null,
      name: null,
      role: null
    },
    users: {   
      headers: [
        { text: 'User ID', align: 'center', sortable: false, value: 'userId' },
        { text: 'Full Name', align: 'center', sortable: false, value: 'name' },
        { text: 'Title', align: 'center', sortable: false, value: 'title' },
        { text: 'Role', align: 'center', sortable: false, value: 'role' },
        { text: 'Actions', align: 'center', sortable: false, value: 'actions' }
      ],
      records: []
    },
    editUser: null,  
    snackbar: {
      show: false,
      color: "green",
      y: 'bottom',
      x: null,
      mode: '',
      timeout: 4000,
      text: 'Hello, I\'m a snackbar'
    }
  },
  getters: {
    userRoles: () => {
      return ["regular","admin"]
    }
  },
  mutations: {
    setNavi (state, data){
      state.navi = data
    },
    toggleNavi (state){
      state.navi = !state.navi
    },
    setUser (state, data){
      state.loggedIn = true
      state.user = data
    },
    setToken (state, data){
      state.token = data
    },
    logout (state){
      state.loggedIn = false
      state.token = null
      state.user = {userId: null, name: null, role: null}
    },
    setUsers (state, data){
        state.users = data
    },
    editUser (state, data){
        state.editUser = data
    },
    setSnackbar (state, data){
        state.snackbar = data
    }
  },
  actions: {
    setNavi ({commit}, data){
      commit('setNavi', data)
    },
    toggleNavi ({commit}){
      commit('toggleNavi')
    },
    setUser ({commit}, data){
      commit('setUser', data)
    },
    setToken ({commit}, data){
      commit('setToken', data)
    },
    logout ({commit}){
      commit('logout')
    },
    setUsers ({commit}, data){
        commit('setUsers', data)
    },
    editUser ({commit}, data){
        commit('editUser', data)
    },
    setSnackbar ({commit}, data){
        commit('setSnackbar', data)
    }
  }
})
