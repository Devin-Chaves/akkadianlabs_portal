<template lang="html">
  <div class="large-4 columns" v-if="extensionStore.currentExtension">
    <form v-on:submit.prevent="handleExtensionFormSubmit()">
      <h4>Currently Editing Line: {{extensionStore.currentExtension.directoryNumber}}</h4>
      <input type="checkbox" v-model="checked"/>
      <label for="click_me">Forward All Calls to:</label>
      <br>
      <br>
      <input type="radio" id="one"
      value="Voicemail"
      v-bind:disabled="!checked"
      v-model="checkedValue">
      <label for="one">Voicemail</label>
      <br><br>
      <input type="radio" id="two"
      value="Destination"
      v-bind:disabled="!checked"
      v-model="checkedValue">
      <label for="two">Destination</label>
      <input type="text" v-model="destinationNumber" v-bind:disabled="!checked">
      <button class="button" type="submit" name="button" v-bind:disabled="!checked">Submit</button>
    </form>
    <!-- <br> -->
    <!-- <span>Picked: {{ callForward }}</span><br>
    <span>Voicemail: {{ callForward.voicemail }}</span><br>
    <span>Destination: {{ callForward.destination }}</span><br> -->
    <br>
    Send to voicemail: {{extensionStore.currentExtension.callForward.voicemail}}
    <br>
    Destination: <strong>{{extensionStore.currentExtension.callForward.destination}}</strong>
    <br><br>
    Form Visibility: {{ checked }}
    <br>
    <pre>{{ $data }}</pre>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import {callForwardUrl, getHeader} from './../../config'
export default {
    computed: {
      ...mapState ({
        extensionStore: state => state.extensionStore
      })
    },
    data () {
      return {
          checked: '',
          checkedValue: '',
          destinationNumber: ''
      }
    },
    methods: {
      handleExtensionFormSubmit () {
        const postData = {
          destination: this.checkedValue == 'Destination' ? this.destinationNumber : '',
          voicemail: this.checkedValue == 'Voicemail' ? true : ''
        }
        const authUser = JSON.parse(window.localStorage.getItem('authUser'))
        let extensionData = authUser.user + '/' + this.extensionStore.currentExtension.id
        this.$http.put(callForwardUrl + extensionData, postData, {headers: getHeader()})
          .then(response => {
            if (response.status === 200) {
              console.log('Changed Data', response)
            }
          })
        }
    }
}
</script>

<style lang="css">
</style>
