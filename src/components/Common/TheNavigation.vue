<template>
  <section id="nav">
    <nav-bar id="nav--bar" class="flex row--sb">
      <transition name="theHamburger">
        <nav-list-burger v-if="!screenType && clickObj.show" @clicked="clickHamburger()"></nav-list-burger>
      </transition>
      <router-link to="/" id="nav--logo">
        <img :src="logoSvg" alt="" />
      </router-link>

      <nav-list v-if="screenType"></nav-list>
      <nav-login v-if="!screenTypeMobile"></nav-login>
      <nav-hamburger
        v-if="!screenType"
        @click="clickHamburger()"
        :clickObj="checkClickObj"
      ></nav-hamburger>
    </nav-bar>
  </section>
</template>

<script>
import { mapState } from "vuex";

import navList from "./Navigation/TheNavigationList.vue";
import navListBurger from "./Navigation/TheNavigationListHamburger.vue";
import navBar from "./Navigation/TheNavigationBar.vue";
import navHamburger from "./Navigation/TheNavigationHamburger.vue";
import navLogin from "./Navigation/TheNavigationLogin.vue";
import logoSvg from "@/assets/svg/logo.svg";
export default {
  name: "",
  props: {},
  components: {
    navList,
    navListBurger,
    navBar,
    navHamburger,
    navLogin,
  },
  data() {
    return {
      logoSvg,
      clickObj: {
        show: false,
        noShow: false,
        first: false,
      },
    };
  },
  computed: {
    ...mapState({
      window: (state) => state.windowWidth,
    }),
    screenType() {
      let response = true;
      if (this.window < 1024) {
        response = false;
      }
      return response;
    },
    screenTypeMobile() {
      let response = false;
      if (this.window < 468) {
        response = true;
      }
      return response;
    },
    checkClickObj() {
      return this.clickObj;
    },
  },
  methods: {
    clickHamburger() {
      // It's placed in this Component because other things might want to change show/noShow.
      this.clickObj.show = !this.clickObj.show;
      // It is made so it won't add "inactive" on load.
      if (this.clickObj.first) {
        this.clickObj.noShow = !this.clickObj.noShow;
      }
      this.clickObj.first = true;
    },
  },
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
#nav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
#nav--bar {
  padding: calc(var(--padding) * 0.5);
}
#nav--logo {
  max-width: 100px;
}
</style>