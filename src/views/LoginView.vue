<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, inject } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const GlobalStore = inject('GlobalStore')

const router = useRouter()

const handleSubmit = async () => {
  console.log({
    identifier: email.value,
    password: password.value,
  })

  try {
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
      {
        identifier: email.value,
        password: password.value,
      },
    )

    console.log('response>>>>', data)
    GlobalStore.changeToken(data.jwt)

    router.push({ name: 'home' })
  } catch (error) {
    console.log('catch>>>>>', error)
  }
}
</script>

<template>
  <main>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <h1>Bonjour !</h1>
        <h2>Connectez-vous pour découvrir toutes nos fonctionnalités.</h2>

        <label for="email">E-mail <sup>*</sup></label
        ><input type="email" name="email" id="email" v-model="email" />
      </form>

      <label for="password"> Mot de passe <sup>*</sup></label
      ><input type="password" name="" id="password" v-model="password" />

      <button>Se connecter</button>

      <p>Envie de nous rejoindre ?</p>
      <RouterLink :to="{ name: 'signup' }">Créer un compte</RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>
