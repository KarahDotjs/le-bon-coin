<script setup>
import { RouterLink } from 'vue-router'

RouterLink
</script>

<template>
  <main>
    <div class="container">
      <RouterLink :to="{ name: 'signup' }">
        <p>Envie de nous rejoindre ? Créer un compte</p>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>
