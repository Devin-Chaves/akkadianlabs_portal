<template lang="html">
  <div class="wrapper" id="device-list-wrapper" >
    <!-- TODO Turn this into router link -->
    <div v-for="device in deviceStore.deviceList">
      <a v-bind:href=" 'https://192.168.110.135/pme/portal/device/' + device.id">
        <ul class="list-group">
          <li class="list-group-item active"><strong>{{device.description}}</strong></li>
          <li class="list-group-item">Device Model: <strong>{{device.model}}</strong></li>
          <li class="list-group-item">Device Name: <strong>{{device.name}}</strong></li>

        </ul>
      </a>
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
  }
}
</script>

<style lang="css">
</style>
