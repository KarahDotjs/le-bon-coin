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
    console.log(
      'Response offerview >>>',
      data.data.attributes.owner.data.attributes.avatar.data.attributes.url,
    )

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

        <h2>Description</h2>
        <p>{{ offerInfos.attributes.description }}</p>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span> Montreuil(93100)</span>
      </div>
      <div class="ownerInfos">
        <img :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url" alt="" />
        <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>

        <p><font-awesome-icon :icon="['fas', 'check-double']" /> Pièce d’identité vérifiée</p>

        <p><font-awesome-icon :icon="['far', 'clock']" /> Répond généralement en 1 heure</p>
        <button>Acheter</button>
        <button>Message</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
