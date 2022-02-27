<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
