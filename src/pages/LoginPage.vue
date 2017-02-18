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
        username: 'JohnAdams',
        password: 'Fidelus123'
      }
    }
  },
  methods: {
    handleLoginFormSubmit () {
      const postData = {
        username: this.login.username,
        password: this.login.password
      }
      const authUser = {}
      this.$http.post(loginUrl, postData, {emulateJSON: true})
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
  <div class="wrapper" id="login-wrapper">
    <section class="login">
      <div class="row">
        <div class="col-sm-6 col-sm-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Login</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleLoginFormSubmit()">
                <div class="form-group">
                  <label>Email Address</label>
                  <input class="form-control" placeholder="Enter your username" type="text" v-model="login.username">
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="text" class="form-control" placeholder="Enter your password" v-model="login.password">
                </div>
                <button class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  #login-wrapper {
    margin-top: 150px;
  }
</style>
