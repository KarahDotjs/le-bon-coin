<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)
const displayPassword = ref(false)

const GlobalStore = inject('GlobalStore')

const router = useRouter()

// console.log('GlobalStore>>>>', GlobalStore)

const handleSubmit = async () => {
  console.log({
    username: username.value,
    email: email.value,
    password: password.value,
  })

  if (username.value && email.value && password.value) {
    isSubmitting.value = true
    try {
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register',
        {
          username: username.value,
          email: email.value,
          password: password.value,
        },
      )
      console.log('response>>', data)
      GlobalStore.changeToken(data.jwt)

      router.push({ name: 'home' })
    } catch (error) {
      console.log('catch>>>>>>', error)
      errorMessage.value = 'Un problème est survenu, Veuillez essayer à nouveau'
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
          <P>Inscrivez-vous pour découvrir toutes nos fonctionnalités.</P>
        </div>
        <label for="username"
          ><span>Nom <sup>*</sup> </span></label
        ><input
          type="text"
          name="username"
          id="username"
          v-model="username"
          @input="errorMessage = ''"
        />

        <label for="email">
          <span>Email<sup>*</sup></span>
          <input type="email" name="email" id="email" v-model="email" @input="errorMessage = ''" />
        </label>

        <label for="password">
          <span>Mot de passe <sup>*</sup></span>
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

        <p v-if="isSubmitting">Insription en cours ...</p>

        <button v-else>S'incrire <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>

        <p v-if="errorMessage" class="errorText">{{ errorMessage }}</p>

        <p>
          Vous avez déjà un compte ?
          <RouterLink :to="{ name: 'login' }"> Connectez-vous </RouterLink>
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
div p {
  font-size: 16px;
}
form {
  height: 30.625rem;
  width: 30rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 7px 1px var(--med-grey);
}
h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 24px;
}
input {
  height: 2.813rem;
  border-radius: 15px;
  width: 100%;
}
.inputPassword {
  border: 1px solid black;
  display: flex;
  border-radius: 15px;
}
.inputPassword > div {
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  width: 40px;
}
.inputPassword > input {
  flex: 1;
  border: none;
}

input:focus {
  outline: none;
}
label {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  border: none;
  background-color: var(--orange);
  font-size: 14px;
  height: 2.813rem;
  border-radius: 15px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
}

a {
  font-weight: bold;
  text-decoration: underline;
}
svg {
  margin-left: 10px;
}
p:last-child {
  text-align: center;
}
.errorText {
  color: var(--orange);
  text-align: center;
  font-weight: bold;
}
</style>
