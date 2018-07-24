<template>
  <v-app id="app">
    <Header />
    <SideNavigation />
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </v-content>
    <BottomNavigation />
    <Footer />
    <Snackbar />
  </v-app>
</template>

<script>
import router from '@/router'

import Header from "./components/Header"
import SideNavigation from "./components/SideNavigation"
import BottomNavigation from "./components/BottomNavigation"
import Footer from "./components/Footer"
import Snackbar from "./components/Snackbar"

export default {
  components: {
    Header,
    SideNavigation,
    BottomNavigation,
    Footer,
    Snackbar
  },
  data() {
    return {

    }
  },
  created(){
    // global navigation guards
    router.beforeEach((to, from, next) => {
      // check if user logged in
      if(this.$store.state.loggedIn){
        // attempting to reach an authentication route then redirect to dashboard
        if(to.name == 'signIn'){
          console.log("already logged in")
          if(this.$store.state.role == "regular"){
            next({name: 'home'})
          }else{
            next({name: 'dashboard'})
          }
        }else{
          // attempting to reach route that user is authorized to access
          if(!to.meta.roles || to.meta.roles.includes(this.$store.state.user.role)){
            // proceed to requested page
            next()
          }else{
            next({name: 'notAuthorized'})
          }
        }
      // if user not logged in
      }else{
        // check if this route requires authentication and redirect to fallback
        if(to.matched.some(record => record.meta.requiresAuth)){
          console.log("unauthenticated, log in to access that page")
          next({name: 'notAuthenticated'})
        }else{
          // proceed to requested page
          next()
        }
      }
    })

    // check if session exists and retrieve data and redirect to dashboard
    // if(this.$session.exists()){
    //   if(this.$session.get('jwt') && this.$session.get('user')){
    //     this.$store.dispatch('setToken', this.$session.get('jwt'))
    //     this.$store.dispatch('setUser', this.$session.get('user'))
    //     if(this.$store.state.user.role == 'regular'){
    //       this.$router.push({name: 'home'})
    //     } else {
    //       this.$router.push({name: 'dashboard'})
    //     }
    //   }else{
    //     // destroy session since crutial data missing
    //     this.$session.destroy()
    //   }
    // }

  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-content {
  background: url('./assets/background.jpg');
  background-size: cover;
  background-position: center center;
}

.btn-submit {
  height: 54px;
  text-transform: capitalize;
}
</style>
