<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Logo</router-link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user"></span> Your Account
            </a>
          </li>
          <li>
            <router-link to="/cart" class="cart-link">
              <span class="glyphicon glyphicon-shopping-cart"></span>
              Cart
              <div class="brojac">
                <transition name="slide-down">
                  <span class="badge" v-if="brAnime">{{brKorpa}}</span>
                  <i class="badge" v-else>{{brKorpa}}</i>
                </transition>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { korpa } from "./Helpers/korpahelper";

export default {
  name: "AppHeader",
  data() {
    return {
      brKorpa: 0,
      brAnime: false,
    };
  },
  created() {
    this.brKorpa = JSON.parse(window.localStorage.korpa).length;
    korpa.$on("dodato", () => {
      this.brKorpa = JSON.parse(window.localStorage.korpa).length;
      this.brAnime = !this.brAnime;
    });
  },
};
</script>

<style scoped>
.navbar {
  border-radius: 0px;
  margin-bottom: 0px;
}
.cart-link {
  position: relative;
  padding-right: 40px;
}
.brojac {
  position: absolute;
  right: 10px;
  top: 15px;
}
.badge {
  background-color: rgb(38, 166, 154);
  margin-top: -3px;
  font-style: normal;
  /* position: absolute; */
  min-height: 10px !important;
}

.slide-down-enter-active,
.slide-down-leave-active {
  right: 0px;
  position: absolute;
  top: 4px;
  transition: all 1s;
}
.slide-down-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave {
  opacity: 1;
}
</style>