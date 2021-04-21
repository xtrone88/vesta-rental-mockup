<template>
  <div>
    <v-col :class="mb-5" cols="12">
      <v-row>
        <p> {{ field }} </p>
        <v-spacer></v-spacer>
        <a v-on:click="change" color="primary">{{ showText }}</a>
      </v-row>
      <v-row>
        <v-text-field v-if="type=='text'"
          ref="edit"
          :value= "valueEdit" 
          :readonly="!btnShowFlag"
        ></v-text-field>
        <v-menu v-if="type=='date'"
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              readonly
              v-model="date"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-show="btnShowFlag"
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="changeData"
          ></v-date-picker>
        </v-menu>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-btn v-on:click="save" v-show="btnShowFlag" big color="cyan" class="white--text">Save</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>

export default {
  name: "InfoForm",
  props: ['field', 'valueEdit', 'type'],

  components: {
    
  },
  data: () => ({
    index: null,
    showText: "Edit",
    btnShowFlag: false,
    date: "1998-10-15",
    menu: false,
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
  },
  methods: {
    change: function () {
      if(this.showText == "Edit") {
        if(this.type == "text") {
          this.showText = "Cancel";
          this.btnShowFlag = true;
          this.$refs["edit"].focus();
        }
        else{
          this.showText = "Cancel";
          this.btnShowFlag = true;
        }
      }
      else {
        if(this.type == "text") {
          this.showText = "Edit";
          this.btnShowFlag = false;
        }
        else{
          this.showText = "Edit";
          this.btnShowFlag = false;
        }
      }
    },
    changeData (date) {
      this.$refs.menu.save(date)
    },

    save: function() {
      if(this.type == "text") {
        this.showText = "Edit";
        this.btnShowFlag = false;
      }
      else{
        this.showText = "Edit";
        this.btnShowFlag = false;
      }
    }
  }
};
</script>
