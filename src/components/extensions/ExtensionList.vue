<template lang="html">
    <div class="large-4 columns">
      <ul class="Box Box--inlineResource">
        <li class="Box" :class="[{active: extensionActiveStyle(extension)}]" v-for="extension in extensionStore.extensionList" v-on:click="changeExtension(extension)">

        <div class="row">
          <div class="small-3 columns">
            <div><strong>{{extension.directoryNumber}}</strong></div>
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
        extensionStore: state => state.extensionStore
      })
    },
    methods: {
    extensionActiveStyle (extension) {
      if (this.extensionStore.currentExtension === null) {
        return false
      }
      if (this.extensionStore.currentExtension.id === extension.id) {
        return true
      }
      return false
    },
    changeExtension (extension) {
      this.$store.dispatch('setCurrentExtension', extension)
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
