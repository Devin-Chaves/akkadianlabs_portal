<script>
  import {mapState} from 'vuex'
  import DeviceList from './../components/devices/DeviceList'
  import DeviceDashboard from './../components/devices/DeviceDashboard'
  import DeviceDetails from './../components/devices/DeviceDetails'
  import {deviceListUrl, getHeader} from './../config'

  export default {
    components: {
      'device-dashboard': DeviceDashboard,
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
    mounted() {
    // eslint-disable-next-line
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
    console.log('I was mounted')
    }
  }
</script>

<template>
  <div class="row left u-ml--large">
    <device-dashboard></device-dashboard>
    <!-- <device-details></device-details> -->
  </div>
</template>

<style lang="scss">
  .left {
    margin-left: 0;
  }
</style>
