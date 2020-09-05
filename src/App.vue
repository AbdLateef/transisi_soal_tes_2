<template>
  <div id="app">
    <div class="wrapper">
        <div class="container">
            <div class="col-left">
                <div class="col-left-container">
                  <h1>Hi Abdul Lathif</h1>
                    <div v-if="loggedIn.status !== 200 && loginStatus == false" class="login">
                        <span>Please Login or Sign Up to Continue browsing</span>
                        <form class="form" id="signup">
                          <input type="email" id="email" placeholder="Email" v-model="email" required>
                          <input type="password" id="password" placeholder="Password" v-model="password" required>
                          <button 
                            type="button" 
                            id="login-button" 
                            class="loginbutton"
                            @click="login()"
                          >
                            Login
                          </button>
                          <button 
                            type="button" 
                            id="signup-button" 
                            class="loginbutton" 
                            @click="signUp()"
                          >
                            Sign Up
                          </button>
                        </form>
                        <div v-if="register.status == 200">
                          <span style="color: green">Success Register</span>
                        </div>
                        <div v-else>
                          <span style="color: red">{{ register.message }}</span>
                        </div>
                        <div v-if="loginStatus.status !== 200">
                          <span style="color: red">{{ loginStatus.message }}</span>
                        </div>
                    </div>
                    <div v-else>
                    <!-- <div> -->
                      <Nav/>
                    </div>
                </div>
            </div>
            <div v-if="loggedIn.status == 200 && loginStatus" class="col-right">
                <div class="col-right-container">
                    <section class="project-detail">
                        <div class="project-detail-heading">
                            <div class="project-title">
                                <transition name="slide" mode="out-in">
                                    <router-view></router-view>
                                </transition>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import Nav from './components/nav.vue'

export default {
  components: {
    Nav,
  },
  name: 'app',
  data () {
    return {
      register: [],
      loggedIn: [],
      email: '',
      password: '',
    }
  },
  mounted () {
    this.$http.get('users?page=2')
      .then(response => {
        //console.log(response)
    })
  },
  methods: {
    signUp(){
      this.$store.dispatch('signUp', {email: this.email, password: this.password})
      this.register = this.$store.getters.signUp
    },
    login(){
      this.$store.dispatch('login', {email: this.email, password: this.password})
      this.loggedIn = this.$store.getters.login
    },
    logout(){
      this.$store.commit('loginStatus', false)
      location.reload()
    }
  },
  computed: {
    loginStatus(){
      return this.$store.getters.loginStatus
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
