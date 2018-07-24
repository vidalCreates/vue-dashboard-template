<template>
  <v-container fluid pa-0 fill-height>
    <v-layout align-content-center justify-center column>
      <v-flex class="primary" layout row wrap xs12 justify-center text-xs-center pa-4>
        <v-flex xs12>
          <v-avatar size="150px" color="primary">
            <v-icon size="150px" dark>account_circle</v-icon>
          </v-avatar>
        </v-flex>
        <v-flex xs12>
          <span class="headline white--text">{{ $store.state.user.name }}</span>
        </v-flex>
      </v-flex>
      <!-- <v-flex xs12 layout row wrap justify-center> -->
        <v-card>
          <v-flex xs12 sm6 offset-sm3 pt-4 pl-4 pr-4>
            <v-text-field
              :value="$store.state.user.userId"
              type="text"
              name="userId"
              label="User ID"
              readonly
              box
            ></v-text-field>
          </v-flex>
          <v-flex v-if="edit" xs12 sm6 offset-sm3 pl-4 pr-4>
            <v-text-field
              v-model="form.password"
              type="password"
              name="currentPassword"
              label="Current Password"
              box
            ></v-text-field>
          </v-flex>
          <v-flex v-if="edit" xs12 sm6 offset-sm3 pl-4 pr-4>
            <v-text-field
              v-model="form.newPassword"
              type="password"
              name="newPassword"
              label="New Password"
              box
            ></v-text-field>
          </v-flex>
          <v-flex v-if="edit" xs12 sm6 offset-sm3 pl-4 pr-4>
            <v-text-field
              v-model="form.confirmPassword"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              box
            ></v-text-field>
          </v-flex>
          <v-card-actions>
            <v-flex v-if="!edit" xs12 sm6 offset-sm3 pl-4 pr-4 mt-3 pb-4>
              <v-btn class="btn-submit" block color="primary" @click="changePassword()">Change Password</v-btn>
            </v-flex>
            <v-flex v-if="edit" xs12 sm6 offset-sm3 layout row wrap>
              <v-flex xs12 sm6 pl-3 pr-3 pb-3>
                <v-btn class="btn-submit accent" block dark flat="flat" @click="cancelPassword()">Cancel</v-btn>
              </v-flex>
              <v-flex xs12 sm6 pl-3 pr-3 pb-3>
                <v-btn class="btn-submit info" block dark flat="flat" @click="savePassword()">Save Changes</v-btn>
              </v-flex>       
            </v-flex>
          </v-card-actions> 
        </v-card>
      <!-- </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  data() {
    return {  
      edit: false,    
      form: {
        password: "",
        newPassword: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    changePassword: function(){
      this.edit = true
    },
    cancelPassword: function(){
      this.edit = false
      this.form.password = null
      this.form.newPassword = null
      this.form.confirmPassword = null
    },
    savePassword: function(){
      this.edit = false
      this.form.password = null
      this.form.newPassword = null
      this.form.confirmPassword = null
      this.$store.dispatch('setSnackbar', {show: true, text: "Password changed successfully", color: "success", x:'right', timeout: 3000})
    }
  }
};
</script>

<style scoped>

</style>
