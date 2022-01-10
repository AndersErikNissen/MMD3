<template>
  <section class="nav--list__hamburger--container flex center column">
    <div class="flex center login">
      <nav-login v-if="screenTypeMobile"></nav-login>
    </div>
    <ul class="clean flex column">
      <li v-for="nav in getNav" :key="nav.title">
        <router-link v-if="!nav.dropdown" :to="nav.path">
          <h4 class="clamp">
            {{ nav.title }}
          </h4>
        </router-link>
        <div v-else>
          <div class="flex row">
            <router-link to="/discipliner">
              <h4 class="clamp">
                {{ nav.title }}
              </h4>
            </router-link>
            <img :src="dropArrow" alt="Pil som peger ned ad" class="arrow" />
          </div>
          <ul class="clean nav--list__disciplinUl">
            <li v-for="disciplin in nav.data" :key="disciplin.title">
              <router-link :to="disciplinPathBase + disciplin.path">
                <h6 class="clamp">
                  {{ disciplin.title }}
                </h6>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import dropArrow from "@/assets/svg/dropdown_arrow.svg";
import navLogin from "./TheNavigationLogin.vue";
export default {
  name: "TheNavigationListHamburger",
  props: {},
  components: {
    navLogin,
  },
  data() {
    return {
      disciplinPathBase: "/discipliner/",
      dropArrow,
    };
  },
  computed: {
    ...mapGetters({
      getNav: "getNavigation",
    }),
    ...mapState({
      window: (state) => state.windowWidth,
    }),
    screenTypeMobile() {
      let response = false;
      if (this.window < 468) {
        response = true;
      }
      return response;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
.nav--list__hamburger--container {
  position: fixed;
  background-color: var(--neutral-500);
  inset: 0 0 0 0;
  z-index: -1;
  color: white;
  & .nav--list__disciplinUl {
    margin-left: 1.5rem;
  }
  & a {
    color: var(--neutral-100);
    &:hover,
    &:focus {
      color: var(--primary-500);
    }
  }
  & .arrow {
    width: 2.5rem;
    margin-left: 0.8rem;
  }
  & .login {
    min-height: 10vh;
  }
}
</style>