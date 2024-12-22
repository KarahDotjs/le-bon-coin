<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
axios

import OfferCard from '@/components/OfferCard.vue'

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
    <div class="container">
      <p>Des millions de petites annonces et autant d’occasions de se faire plaisir</p>
      <div>
        <p>C'est le moment de vendre</p>
        <button>
          <font-awesome-icon :icon="['far', 'plus-square']" />
          Déposer une annonce
        </button>
      </div>

      <div>
        <OfferCard v-for="offer in offerslist" :key="offer.id" :offerInfos="offer" />
      </div>
    </div>
  </main>
</template>
