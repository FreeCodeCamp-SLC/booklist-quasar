<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Bookist
        </q-toolbar-title>

        <div class="q-py-md">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-blue-1 text-inter text-h5">
          Bookist
        </q-item-label>
        <MenuLinks
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuLinks from "components/MenuLinks.vue";

const linksData = [
  {
    title: "Lists",
    icon: "mdi-book-open-blank-variant"
  },
  {
    title: "Favorites",
    icon: "mdi-emoticon-happy-outline"
  },
  {
    title: "Series / Collection",
    icon: "mdi-checkbox-multiple-blank-outline"
  },
  {
    title: "Articles",
    icon: "mdi-newspaper-variant-outline"
  },
  {
    title: "Dashboard",
    icon: "mdi-chart-bar"
  },
  {
    title: "Add Item",
    icon: "mdi-plus-circle-outline"
  }
];

export default {
  name: "MainLayout",
  components: { MenuLinks },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
