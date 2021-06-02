<template>
  <q-item v-if="$auth.isAuthenticated" clickable tag="a" :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon class="text-blue-1" style="font-size: 2em" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-blue-1 text-inter" style="font-size: 1rem">{{
        title
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "MenuLinks",
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: ""
    }
  }
};
</script>
