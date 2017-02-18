<template lang="html">
  <div class="wrapper" id="device-list-wrapper" >
    <!-- TODO Turn this into router link -->

      <ul class="list-group">
        <li class="list-group-item"
        :class="[{active: deviceActiveStyle(device)}]"
        v-for="device in deviceStore.deviceList"
        v-on:click="changeDevice(device)">
          <strong>{{device.description}}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState ({
      deviceStore: state => state.deviceStore
    })
  },
  methods: {
  deviceActiveStyle (device) {
    if (this.deviceStore.currentDevice === null) {
      return false
    }
    if (this.deviceStore.currentDevice.id === device.id) {
      return true
    }
    return false
  },
  changeDevice (device) {
    this.$store.dispatch('setCurrentDevice', device)
    this.$store.dispatch('setSpeedDials')
    }
  }
}
</script>

<style lang="css">
</style>
