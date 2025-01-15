import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faSignOutAlt,
  faSearch,
  faCircle,
  faMapMarkerAlt,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons'
import {
  faUser,
  faPlusSquare,
  faHeart,
  faClock,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons'
library.add(
  faSignOutAlt,
  faUser,
  faSearch,
  faPlusSquare,
  faCircle,
  faHeart,
  faMapMarkerAlt,
  faCheckDouble,
  faClock,
  faEyeSlash,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

const userToken = ref('test')

const changeToken = (token) => {
  userToken.value = token
}

app.provide('GlobalStore', {
  userToken: userToken,
  changeToken: changeToken,
})

app.mount('#app')
