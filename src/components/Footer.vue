<script setup></script>

<template>
  <footer>
    <p>
      Made by <a href="https://www.lereacteur.io/"> Le Reacteur </a> with
      <a href="https://vuejs.org/"> Vue.js</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-grey);
}
/* height: 80px;
  width: 100%;
  background-color: var(--light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
} */
p {
  font-size: 1em;
}

a {
  font-weight: bold;
  color: black;
}
</style>
