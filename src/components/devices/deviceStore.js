import Vue from 'vue'
import {deviceListUrl, getHeader} from './../../config'
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
    return Vue.http.get(deviceListUrl + '/' + authUser.user, {headers: getHeader()})
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        commit('SET_DEVICE_LIST', response.data.device)
        return response.data.device
      }
    })
  }

}

export default {
  state, mutations, actions
}
