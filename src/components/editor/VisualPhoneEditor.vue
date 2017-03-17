<template lang="html">
    <div class="large-8 columns" v-if="deviceStore.currentDevice">
      <pre>
        {{deviceStore.currentDevice}}
      </pre>
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

<style lang="scss" scoped>
.columns {
  display: flex;
  justify-content: center;
}
pre {
  position: fixed;
  width: 400px;
  top: 35%;
}
</style>
