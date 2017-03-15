<template lang="html">
    <section class="callforwarding">
      <h1 class="page-title">Call Forwarding Page</h1>

      <div class="row">
        <extension-list></extension-list>
        <current-extension></current-extension>
      </div>
    </section>
</template>




<script>
import {mapState} from 'vuex'

import ExtensionList from './../components/extensions/ExtensionList'
import CurrentExtension from './../components/extensions/CurrentExtension'

export default {
  components: {
    'extension-list': ExtensionList,
    'current-extension': CurrentExtension
  },
  computed: {
    ...mapState ({
      extensionStore: state => state.extensionStore
    })
  },
  created () {
    this.$store.dispatch('setExtensionList')
  }
}
</script>

<style lang="css">
</style>
