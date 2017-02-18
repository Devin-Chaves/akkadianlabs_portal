<template lang="html">
  <div id="device-details-wrapper">
    <div class="details">
      <div class="device-data" v-if="deviceStore.editor">
        <h3>Device Details</h3>
        <div class="name">{{deviceStore.editor.name}}</div>
        <div class="protocol">{{deviceStore.editor.protocol}}</div>
        <div class="description">{{deviceStore.editor.description}}</div>
        <!-- <div class="speed-dials">{{device.speedDials}}</div> -->
        <h3>Speed Dials</h3>
        <p v-if="!deviceStore.speedDials">No Speed Dials :(</p>
        <div class="speed-dials" v-if="deviceStore.speedDials">
          <div class="index">{{deviceStore.speedDials.index}}</div>
          <div class="speed-dials-label">{{deviceStore.speedDials.label}}</div>
          <div class="number">{{deviceStore.speedDials.number}}</div>
        </div>
      </div>


    </div>
  </div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      deviceStore: state => state.deviceStore
    })
  }
}
</script>

<style lang="css">
</style>
