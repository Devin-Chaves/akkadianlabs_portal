<template lang="html">
  <div class="wrapper" id="device-list-wrapper">
    <ul>
      <li v-for="device in deviceStore.deviceList">{{device.description}}</li>
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
  }
}
</script>

<style lang="css">
</style>
