<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  offerInfos: Object,
})

const formatedDate = computed(() => {
  return props.offerInfos.attributes.publishedAt.split('T')[0].split('-').reverse().join('/')
})

const formatedPrice = computed(() => {
  const price = props.offerInfos.attributes.price

  const priceStr = price.toString()

  let newStr = ''

  for (let i = priceStr.length - 1; i >= 0; i--) {
    if (i === priceStr.length - 4 || i === priceStr.length - 7) {
      newStr = priceStr[i] + ' ' + newStr
    } else {
      newStr = priceStr[i] + newStr
    }
  }

  return newStr
})
</script>

<template>
  <RouterLink :to="{ name: 'offer', params: { id: offerInfos.id } }" class="offerCard">
    <div>
      <div class="ownerInfos">
        <img
          :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
          class="avatar"
          alt=""
          v-if="offerInfos.attributes.owner.data.attributes.avatar"
        />
        <!-- ajouter data au v-if si beug -->

        <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>
      </div>
      <img :src="offerInfos.attributes.pictures.data[0].attributes.url" alt="" />
      <p>{{ offerInfos.attributes.title }}</p>
      <p>{{ formatedPrice }}€</p>
      <div>
        <p class="dateAd">{{ formatedDate }}</p>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.offerCard {
  width: calc((100% - 60px) / 5);
}
.offerCard > div > img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 15px;
}
.offerCard > div > p {
  font-weight: bold;
  margin-bottom: 5px;
}
.ownerInfos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.ownerInfos p {
  font-weight: bold;
  font-size: 12px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
.offerCard > div > div {
  display: flex;
  gap: 20px;
  /* justify-content: space-between; */
}
.dateAd {
  color: var(--dark-grey);
  font-size: 0.75rem;
}
.dateAd + svg {
  font-size: 18px;
}
</style>
