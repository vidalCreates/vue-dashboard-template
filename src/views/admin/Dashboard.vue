<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-content-start>
      <v-flex xs12 mb-4>
        <span class="headline">Welcome to [Project Name] Dashboard</span>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>          
          <v-card-title>
            <div>
              <span class="subheading secondary--text">Statistic 1</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text">Statistic 2</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text">Statistic 3</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="subheading secondary--text">Statistic 4</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
