<template>
  <header>
    <logo>
      <router-link to="/"> MIRBUS </router-link>
    </logo>
    <nav>
      <router-link to="/timetable">
        <img src="" />
      </router-link>
      <img src="" />
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style></style>
