import Vue from 'vue'
import {deviceListUrl, getHeader, deviceUrl, speedDialsUrl, vpeUrl} from './../../config'
const state = {
  deviceList: {},
  currentDevice: null,
  editor: null,
  speedDials: {},
  vpe: {}
}

const mutations = {
  SET_DEVICE_LIST (state, deviceList) {
    state.deviceList = deviceList
  },
  SET_CURRENT_DEVICE (state, device) {
    state.currentDevice = device
  },
  SET_EDITOR (state, editor) {
    state.editor = editor
  },
  SET_SPEED_DIALS (state, speedDials) {
    state.speedDials = speedDials
  },
  SET_VPE (state, vpe) {
    state.vpe = vpe
  }
}

const actions = {
  setDeviceList: ({commit}, deviceList) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    return Vue.http.get(deviceListUrl + authUser.user, {headers: getHeader()})
    .then(response => {
      console.log(response.data.device)
      if (response.status === 200) {
        commit('SET_DEVICE_LIST', response.data.device)
        return response.data.device
      }
    })
  },
  setCurrentDevice: ({commit}, device) => {
    commit('SET_CURRENT_DEVICE', device)
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let authData = authUser.user + '/' + device.id
    return Vue.http.get(deviceUrl + authData, {headers: getHeader()})
      .then(response => {
        console.log(response.data)
        commit('SET_EDITOR', response.data)
    })
  },
  setSpeedDials: ({commit}, speedDials) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let authData = authUser.user + '/' + state.currentDevice.id
    return Vue.http.get(speedDialsUrl + authData, {headers: getHeader()})
      .then(response => {
        commit('SET_SPEED_DIALS', response.data.speedDial)
    })
  },
  setVPE: ({commit}, vpe) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let authData = state.currentDevice.id
    return Vue.http.get(vpeUrl + authData, {headers: getHeader()})
      .then(response => {
        console.log(response.data)
        commit('SET_VPE', response.data)
    })
  }
}

export default {
  state, mutations, actions
}
