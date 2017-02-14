import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/userStore'
import deviceStore from './components/devices/deviceStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, deviceStore
  },
  strict: debug
})
