<template>
  <div>
    <v-col class="mb-5" cols="12">
      <v-row>
        <p> {{ field }} </p>
        <v-spacer></v-spacer>
        <a v-on:click="change" color="primary">{{ showText }}</a>
      </v-row>
      <v-row>
        <v-text-field
          ref="edit"
          :value= "valueEdit" 
          :readonly="!showFlag"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col cols="12" sm="2">
          <v-btn v-show="showFlag" small color="cyan" class="white--text">Save</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>

export default {
  name: "InfoForm",
  props: ['field', 'valueEdit'],

  components: {
    
  },
  data: () => ({
    index: null,
    showText: "Edit",
    showFlag: false,
  }),
  methods: {
    change: function () {
      if(this.showText == "Edit") {
        this.showText = "Cancel";
        this.showFlag = true;
        this.$refs["edit"].focus();
      }
      else {
        this.showText = "Edit";
        this.showFlag = false;
        this.$refs["edit"].readonly = true;
      }
    },
  }
};
</script>
