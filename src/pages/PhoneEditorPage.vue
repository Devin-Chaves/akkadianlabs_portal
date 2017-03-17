<template lang="html">
    <section class="editor">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
      <editor-list class="animated"></editor-list>
    </transition>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import EditorList from './../components/editor/EditorList'

export default {
  components: {
    'editor-list': EditorList
  }
}
</script>

<style lang="scss" scoped>

</style>
