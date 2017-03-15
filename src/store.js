import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/userStore'
import deviceStore from './components/devices/deviceStore'
import extensionStore from './components/extensions/extensionStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, deviceStore, extensionStore
  },
  strict: debug
})
