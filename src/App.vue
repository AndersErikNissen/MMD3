<template>
  <the-navigation></the-navigation>
  <router-view id="view" />
  <the-footer></the-footer>
</template>

<script>
import theFooter from "./components/Common/TheFooter.vue"
import theNavigation from "./components/Common/TheNavigation.vue"

export default {
  name: "App",
  data() {
    return {
      path: "the-footer",
      question: "Hej med dig!"
    }
  },
  components: {
    theFooter,
    theNavigation,
  },
  computed: {
 
  },
  methods: {
    resizeWindow: function () {
      /* REUSED from Github: AndersErikNissen/portfolio-v3 */

      // A debouncer could be used here, like lodash's debounce, or on could be created, but,
      // since this will mostly be used when inspecting in the Browser, it shouldn't be that needed.
      window.addEventListener("resize", () => {
        this.$store.commit("RESIZE_WINDOW");
      });
    },
  },
  created() {
    /* REUSED from Github: AndersErikNissen/portfolio-v3 */

    this.$store.commit("STATIC_DATA");
    this.resizeWindow();
  },
};
</script>

<style lang="scss">

</style>
