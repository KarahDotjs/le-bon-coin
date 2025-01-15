<script setup>
import { RouterLink } from 'vue-router'
import BtnPublishOffer from './BtnPublishOffer.vue'
import { inject } from 'vue'

const GlobalStore = inject('GlobalStore')
console.log(GlobalStore.userToken)
</script>

<template>
  <header>
    <div class="container">
      <div class="topPart">
        <RouterLink :to="{ name: 'home' }">
          <img src="../assets/logo.svg" alt="" />
        </RouterLink>
        <div class="middlePart">
          <BtnPublishOffer />
          <div>
            <input type="text" name="search" id="search" placeholder="Rechercher sur leBonCoin " />
            <font-awesome-icon :icon="['fas', 'search']" />
          </div>
        </div>
        <div class="userPart">
          <RouterLink :to="{ name: 'login' }" v-if="!GlobalStore.value">
            <div>
              <font-awesome-icon :icon="['far', 'user']" />
              <p>Se connecter</p>
            </div>
          </RouterLink>
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" v-else />
        </div>
      </div>

      <div class="bottomPart">
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
  height: var(--header-height);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid var(--dark-grey);

  /* border: 5px solid red; */
}
.container > div {
  display: flex;
}

/* -- TOP PART ---*/
.topPart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}
.middlePart {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.middlePart > div {
  background-color: var(--light-grey);
  padding: 0.438rem;
  border-radius: 0.625rem;
}
.middlePart > div svg {
  background-color: var(--orange);
  padding: 0.188rem;
  border-radius: 0.313rem;
  box-sizing: content-box;
}
input {
  width: 15.625rem;
  border: none;
  background-color: var(--light-grey);
}
input::placeholder {
  color: black;
}
input:focus {
  outline: none;
}

.userPart div {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  gap: 10px;
}
.userPart svg {
  font-size: 1.125rem;
}
img {
  width: 140px;
}

/* -- BOTTOM PART ---------*/

.bottomPart {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
}
.bottomPart svg {
  font-size: 3px;
}
</style>
