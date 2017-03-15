<template lang="html">
    <div class="large-6 columns">
      <ul class="Box Box--inlineResource">
        <li class="Box" :class="[{active: deviceActiveStyle(device)}]" v-for="device in deviceStore.deviceList" v-on:click="changeDevice(device)">

        <div class="row">
          <div class="small-6 columns">
            <div><strong>{{device.description}}</strong></div>
            <small>{{device.model}}</small>
          </div>
          <div class="small-6 columns">
            <div><strong>{{device.description}}</strong></div>
            <small>{{device.model}}</small>
          </div>
        </div>
      </li>
    </ul>
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

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .Box {
    background: $white;

    &.active {
      color: #2096EF;
    }
  }
  small {
    color: #7F8FA4;
  }
</style>
