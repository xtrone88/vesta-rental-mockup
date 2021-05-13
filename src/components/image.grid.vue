<template>
  <v-dialog
      v-model="show"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
    <div class="white">
      <v-row no-gutters>
        <v-col :class="suitclass(i)" v-for="(p, i) in pictures" :key="i" :cols="suitcols(i)">
          <v-img :src="p.large ? p.large : p.original">
          </v-img>
        </v-col>
      </v-row>
      <v-btn icon dark x-small color="white" outlined @click="show = false"
        style="position:fixed;left:5px;top:5px;">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "PictureGrid",
  props: {
     value: Boolean,
     pictures: Array
  },
  methods: {
    suitcols(i) {
      return i % 3 == 0 ? 12 : 6;
    },
    suitclass(i) {
      if (i % 3 == 1) {
        return ['pr-1', 'pt-2', 'pb-2'];
      } else if (i % 3 == 2) {
        return ['pl-1', 'pt-2', 'pb-2'];
      } else {
        return "";
      }
    }
  },
  computed: {
    show: {
      get () {
        return this.value;
      },
      set (value) {
         this.$emit("close", value);
      }
    }
  },
  data: () => ({
    index: null
  })
}
</script>