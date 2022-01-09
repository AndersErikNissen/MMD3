<template>
  <section id="theLoading" class="flex center">
    <svg-loader :path="svgPath"></svg-loader>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import svgLoader from "../UI/UiSvgLoader.vue";
export default {
  name: "TheLoading",
  props: {},
  components: {
    svgLoader,
  },
  data() {
    return {
      svgPath: "loading_square.svg",
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
#theLoading {
  position: fixed;
  z-index: 10;
  inset: 0 0 0 0;
  background-color: var(--neutral-500);
  & img {
      width: 50px;
  }
}
</style>