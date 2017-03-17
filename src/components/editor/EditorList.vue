<template lang="html">
  <section class="editor-list">
    <div class="large-4 columns u-pl--remove">
      <ul class="Box">
        <li class="Box" :class="[{active: deviceActiveStyle(device)}]" v-for="device in deviceStore.deviceList" v-on:click="changeDevice(device)">
          <div class="u-pv--small"><icon name="star"></icon> {{device.description}}</div>
      </li>
    </ul>
  </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState ({
      deviceStore: state => state.deviceStore
    })
  },
  created () {
    this.$store.dispatch('setDeviceList')
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
    this.$store.dispatch('setVPE', device)
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  vertical-align: middle;
  margin-right: 1rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.Box {
  background: $white;
  border-radius: 0;

  &.active {
    color: #2096EF;
    box-shadow: inset 2px 0px 0px 0px #2096ef;
  }
}
small {
  color: #7F8FA4;
}
</style>
