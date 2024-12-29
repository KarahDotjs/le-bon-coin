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
    console.log(data.data)

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
f

<style scoped>
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
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
