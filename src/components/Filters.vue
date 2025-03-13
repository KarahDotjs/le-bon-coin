<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['sort', 'pricemin', 'pricemax'])
console.log('props>>', props)
const priceMin = ref(props.pricemin)
const priceMax = ref(props.pricemax)
const sort = ref(props.sort)

const router = useRouter()

const handleSumbit = () => {
  const queries = { ...props }

  if (priceMin.value) {
    queries.pricemin = priceMin.value
  } else {
    delete queries.pricemin
  }

  if (priceMax.value) {
    queries.pricemax = priceMax.value
  } else {
    delete queries.pricemax
  }
  if (sort.value) {
    queries.sort = sort.value
  } else {
    delete queries.sort
  }

  // Penser à mettre la page à 1

  router.push({
    name: 'home',
    query: queries,
  })
}
</script>

<template>
  <form @submit.prevent="handleSumbit">
    <div class="pricePart">
      <p>Prix</p>
      <div>
        <div>
          <input
            type="number"
            name="priceMin"
            id="priceMin"
            placeholder="Minimum"
            min="0"
            v-model="priceMin"
          />
          <label for="priceMin">€</label>
        </div>
        <div>
          <input
            type="number"
            name="priceMax"
            id="priceMax"
            :min="priceMin"
            placeholder="Maximum"
            v-model="priceMax"
          />
          <label for="priceMax">€</label>
        </div>
      </div>
    </div>
    <div>
      <p>Tri</p>
      <div>
        <label>
          prix croissance
          <input type="radio" value="price:asc" id="priceAsc" v-model="sort" />
        </label>
        <label>
          Prix décroissant
          <input type="radio" value="price:desc" id="priceDesc" v-model="sort" />
        </label>
        <label>
          Pas de tri
          <input type="radio" value="" id="noSort" v-model="sort" />
        </label>
        <!-- <p>{{ sort }}</p> -->
      </div>
    </div>

    <button>Rechercher</button>
  </form>
</template>

<style scoped>
/* .pricePart {
  display: flex;
  gap: 20px;
}
.sortPart {
  display: flex;
}
.pricePart > p {
  font-weight: 700;
  margin-bottom: 10px;
}
.sortPart > p {
  font-weight: 700;
  margin-bottom: 10px;
}
form {
  display: flex;
  gap: 40px;
  justify-content: space-between; */
</style>
