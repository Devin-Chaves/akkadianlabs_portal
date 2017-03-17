<template lang="html">
    <section class="callforwarding">
      <h1 class="page-title"></h1>

      <div class="row u-ml--remove">


          <extension-list></extension-list>

        <transition name="fade">
          <current-extension></current-extension>
        </transition>

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

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
