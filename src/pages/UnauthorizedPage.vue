<template lang="html">
  <section class="unauthorized">
    <div class="box">
      <h3>We couldn't resolve your Service-Group. Please contact your aPME administrator.</h3>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    background: lighten(#D55742, .9) !important;
    h3 {
      color: white;
      padding: 4rem;
      font-weight: 600;
    }
  }
</style>
