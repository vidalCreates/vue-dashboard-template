<template>
  <v-navigation-drawer 
    v-if="$store.state.user.role == 'admin' && $store.state.loggedIn" 
    :mini-variant="$store.state.navi" 
    v-model="$store.state.loggedIn" 
    width="230"
    app fixed stateless clipped touchless permanent>
    <v-list dense>
      <v-list-tile v-for="(item, index) in items" :key="index" :to="item.to">
        <v-list-tile-action>
          <v-icon medium>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  name: "SideNavigation",
  components: {},
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard", to: { name: "dashboard" }},
        { title: "Manage Users", icon: "people", to: { name: "allUsers" }},
        { title: "Other", icon: "lock", to: { name: "otherAdmin" }},
        { title: "Settings", icon: "settings", to: { name: "settings" } }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
