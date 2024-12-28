<script setup>
import BtnPublishOffer from './BtnPublishOffer.vue'
</script>

<template>
  <header>
    <div class="container">
      <div>
        <img src="../assets/logo.svg" alt="" />
        <div>
          <BtnPublishOffer />
          <div>
            <input type="text" name="search" id="search" />
            <font-awesome-icon :icon="['fas', 'search']" />
          </div>
        </div>
        <div>
          <div>
            <font-awesome-icon :icon="['far', 'user']" />
            <p>Se connecter</p>
          </div>
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </div>
      </div>
      <div>
        <span>Immobilier</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Véhicules</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Locations de vacances</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Emploi</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Mode</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Maison & Jardin</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Famille</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Electronique</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Loisirs</span>
        <font-awesome-icon :icon="['fas', 'circle']" />
        <span>Autres</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 110px;
  border: 1px solid green;
}
.container > div {
  border: 1px solid red;
  display: flex;
}
.container {
  border: 2px solid blue;
}
img {
  width: 140px;
}
</style>
