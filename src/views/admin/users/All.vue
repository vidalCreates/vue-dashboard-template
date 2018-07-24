<template>
  <v-layout column>
    <v-dialog v-model="dialog" max-width="350" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          <!-- <v-icon medium color="warning">warning</v-icon> -->
          Delete User?
        </v-card-title>
        <v-card-text class="text-xs-left">
          Are you sure you want to delete this record?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="accent" dark flat="flat" @click="dialog = false"><v-icon>close</v-icon></v-btn>
          <v-btn class="info" dark flat="flat" @click="confirmDelete()"><v-icon>check</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-toolbar flat dense class="primary" dark>
        <v-toolbar-title>Manage Users</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field xs6 v-model="searchText" prepend-icon="search" label="Search" color="white" single-line clearable hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" icon @click="getAll()"><v-icon>refresh</v-icon></v-btn>
        <v-btn color="primary" dark class="mb-2" icon :to="{name: 'newUser'}"><v-icon>add</v-icon></v-btn>
      </v-toolbar>

      <v-data-table v-if="$store.state.users" :headers="$store.state.users.headers" :items="$store.state.users.records" :loading="loading" :search="searchText" class="elevation-2">
        <v-progress-linear slot="progress" color="primary" indeterminate></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td v-for="(header, index) in $store.state.users.headers" :key="index" :class="'text-xs-'+header.align">
            <span v-if="header.value != 'actions'">{{ props.item[header.value] }}</span>
            <span v-else>
              <v-btn icon class="grey lighten-4" @click="edit(props.item)">
                <v-icon color="primary">edit</v-icon>
              </v-btn>
              <v-btn icon class="grey lighten-4" @click="deletePrompt(props.item)">
                <v-icon color="accent">delete</v-icon>
              </v-btn>
            </span>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "AllUsers",
  components: {},
  data() {
    return {      
      searchText: null,
      loading: false,
      loadingTime: 1000,
      dialog: false,
      selectedId: null,
      users: {
        headers: [
          { text: 'User ID', align: 'center', sortable: false, value: 'userId' },
          { text: 'Full Name', align: 'center', sortable: false, value: 'name' },
          { text: 'Title', align: 'center', sortable: false, value: 'title' },
          { text: 'Role', align: 'center', sortable: false, value: 'role' },
          { text: 'Actions', align: 'center', sortable: false, value: 'actions' }
        ],
        records: [
          { userId: "0001", name: "Mr. Stephen Vidal", title: "Teacher", role: 'regular' }
        ]
      }
    };
  },
  methods: {
    edit: function(user){
      this.$store.dispatch('editUser', JSON.parse(JSON.stringify(user)))
      this.$router.push({name: 'editUser', params: {id: user.userId}})
    },
    deletePrompt: function(user){
      this.selectedId = user.userId
      this.dialog = true;
    },
    confirmDelete: function(){
      this.dialog = false
      this.$store.dispatch('setSnackbar', {show: true, text: "User '"+ this.selectedId +"' was deleted", color: "warning", x:'right', timeout: 3000})
    },
    async getAll(){
      this.loading = true;
      try{
        // const response = await UserService.getAll()
        // // console.log(response.data)
        setTimeout(() => {
          this.loading = false
          this.$store.dispatch('setUsers', this.users)
          this.$store.dispatch('setSnackbar', {show: true, text: "Users loaded successfully", color: "success", x:'right', timeout: 3000})
        }, this.loadingTime)
      }catch(err){
        console.log(err)
        setTimeout(() => {
          this.loading = false
          this.$store.dispatch('setSnackbar', {show: true, text: "Users loading failed", color: "error", x:'right', timeout: 3000})
        }, this.loadingTime)
      }
    }
  }
};
</script>

<style scoped>

</style>
