<template>
  <section>
      <!-- Placer Enten hamburger eller nav-list i slot, alt efter om desktop er true -->
     <slot></slot>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigationBar",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
        getNav: "getNavigation"
    }),
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>