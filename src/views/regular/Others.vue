<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-content-start>
      <v-flex v-for="(item, index) in others" :key="index" v-on:click="selectOther(item)" xs6 sm4 md3 xl2 pa-2>
        <v-card>
          <v-card-title>
            <div>
              <span class="title primary--text">{{ item.field1 }}</span>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <span class="subheading">{{ item.field2 }}</span>
            </div>
          </v-card-text>
        </v-card> 
      </v-flex>     
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Others",
  components: {},
  data() {
    return {
      others: [
        {field1: "0001", field2: "Example"},
        {field1: "0002", field2: "Example"},
        {field1: "0003", field2: "Example"},
        {field1: "0004", field2: "Example"},
        {field1: "0005", field2: "Example"},
        {field1: "0006", field2: "Example"}
      ]
    };
  },
  methods: {
    selectOther: function(item){      
      this.$router.push({
        name: 'selectedOther', 
        params: {id: item.field1}
      })
    }
  }
};
</script>

<style scoped>

.v-card:hover {
  background-color: teal !important;
}

.v-card:hover * {
  color: white !important;
}
</style>
