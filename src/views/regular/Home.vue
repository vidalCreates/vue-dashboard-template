<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-content-start>
      <v-flex xs12 mb-4>
        <span class="headline">Welcome to [Project Name]</span>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text"><v-icon color="info darken-2">star</v-icon> Current Streak: {{ streak }} days</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text"><v-icon color="yellow darken-2">star</v-icon> Best Streak: {{ streak }} days</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text">Your Progress</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      streak: 3
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
