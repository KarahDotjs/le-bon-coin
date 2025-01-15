<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
axios

import OfferCard from '@/components/OfferCard.vue'

import TimeToSell from '@/components/TimeToSell.vue'

const offerslist = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar',
    )

    offerslist.value = data.data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main>
    <p v-if="offerslist.length === 0" class="container">Chargement en cours ...</p>
    <div class="container" v-else>
      <p>Des millions de petites annonces et autant d’occasions de se faire plaisir</p>

      <TimeToSell />

      <div class="offersList">
        <OfferCard v-for="offer in offerslist" :key="offer.id" :offerInfos="offer" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--header-height) - var(--height-footer));
}
.container {
  padding: 50px;
}

.container > p {
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;

  font-size: 1.5rem;
}

.offersList {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 15px;
}
</style>
