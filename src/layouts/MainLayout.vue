<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="main-layout">
    <Header class="header"/>
    <sidebar class="sidebar"/>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  --header-height: 80px;
  --side-bar-width: 25%;

  .header {
    height: var(--header-height);
    border-bottom: 1px solid #dddddd;
  }

  .sidebar {
    width: var(--side-bar-width);
    margin-top: var(--header-height);
    border-right: 1px solid #dddddd;
  }

  .main {
    margin-top: var(--header-height);
    margin-left: var(--side-bar-width);
  }
}
</style>
