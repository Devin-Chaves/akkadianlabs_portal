<script>
  import {mapState} from 'vuex'
  import DeviceList from './../components/devices/DeviceList'
  import {deviceListUrl, getHeader} from './../config'

  export default {
    components: {
      'device-list': DeviceList
    },
    computed: {
      ...mapState({
        deviceStore: state => state.deviceStore
      })
    },
    created () {
      this.$store.dispatch('setDeviceList')
    },
    methods: {
      handleGetDevices () {
        const authUser = JSON.parse(window.localStorage.getItem('authUser'))
        this.$http.get(deviceListUrl + '/' + authUser.user, {headers: getHeader()})
        .then(response => {
          console.log('devices', response.data)
        })
      }
    }
  }
</script>

<template>
  <div class="wrapper" id="home-wrapper">
    <!-- <div class="col-sm-2">
      <button v-on:click="handleGetDevices()" class="btn btn-primary">Get Devices</button>
    </div> -->
    <br>
    <div class="col-md-6">
      <device-list></device-list>
    </div>
  </div>
</template>
