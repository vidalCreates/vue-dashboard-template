<template>
    <v-container fluid fill-height>
      <v-layout align-content-space-around justify-center column fill-height> 
        <v-card>
          <v-flex xs12 mt-4 mb-4>
            <span class="display-1">Log In</span>
          </v-flex>
          <v-flex xs12 pl-4 pr-4>
            <v-text-field
              v-model="credentials.userId"
              type="text"
              name="userId"
              label="User ID"
              box
            ></v-text-field>
          </v-flex>
          <v-flex xs12 pl-4 pr-4>
            <v-text-field
              v-model="credentials.password"
              type="password"
              name="password"
              label="Password"
              box
              hint="At least 8 characters"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 pl-4 pr-4>
            <v-radio-group v-model="credentials.role" row>
              <v-radio label="Regular" value="regular"></v-radio>
              <v-radio label="Admin" value="admin"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 pl-4 pr-4>
            <v-btn class="btn-submit" block color="primary" v-on:click="login()">Log In</v-btn>
          </v-flex>
          <v-flex xs12 pl-4 pr-4 class="forgot-pass">
            <span class="subheading">Forgot password?</span>
          </v-flex>
        </v-card>               
      </v-layout>
    </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: "Auth",
  components: {},
  data() {
    return {
      credentials: {
        userId: null,
        password: null,
        role: 'regular'
      }
    };
  },
  methods: {    
    async login(){
      try{
        const response = await AuthenticationService.login(this.credentials)
        // console.log(response.data)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // this.$session.start()
        // this.$session.set('jwt', response.data.token)
        // this.$session.set('user', response.data.user)
        if(this.$store.state.user.role == "regular"){
          this.$router.push({name: 'home'})
        } else {
          this.$router.push({name: 'dashboard'})
        }
        this.$store.dispatch('setSnackbar', {show: true, text: "Logged in as '"+this.$store.state.user.name+"'", color: "success", x:'right', timeout: 3000})
      }catch(err){
        console.log(err.response.data.error)
        this.$store.dispatch('setSnackbar', {show: true, text: "Log in error occured", color: "error", x:'right', timeout: 3000})
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
}

.title {
  margin-bottom: 40px;
}

.forgot-pass {
  margin-top: 20px;
  text-decoration: underline;
  margin-bottom: 40px;
}
</style>
