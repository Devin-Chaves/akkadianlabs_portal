import Vue from 'vue'
import {extensionsUrl, getHeader} from './../../config'
const state = {
  extensionList: {},
  currentExtension: null,
}

// const getters = {
//   voicemail: state => {
//     return state.currentExtension.callForward.voicemail
//   },
//   destination: state => {
//     return state.currentExtension.callForward.destination
//   },
//   extensionId: state => {
//     return state.currentExtension.callForward.currentExtension.id
//   }
// }

const mutations = {
  SET_EXTENSION_LIST (state, extensionList) {
    state.extensionList = extensionList
  },
  SET_CURRENT_EXTENSION (state, currentExtension) {
    state.currentExtension = currentExtension
  }
}

const actions = {
  setExtensionList: ({commit}, extensionList) => {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    let authData = authUser.user
    return Vue.http.get(extensionsUrl + authData, {headers: getHeader()})
      .then(response => {
        commit('SET_EXTENSION_LIST', response.data)
    })
  },
  setCurrentExtension: ({commit}, currentExtension) => {
    commit('SET_CURRENT_EXTENSION', currentExtension)
  }
}

export default {
  state, mutations, actions
}
