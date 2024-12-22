<script setup>
const props = defineProps({
  offerInfos: Object,
})

console.log(props)
</script>

<template>
  <div>
    <img :src="offerInfos.attributes.pictures.data[0].attributes.url" alt="" />

    <p>{{ offerInfos.attributes.title }}</p>
    <p>{{ offerInfos.attributes.price }}€</p>
    <p>{{ offerInfos.attributes.publishedAt }}</p>
  </div>
</template>

<style scoped></style>
