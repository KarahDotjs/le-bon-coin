<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: String,
})

const offerInfos = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar
       `,
    )
    console.log('Response offerview >>>', data.data.attributes.title)

    offerInfos.value = data.data
  } catch (error) {
    console.log('catch offerView >>>', error)
  }
})
</script>

<template>
  <main>
    <p v-if="offerInfos === null" class="container">Chargement en cours ...</p>

    <div class="container" v-else>
      <div>
        <img :src="offerInfos.attributes.pictures.data[0].attributes.url" alt="" />
        <p>{{ offerInfos.attributes.title }}</p>
        <p>{{ offerInfos.attributes.price }} €</p>
        <p>{{ offerInfos.attributes.publisheAt }} €</p>
      </div>
      <div></div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
