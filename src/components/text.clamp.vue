<template>
    <div>
        <VueClamp autoresize :max-lines="1" :expanded="expand">
            <slot></slot>
        </VueClamp>
        <v-btn text color="secondary" small @click="expand=!expand">
        {{expand ? "Show Less" : "Show More"}}
        </v-btn>
    </div>
</template>

<script>
import VueClamp from "vue-clamp"

export default {
  name: "TextClamp",
  components: {
    VueClamp
  },
  data: () => ({
    expand: false
  }),
}
</script>