<template lang="html">
    <section class="editor">
      <div class="row u-ml--remove">
        <editor-list></editor-list>
        <visual-phone-editor></visual-phone-editor>
      </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import EditorList from './../components/editor/EditorList'
import VisualPhoneEditor from './../components/editor/VisualPhoneEditor'

export default {
  components: {
    'editor-list': EditorList,
    'visual-phone-editor': VisualPhoneEditor
  }
}
</script>

<style lang="scss" scoped>

</style>
