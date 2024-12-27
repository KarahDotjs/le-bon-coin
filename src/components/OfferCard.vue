<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  offerInfos: Object,
})
</script>

<template>
  <RouterLink :to="{ name: 'offer', params: { id: offerInfos.id } }">
    <div>
      <div>
        <img
          :src="offerInfos.attributes.owner.data.attributes.avatar.data.attributes.url"
          class="avatar"
          alt=""
        />

        <p>{{ offerInfos.attributes.owner.data.attributes.username }}</p>
      </div>
      <img :src="offerInfos.attributes.pictures.data[0].attributes.url" alt="" />
      <p>{{ offerInfos.attributes.title }}</p>
      <p>{{ offerInfos.attributes.price }}€</p>
      <div>
        <p>{{ offerInfos.attributes.publishedAt }}</p>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
img {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
.avatar {
  width: 40px;
  height: 40px;
}
</style>
