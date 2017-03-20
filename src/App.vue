<script>
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import {mapState} from 'vuex'
  export default {
    components: {
      NprogressContainer,
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    methods: {
      handleLogout() {
        this.$store.dispatch('clearAuthUser')
        window.localStorage.removeItem('authUser')
        this.$router.push({name: 'login'})
      }
    },
    created () {
      console.log('I was created')
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    },
    mounted () {
      // eslint-disable-next-line
      this.offCanvas = new Foundation.OffCanvas($('#offCanvas'));
      console.log('I was mounted')
    },
  }
</script>

<template>


  <div id="app">
    <nprogress-container></nprogress-container>
      <div class="off-canvas position-left reveal-for-large" id="offCanvas"
        data-off-canvas
        v-if="userStore.authUser !== null && userStore.authUser.auth">
      <ul class="sidebar-menu" data-close="offCanvas">
        <!-- <li><router-link to="/" exact>Home</router-link></li> -->
        <li class="section-title"><small>Device</small></li>
        <li><router-link :to="{name:'dashboard'}"><icon name="home"></icon>Dashboard</router-link></li>
        <li><router-link :to="{name:'editor'}"><icon name="cog"></icon>Editor</router-link></li>
        <li class="section-title"><small>Universal</small></li>
        <li><router-link :to="{name:'callforwarding'}"><icon name="bolt"></icon>Call Forwarding</router-link></li>
        <li><router-link :to="{name:'pinpassword'}"><icon name="hashtag"></icon>Change Password</router-link></li>
        <li class="help"><a href=""><small>Need Help?</small></a></li>
        <!-- <li><router-link to="/dropdown">Dropdown</router-link></li> -->
      </ul>
      <div class="logout"><a v-on:click="handleLogout()">Logout</a></div>
    </div>

      <div class="top-bar" v-if="userStore.authUser !== null && userStore.authUser.auth">
        <ul class="menu expanded">
          <li class="logo">
            <router-link :to="{name:'root'}">aPME Self Service Portal</router-link>
          </li>
          <!-- <li>{{ $route.name }}</li> -->
            <li class="text-right username" v-if="userStore.authUser !== null && userStore.authUser.auth">
              <span @click="show = !show" class="show-for-large">
                <icon name="user-circle" scale="2" class="user-avatar"></icon>{{userStore.authUser.fullName}}
                <icon name="arrow-down" class="arrow-down"></icon>
                <div v-show="show" class="dropdown">
                  <a>Help</a>
                  <hr>
                  <a v-on:click="handleLogout()">Logout</a>
                </div>
              </span>
              <a class="button small menu-button hide-for-large"
              data-toggle="offCanvas"
              v-if="userStore.authUser !== null && userStore.authUser.auth">Menu</a>
            </li>
        </ul>
      </div>
      <div class="off-canvas-content" data-off-canvas-content>
        <transition
          mode="out-in"
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
          appear>
          <router-view class="animated"></router-view>
        </transition>
    </div>
    <!-- <pre>{{ userStore }}</pre> -->
    <!-- <DashboardNav></DashboardNav> -->
  </div>
</template>


<style lang="scss">
@import './styles/global';


.dropdown {
  top: 0;
  margin-top: 80px;
  right: 40px;
  width: 170px;
  position: absolute;
  background: white;
  text-align: left;
  padding: 20px 0;

  a {
    padding-left: 15px;
    color: #7F8FA4;
  }
}

.top-bar {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
}
.username {
  padding-right: 25px;
}
.user-avatar {
  vertical-align: middle;
  margin-right: 16px;
  color: #7F8FA4;
}
.arrow-down {
  vertical-align: middle;
  margin-left: 5px;
  height: 9px;
  color: #7F8FA4;
}
.animated {
  animation-duration: .377s;
}

.nprogress-container {
  position: fixed !important;
  width: 100%;
  height: 50px;
  z-index: 2048;
  pointer-events: none;
  }
#nprogress {
  $color: #2096ef;

  .bar {
    background: $color;
  }
  .peg {
    box-shadow: 0 0 10px $color, 0 0 5px $color;
  }

  .spinner-icon {
    border-top-color: $color;
    border-left-color: $color;
  }
}
// Chrome Reset
a:focus {
  outline: none;
}

.logo, .logo a {
  color: #354052;
  font-weight: normal;
  text-align: center;
}

li a.menu-button {
  border-radius: 20px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  float: right;
}

.content-wrapper {
  padding: 2rem 1.5rem;
}

.top-bar {
  border-bottom: 1px solid #cacaca;
  min-height: 80px;
}
.sidebar-menu {
  @include menu-base();
  @include menu-direction(vertical);
  font-weight: 600;
  color: #7F8FA4;
  margin-top: 100px;
  li {
    a {
      color: #7F8FA4;
      font-weight: 600;
      padding-left: 2rem;
    }
  }
  a.active {
    font-weight: 700;
    box-shadow: inset 2px 0px 0px 0px #2096ef;
    color: #354052;
    svg {
      color: #2096ef;
    }
  }
  svg {
    vertical-align: middle;
    margin-right: .75rem;
  }
  .section-title {
    padding: .75rem 2rem;
  }
  .help {
    text-transform: uppercase;
  }
}
.logout {
  position: absolute;
  bottom: 1.25rem;
  padding-left: 2rem;
  a {
    color: #7F8FA4;
    font-weight: 600;
  }
}
.off-canvas {
  background: $white;
  border-right: 1px solid $medium-gray;
}
.off-canvas-content {
  margin-top: 80px;
}
.position-left.is-transition-push::after {
    box-shadow: none;
}
.menu {
  padding: 10px;
}

</style>
