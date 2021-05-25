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
        <q-item v-if="$auth.isAuthenticated" clickable tag="a" to="/profile">
          <q-item-section avatar>
            <q-icon
              class="text-blue-1"
              style="font-size: 2em"
              name="mdi-account"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-blue-1 text-inter" style="font-size: 1rem"
              >Account</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item v-if="$auth.isAuthenticated" clickable tag="a" @click="logout">
          <q-item-section avatar>
            <q-icon
              class="text-blue-1"
              style="font-size: 2em"
              name="mdi-exit-run"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-blue-1 text-inter" style="font-size: 1rem"
              >Sign Out</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item v-if="!$auth.isAuthenticated" clickable tag="a" @click="login">
          <q-item-section avatar>
            <q-icon
              class="text-blue-1"
              style="font-size: 2em"
              name="mdi-log-in"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-blue-1 text-inter" style="font-size: 1rem"
              >Sign In</q-item-label
            >
          </q-item-section>
        </q-item>
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
    icon: "mdi-book-open-blank-variant",
    to: "/lists"
  },
  {
    title: "Favorites",
    icon: "mdi-emoticon-happy-outline",
    to: ""
  },
  {
    title: "Series / Collection",
    icon: "mdi-checkbox-multiple-blank-outline",
    to: ""
  },
  {
    title: "Articles",
    icon: "mdi-newspaper-variant-outline",
    to: ""
  },
  {
    title: "Dashboard",
    icon: "mdi-chart-bar",
    to: ""
  },
  {
    title: "Add Item",
    icon: "mdi-plus-circle-outline",
    to: ""
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
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
