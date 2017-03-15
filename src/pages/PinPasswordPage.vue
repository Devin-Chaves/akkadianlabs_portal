<template lang="html">
  <section class="pinpassword">
    <form v-on:submit.prevent="handlePinPassword()">
      <div class="row align-center align-middle">
        <div class="small-6 columns">
          <label>Pin
            <input class="form-control" placeholder="Enter your new pin" type="text" v-model="userData.pin">
          </label>
          <label>Password
            <input type="text" class="form-control" placeholder="Enter your new password" v-model="userData.password">
          </label>
          <button class="button">Update</button>
        </div>
      </div>
    </form>
    <sweet-modal ref="successPassword" icon="success">
      Password successfully updated!
    </sweet-modal>
    <sweet-modal ref="successPin" icon="success">
      Pin successfully updated!
    </sweet-modal>
    <sweet-modal ref="error" icon="error">
      Password was not successfully changed
    </sweet-modal>
  </section>
</template>

<script>
import {pinPasswordUrl, getHeader} from './../config'
import {mapState} from 'vuex'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
  components: {
		SweetModal,
		SweetModalTab
	},
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
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
      let authData = authUser.user
      this.$http.put(pinPasswordUrl + authData, postData, {headers: getHeader()})
        .then(response => {
          if (response.status === 200) {
            authUser.auth = response.data.auth
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$store.dispatch('setUserObject', authUser)
            this.$refs.successPassword.open()
          } else if (response.status === 204) {
            this.$refs.successPin.open()
          }
        })
        .catch(response => {
        this.$refs.error.open()
        console.log(response)
        });
      }
    }
  }
</script>

<style lang="css" scoped>

.pinpassword .row {
  height: 90vh;
}

</style>
