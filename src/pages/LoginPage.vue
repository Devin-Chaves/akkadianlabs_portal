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
        username: '',
        password: ''
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
      document.querySelector("input[type=text]").disabled = true;
      document.querySelector("input[type=password]").disabled = true;
      this.$http.post(loginUrl + servicegroupid, postData, {emulateJSON: true})
        .then(response => {
          if (response.status === 200) {
            console.log('session', response)
            authUser.auth = response.data.auth
            authUser.sgid = response.data.sgid
            authUser.fullName = response.data.fullName
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
        <div class="small-4 columns">
          <div class="login-box">
            <img src="static/img/akkadian_logo.png" alt="Akkadian Logo">
            <h3>Sign In</h3>
            <label>Username
              <input class="form-control" placeholder="Enter your username" type="text" v-model="login.username">
            </label>
            <label>Password
              <input type="password" class="form-control" placeholder="Enter your password" v-model="login.password">
            </label>
            <hr>
            <button class="button">Login</button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
  .login .row {
    height: 80vh;
  }
  .login-box {
    background: white;
    padding: 1rem 2rem;
    border-radius: 3px;

    img {
      display: block;
      margin: -34px auto 0 auto;
    }
    h3 {
      color: #354052;
      padding-top: 1rem;
      font-weight: 500;
    }
    .form-control {
      border-radius: 3px;
      padding-left: .75rem;
      margin-top: .5rem;
    }
    label {
      color: #7F8FA4;
      font-weight: 600;
      padding-top: .5rem;
    }
    .button {
      border-radius: 3px;
      width: 100%;
    }
  }
</style>
