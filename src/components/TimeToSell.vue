<script setup>
import BtnPublishOffer from './BtnPublishOffer.vue'
</script>

<template>
  <div class="bloc">
    <img src="../assets/onde-corail.svg" alt="" />

    <div class="sellPart">
      <p>C'est le moment de vendre</p>
      <BtnPublishOffer />
    </div>
    <img src="../assets/feuille-bleue.svg" alt="" />
  </div>
</template>

<style scoped>
.bloc {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--beige);
  height: 80px;
  margin-bottom: 40px;
  border-radius: 20px;
}
.sellPart {
  display: flex;
  align-items: center;
  gap: 20px;
}
.sellPart p {
  font-size: 1.25rem;
  font-weight: bold;
}
img:first-child {
  border-radius: 20px 0 0 20px;
}
img:last-child {
  border-radius: 20px;
}
</style>
