<template>
  <v-bottom-nav v-if="$store.state.user.role == 'regular'" v-model="$store.state.loggedIn" color="white" app>
    <v-btn v-for="(item, index) in items" :key="index" :value="item.title" :to="item.to" color="primary" flat>
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: "BottomNavigation",
  components: {},
  data() {
    return {
      items: [
        {title: "Home", icon: "home", to: { name: "home" }},
        {title: "Others", icon: "class", to: { name: "others" }},
        {title: "Settings", icon: "settings", to: { name: "settings" }},
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.v-bottom-nav {
  width: 100vw;
}

.v-btn {
  max-width: 33.3vw;
}
</style>
