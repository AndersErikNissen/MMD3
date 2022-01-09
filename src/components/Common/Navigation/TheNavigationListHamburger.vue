<template>
  <section class="nav--list__hamburger--container flex center">
    <ul class="clean flex column">
      <li v-for="nav in getNav" :key="nav.title">
        <router-link v-if="!nav.dropdown" :to="nav.path">
          <h4 class="clamp">
            {{ nav.title }}
          </h4>
        </router-link>
        <div v-else>
          <h4 class="clamp">
            {{ nav.title }}
          </h4>
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
import { mapGetters } from "vuex";
export default {
  name: "TheNavigationListHamburger",
  props: {},
  components: {},
  data() {
    return {
      disciplinPathBase: "/discipliner/",
    };
  },
  computed: {
    ...mapGetters({
      getNav: "getNavigation",
    }),
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
  z-index: 0;
  color: white;

  & .nav--list__disciplinUl {
    margin-left: 1.5rem;
  }
}
</style>