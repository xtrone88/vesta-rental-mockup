<template>
  <div class="text-center pa-16">
    <h1 class="pa-8">Page not found</h1>
    <p>Uh oh, we can't seem to find the page you're looking for.<br> Try going back to the previous page.</p>
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
      :to="{ path: '/' }"
    >
      Go to your feed
    </v-btn>
  </div>
</template>

<script>

export default {
  name: "NotFoundPage",
  title: "Not Found",

  data: () => ({
  }),
};
</script>
