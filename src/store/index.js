import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    token: null,
    signUp: {
        status: null,
        message: '',
    },
    login: {
        status: null,
        message: '',
    },
    loginStatus: false,
    users: []
  },
  getters: {
    signUp: state => state.signUp,
    login: state => state.login,
    token: state => state.token,
    loginStatus: state => state.loginStatus,
    users: state => state.users
  },
  mutations: {
    signUp(state, payload) {
        state.signUp.status = payload.status
        state.signUp.message = (payload.data.error !== undefined)? payload.data.error : ''
    },
    login(state, payload) {
        state.login.status = payload.status
        state.login.message = (payload.data.error !== undefined)? payload.data.error : ''
    },
    setToken(state, payload) {
        state.token = payload.token
    },
    loginStatus(state, boolean) {
        state.loginStatus = boolean
    },
    createUser(state, payload) {
        state.users.push(payload)
    }
  },
  actions: {
    signUp({commit}, payload) {
        //eve.holt@reqres.in
        //pistol
        this._vm.$http.post('register', payload)
            .then(response => {
                var response = response
                commit('signUp', response)
                commit('setToken', response.data.token)
            }).catch(error => {
                commit('signUp', error.response)
            })
    },
    login({commit}, payload) {
        //eve.holt@reqres.in
        //cityslicka
        console.log(payload)
        this._vm.$http.post('login', payload)
            .then(response => {
                var response = response
                commit('login', response)
                commit('setToken', response.data.token)
                commit('loginStatus', true)
            }).catch(error => {
                commit('login', error.response)
            })
    },
    addUser({commit}, payload){
        this._vm.$http.post('users', payload)
            .then(response => {
                console.log(response)
                commit('createUser', response.data)
            }).catch(error => {
                console.log(error.response)
            })
    }
  },
  modules: {
  }
})
