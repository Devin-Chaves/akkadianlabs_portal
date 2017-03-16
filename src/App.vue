<script>
  import {mapState} from 'vuex'
  export default {
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
    }
  }
</script>

<template>


  <div id="app">
      <div class="off-canvas position-left reveal-for-large" id="offCanvas"
        data-off-canvas
        v-if="userStore.authUser !== null && userStore.authUser.auth">
      <ul class="sidebar-menu" data-close="offCanvas">
        <!-- <li><router-link to="/" exact>Home</router-link></li> -->
        <li class="section-title"><small>Device</small></li>
        <li><router-link :to="{name:'dashboard'}"><icon name="star"></icon>Dashboard</router-link></li>
        <li><router-link :to="{name:'editor'}"><icon name="star"></icon>Editor</router-link></li>
        <li class="section-title"><small>Universal</small></li>
        <li><router-link :to="{name:'pinpassword'}"><icon name="star"></icon>Change Password</router-link></li>
        <li><router-link :to="{name:'callforwarding'}"><icon name="star"></icon>Call Forwarding</router-link></li>
        <!-- <li><router-link to="/dropdown">Dropdown</router-link></li> -->
        <li><a v-on:click="handleLogout()">Logout</a></li>
      </ul>
    </div>

    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        <ul class="menu expanded">
          <li class="logo">
            <router-link :to="{name:'dashboard'}">Self Care Portal by Akkadian Labs</router-link>
          </li>
          <li><a class="button small menu-button hide-for-large"
            data-toggle="offCanvas"
            v-if="userStore.authUser !== null && userStore.authUser.auth">Menu</a></li>
        </ul>
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <!-- <pre>{{ userStore }}</pre> -->
    <!-- <DashboardNav></DashboardNav> -->
  </div>
</template>


<style lang="scss">
@import './styles/global';

// Chrome Reset
a:focus {
  outline: none;
}

.logo, .logo a {
  color: #354052;
  font-weight: normal;
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
  padding: 0.75rem 0;
}

.sidebar-menu {
  @include menu-base();
  @include menu-direction(vertical);
  font-weight: 600;
  color: #7F8FA4;

  a {
    color: #7F8FA4;
    font-weight: 600;
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
    padding: .75rem 1rem;
  }
}
.off-canvas {
  background: $white;
  border-right: 1px solid $medium-gray;
}
.position-left.is-transition-push::after {
    box-shadow: none;
}
.menu {
  padding: 10px;
}

</style>
