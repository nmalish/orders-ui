<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <nav class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/orders" class="nav-link">Orders</router-link>
      <router-link to="/customers" class="nav-link">Customers</router-link>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  z-index: 100;
}

.nav-links {
  display: flex;
  justify-content: center;
}

.nav-link {
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}


</style>