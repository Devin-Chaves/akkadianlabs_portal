<script>
import {loginUrl, devicesUrl, getHeader} from './../config'
import {mapState} from 'vuex'


export default {
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  data () {
    return {
      login: {
        username: 'PhoneHolder',
        password: '1'
      }
    }
  },
  methods: {
    getCookie (name) {
      var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
      if (match) return match[1];
      return
    },
    handleLoginFormSubmit () {
      const postData = {
        username: this.login.username,
        password: this.login.password
      }
      const servicegroupid = this.getCookie("servicegroupid")
      const authUser = {}

      this.$http.post(loginUrl + servicegroupid, postData, {emulateJSON: true})
        .then(response => {
          if (response.status === 200) {
            console.log('session', response)
            authUser.auth = response.data.auth
            authUser.sgid = response.data.sgid
            authUser.user = this.login.username
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$store.dispatch('setUserObject', authUser)
            this.$router.push({name: 'dashboard'})
          }
        })
      }
    }
  }
</script>

<template>

  <section class="login">
    <form v-on:submit.prevent="handleLoginFormSubmit()">
      <div class="row align-center align-middle">
        <div class="small-6 columns">
          <img src="/static/img/akkadian_logo.png" alt="Akkadian Logo">
          <label>Username
            <input class="form-control" placeholder="Enter your username" type="text" v-model="login.username">
          </label>
          <label>Password
            <input type="password" class="form-control" placeholder="Enter your password" v-model="login.password">
          </label>
          <button class="button">Login</button>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
  .login .row {
    height: 90vh;
  }
  .login img {
    display: block;
    margin: 34px auto;
  }

</style>
