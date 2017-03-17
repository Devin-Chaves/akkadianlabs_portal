<template lang="html">
      <div class="large-10 columns u-mt--large u-pl--remove">
        <!-- <div class="Box">{{deviceStore.deviceList.length}} Available Devices</div> -->
        <ul class="Box Box--inlineResource">
          <li class="Box" v-for="device in deviceStore.deviceList" v-on:click="changeDevice(device)">

          <div class="row">
            <div class="small-6 columns">
              <div><strong>{{device.description}}</strong></div>
              <small>{{device.model}}</small>
            </div>
            <div class="small-6 columns"><icon name="circle-o"></icon>{{device.type}}</div>
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
      // this.$store.dispatch('setSpeedDials')
      this.$router.push({name: "editor"})
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
  svg {
    vertical-align: middle;
    margin-right: .5rem;
    color: #D65B4A;
    margin-top: -2px;
  }
</style>
