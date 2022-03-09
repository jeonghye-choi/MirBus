<template>
  <header>
    <logo>
      <router-link to="/"> MIRBUS </router-link>
    </logo>
    <nav>
      <router-link to="/timetable">
        <v-icon icon="mdi:mdi-minus" />
      </router-link>
      <v-icon icon="mdi:mdi-minus" />
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<script></script>

<style lang="scss" scoped>
header {
  border-bottom: 0.5px solid #ececec;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  logo {
    margin-bottom: -6px;

    a {
      text-decoration: none;
      color: #1f1f1f;
      font-family: Montserrat;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    }
  }

  nav {
    i {
      width: 24px;
      height: 24px;
      background: gray;
      margin-left: 13px;
      cursor: pointer;
    }
  }
}

main {
  padding: 0 16px;
  height: calc(100vh - 46px);
}
</style>
