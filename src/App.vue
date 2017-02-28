<script>
  import {mapState} from 'vuex'
  import DashboardNav from './components/DashboardNav'
  export default {
    components: {
      DashboardNav
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      console.log('I was created')
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    }
  }
</script>

<template>
  <div>
    <!-- <pre>{{ userStore }}</pre> -->
    <DashboardNav></DashboardNav>
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
  @import './assets/css/bootstrap.css';

</style>
