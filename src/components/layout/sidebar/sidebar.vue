<template>
  <v-navigation-drawer v-model="Sidebar_drawer" app temporary>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <template v-for="(item, i) in items">
          <template v-if="item.to">
            <v-list-item :key="i" :to="item.to">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-item :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarItems from "./sidebar.items";

export default {
  name: "Sidebar",

  components: {},

  computed: {
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
    },
  },

  data: () => ({
    items: SidebarItems,
    group: null
  }),
};
</script>
