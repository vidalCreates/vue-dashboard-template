<template>
  <v-layout row wrap justify-center align-content-start>
    <v-card width="500px">
      <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>New User</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>  
      <v-flex layout row wrap align-center justify-center pt-4 pl-4 pr-4>
        <v-flex xs12 pr-2 pl-2>
          <v-text-field
            v-model="newUser.userId"
            type="text"
            name="userId"
            label="User ID"
            box
          ></v-text-field>
        </v-flex> 
        <v-flex xs12 sm6 pr-2 pl-2>
          <v-text-field
            v-model="newUser.name"
            type="text"
            name="userName"
            label="User's Name"
            box
          ></v-text-field>
        </v-flex> 
        <v-flex xs12 sm6 pr-2 pl-2>
          <v-text-field
            v-model="newUser.title"
            type="text"
            name="userTitle"
            label="Title"
            box
          ></v-text-field>
        </v-flex> 
        <v-flex xs12 pr-2 pl-2>
          <v-text-field
            v-model="newUser.discipline"
            type="text"
            name="userDiscipline"
            label="Discipline"
            box
          ></v-text-field>
        </v-flex> 
        <v-flex xs12 sm6 pr-2 pl-2>
          <v-select
            :items="$store.getters.userRoles"
            v-model="newUser.role"
            label="Role"
            box
          ></v-select>
        </v-flex>    
        <v-flex xs12 sm6 pr-2 pl-2>
          <v-select
            :items="$store.getters.classrooms"
            v-model="newUser.classrooms"
            label="Classrooms"
            multiple
            box
          ></v-select>
        </v-flex> 
      </v-flex>
      <v-card-actions>
        <v-flex xs12 layout row wrap>
          <v-flex xs12 sm6 pl-3 pr-3 pb-3>
            <v-btn class="btn-submit accent" block dark flat="flat" @click="cancel()">Cancel</v-btn>
          </v-flex>
          <v-flex xs12 sm6 pl-3 pr-3 pb-3>
            <v-btn class="btn-submit info" block dark flat="flat" @click="add()">Add User</v-btn>
          </v-flex>       
        </v-flex>
      </v-card-actions> 
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "NewUser",
  components: {},
  data() {
    return {
      loading: false,
      loadingTime: 1000,
      newUser: { 
        userId: null, 
        name: null, 
        title: null, 
        discipline: null, 
        role: 'regular', 
        classrooms: [] 
      }        
    };
  },
  methods: {
    cancel: function(){      
      // this.$store.dispatch('editUser', null)
      this.$router.push({name: 'allUsers'})
    },
    async add(){
      this.loading = true;
      try{
        // const response = await UserService.getAll()
        // // console.log(response.data)
        // setTimeout(() => {
        //   this.loading = false
        //   this.$store.dispatch('addUser', this.newUser)
        // }, this.loadingTime)        
        this.$store.dispatch('setSnackbar', {show: true, text: "User added successfully", color: "success", x:'right', timeout: 3000})
        this.$router.push({name: 'allUsers'})
      }catch(err){
        console.log(err)
        setTimeout(() => {
          this.loading = false
        }, this.loadingTime)
      }
    }
  }
};
</script>

<style scoped>

</style>
