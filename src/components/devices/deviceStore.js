import Vue from 'vue'
import {deviceListUrl} from './../../config'
const state = {
  deviceList: {}
}

const mutations = {
  SET_DEVICE_LIST (state, deviceList) {
    state.deviceList = deviceList
  }
}

const actions = {
  setDeviceList: ({commit}, deviceList) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    return Vue.http.get(deviceListUrl, {params: {sid: authUser.session}})
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        commit('SET_DEVICE_LIST', response.body.data)
        return response.body.data
      }
    })
  }

}

export default {
  state, mutations, actions
}
