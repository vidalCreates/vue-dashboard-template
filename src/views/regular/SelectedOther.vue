<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center align-content-start>
      <v-flex xs12 mb-4>
        <span class="headline">Selected Other</span>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 pa-1>
        <v-menu ref="openDate" :close-on-content-click="false" v-model="openDate" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
          <v-text-field slot="activator" v-model="date" label="Select Date" prepend-icon="event" readonly></v-text-field>
          <v-date-picker v-model="date" :allowed-dates="allowedDates" @input="$refs.openDate.save(date)"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 pa-1>
        <v-card color="primary" pa-1>
          <v-toolbar color="primary" dark>
            <v-layout row wrap>
              <v-flex xs7 class="text-xs-left">
                <span class="body-2">Field 2</span>
              </v-flex>
              <v-flex xs3>
                <span class="body-2">Field 3</span>
              </v-flex>
              <v-flex xs2>
                <span class="body-2">Field 4</span>
              </v-flex>
            </v-layout>
          </v-toolbar>
        </v-card>
        <v-card class="class-list" v-if="date">
          <v-list>
            <v-list-tile class="item" v-for="(item, index) in items" :key="index">
              <v-layout row wrap>
                <v-flex xs7 class="text-xs-left">
                  <span class="body-1">{{ item.field2 }}</span>
                </v-flex>
                <v-flex xs3>
                  <span class="body-1">{{ item.field3 }}</span>
                </v-flex>
                <v-flex xs2>
                  <v-checkbox v-model="item.field4" :disabled="!date" class="pa-0"></v-checkbox>
                </v-flex>
              </v-layout>
            </v-list-tile>
          </v-list>
        </v-card> 
        <v-card v-else>
          <v-card-text class="grey--text">
            No Date Selected
          </v-card-text>
        </v-card>
      </v-flex> 
      <v-flex xs12 sm8 offset-sm2 pa-1>
        <v-btn class="btn-submit" block color="info" :disabled="!date" @click="save()">Save Changes</v-btn>
      </v-flex>    
    </v-layout>
  </v-container>
</template>

<script>
export default {
  field2: "SelectedOther",
  components: {},
  data() {
    return {
      date: null,
      openDate: false,
      items: [
        {itemId: "0001", field2: "item 0001", field3: "M", field4: false},
        {itemId: "0002", field2: "item 0002", field3: "M", field4: false},
        {itemId: "0003", field2: "item 0003", field3: "M", field4: false},
        {itemId: "0004", field2: "item 0004", field3: "M", field4: false},
        {itemId: "0005", field2: "item 0005", field3: "M", field4: false}
      ]
    };
  },
  methods: {
    save: function(){            
      this.$store.dispatch('setSnackbar', {show: true, text: "Record saved", color: "success", x:'right', timeout: 3000})
    }
  },
  computed: {
    allowedDates: function(){      
      return val => {
        var d = new Date(val)
        return d.getDay() != 6 && d.getDay() != 5
      }
    }
  }
};
</script>

<style scoped>

.item:hover {
  background-color: lightgray !important;
}

.v-input--checkbox {
  position: absolute;
  right: 5%;
}

</style>
