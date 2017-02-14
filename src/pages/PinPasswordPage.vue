<template lang="html">
  <div class="wrapper" id="pinpassword-wrapper">
    <section class="heading">
      <h1 class="page-title">Pin / Password Page</h1>
    </section>
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Update Pin and Password</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handlePinPassword()">
                <div class="form-group">
                  <label>Pin</label>
                  <input class="form-control" placeholder="Enter your new pin" type="text" v-model="userData.pin">
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="text" class="form-control" placeholder="Enter your new password" v-model="userData.password">
                </div>
                <button class="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {pinPasswordUrl} from './../config'
export default {
  data () {
    return {
      userData: {
        pin: '1234',
        password: 'Password'
      }
    }
  },
  methods: {
    handlePinPassword () {
      const postData = {
        pin: this.userData.pin,
        password: this.userData.password
      }
      const authUser = JSON.parse(window.localStorage.getItem('authUser'))
      this.$http.post(pinPasswordUrl, postData, {params: {sid: authUser.session},emulateJSON: true})
        .then(response => {
          console.log(response.data)
        })
      }
  }
}
</script>

<style lang="css">
</style>
