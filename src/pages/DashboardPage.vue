<script>
  import {mapState} from 'vuex'
  import DeviceList from './../components/devices/DeviceList'
  import DeviceDetails from './../components/devices/DeviceDetails'
  import {deviceListUrl, getHeader} from './../config'

  export default {
    components: {
      'device-list': DeviceList,
      'device-details': DeviceDetails
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
    }
  }
</script>

<template>
  <div class="wrapper" id="home-wrapper">
    <div class="col-sm-4">
      <device-list></device-list>
  </div>
  <div class="col-sm-8">
    <device-details></device-details>
  </div>
</template>
