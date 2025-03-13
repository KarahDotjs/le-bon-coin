<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, inject } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)
const displayPassword = ref(false)

const GlobalStore = inject('GlobalStore')

const router = useRouter()

const handleSubmit = async () => {
  console.log({
    identifier: email.value,
    password: password.value,
  })

  if (email.value && password.value) {
    isSubmitting.value = true
    try {
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
        {
          identifier: email.value,
          password: password.value,
        },
      )

      console.log('response>>>>', data)
      GlobalStore.changeUserInfos({ username: data.user.username, token: data.jwt })

      $cookies.set('userInfos', { username: data.user.username, token: data.jwt })

      router.push({ name: 'home' })
    } catch (error) {
      console.log('catch>>>>>', error)
      errorMessage.value = 'Un problème est survenu, veuillez essayer à nouveau'
    }
    isSubmitting.value = false
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
  }
}
</script>

<template>
  <main>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div>
          <h1>Bonjour !</h1>
          <p>Connectez-vous pour découvrir toutes nos fonctionnalités.</p>
        </div>

        <label for="email"
          >E-mail <sup>*</sup>
          <input type="email" name="email" id="email" v-model="email" @input="errorMessage = ''" />
        </label>
        <label for="password">
          Mot de passe <sup>*</sup>
          <div class="inputPassword">
            <input
              :type="displayPassword ? 'text' : 'password'"
              name="password"
              id="password"
              v-model="password"
              @input="errorMessage = ''"
            />
            <div>
              <font-awesome-icon
                :icon="['far', 'eye-slash']"
                v-if="!displayPassword"
                @click="displayPassword = !displayPassword"
              />
              <font-awesome-icon
                :icon="['far', 'eye']"
                v-else
                @click="displayPassword = !displayPassword"
              />
            </div>
          </div>
        </label>
        <p v-if="isSubmitting">Connexion en cours ...</p>
        <button v-else>Se connecter <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>

        <p v-if="errorMessage" class="errorText">{{ errorMessage }}</p>
        <p>
          Envie de nous rejoindre ?
          <RouterLink :to="{ name: 'signup' }">Créer un compte</RouterLink>
        </p>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - var(--header-height) - var(--footer-height));
}
.container {
  background-image: url(../assets/illustration.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

form {
  height: 30.625rem;
  width: 30rem;
  border-radius: 1.25rem;
  padding: 1.875rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 7px 1px var(--med-grey);
}

input {
  height: 2.813rem;
  border-radius: 15px;
  border: 1px solid var(--dark-grey);

  width: 100%;
}
.inputPassword {
  border: 1px solid var(--dark-grey);
  display: flex;
  border-radius: 15px;
}
.inputPassword > div {
  border-left: 1px solid var(--dark-grey);
  display: flex;
  align-items: center;
  width: 40px;
}
.inputPassword > input {
  flex: 1;
  border: none;
}

p:last-child {
  text-align: center;
}
a {
  font-weight: bold;
  text-decoration: underline;
}

label {
  margin-bottom: 7px;
  font-size: 16px;
  font-weight: 400;
}
span {
  font-weight: bold;
  text-decoration: underline;
}
button {
  border: none;
  background-color: var(--orange);
  font-size: 14px;
  height: 2.813rem;
  border-radius: 15px;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
input:focus {
  outline: none;
}
svg {
  margin-left: 10px;
}

.errorText {
  color: var(--orange);
  text-align: center;
  font-weight: bold;
}
</style>
