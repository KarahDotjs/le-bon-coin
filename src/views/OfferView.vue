<script setup>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
import { useCycleList } from '@vueuse/core'

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

const formatedDate = computed(() => {
  return offerInfos.value.attributes.publishedAt.split('T')[0].split('-').reverse().join('/')
})

const cycleList = computed(() => {
  if (offerInfos.value.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(offerInfos.value.attributes.pictures.data)

    return { state, next, prev }
  } else {
    return {}
  }
})
</script>

<template>
  <main>
    <p v-if="offerInfos === null" class="container">Chargement en cours ...</p>

    <div class="container" v-else>
      <div class="leftCol">
        <div class="caroussel">
          <font-awesome-icon
            :icon="['fas', 'angle-left']"
            @click="cycleList.prev()"
            v-if="offerInfos.attributes.pictures.data?.length <= 1"
          />
          <img
            :src="cycleList.state.value.attributes.url"
            alt=""
            @click="cycleList.next()"
            v-if="offerInfos.attributes.pictures.data?.length <= 1"
          />
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </div>
        <p class="title">{{ offerInfos.attributes.title }}</p>
        <p class="price">{{ offerInfos.attributes.price }} €</p>
        <p class="dateInfos">{{ formatedDate }}</p>
        <div class="descBloc">
          <h2>Description</h2>
          <p>{{ offerInfos.attributes.description }}</p>
        </div>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span class="city"> Agon-Coutainville (50230) </span>
      </div>

      <div class="rightCol ownerInfos">
        <div class="owner">
          <div>
            <img
              :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
              alt=""
            />
            <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>
          </div>

          <p class="identity">
            <font-awesome-icon :icon="['fas', 'check-double']" /> Pièce d’identité vérifiée
          </p>
          <p><font-awesome-icon :icon="['far', 'clock']" /> Répond généralement en 1 heure</p>
        </div>

        <div class="buttonPart">
          <button>Acheter</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - var(--header-height) - var(--height-footer));
}
.container {
  display: flex;
  gap: 20px;
}

.leftCol img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  margin-bottom: 40px;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.price {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.dateInfos {
  font-size: 0.75rem;
  color: var(--dark-grey);
  margin-bottom: 50px;
}
h2 {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 20px 0px;
}
.descBloc {
  padding: 20px 0px;
  border-top: 1px solid var(--med-grey);
  border-bottom: 1px solid var(--med-grey);
  margin-bottom: 20px;
}
.city {
  border-top: 1px solid var(--med-grey);
  margin: 50px 0px 25px;
  padding-top: 20px;
}
.leftCol {
  width: 67%;
}

/* --- RIGH COL ------*/
.rightCol {
  width: 33%;
  box-shadow: 0 0 5px var(--med-grey);

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 22.813rem;
}
.owner > div {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.owner img {
  height: 65px;
  width: 65px;
  border-radius: 50%;
}
.owner > div p {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.125rem;
}
.identity {
  color: var(--light-brown);
  background-color: var(--beige);
  border-radius: 20px;
  font-size: 12px;
  padding: 3px;
  width: fit-content;
  margin-bottom: 20px;
}
.identity + p {
  margin-top: 20px;
  font-size: 0.875rem;
  margin-bottom: 20px;
}
.buttonPart {
  border-top: 1px solid var(--med-grey);
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.buttonPart button {
  font-size: inherit;
  border: none;
  padding: 15px;
  font-weight: 700;
  color: white;
  border-radius: 15px;
}
.buttonPart :first-child {
  background-color: var(--orange);
}
.buttonPart :last-child {
  background-color: var(--blue);
}
.caroussel {
  display: flex;
  align-items: center;
}
.caroussel svg {
  font-size: 20px;
  cursor: pointer;
}
</style>
