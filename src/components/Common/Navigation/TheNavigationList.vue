<template>
  <section>
      <ul>
          <li v-for="nav in getNav" :key="nav.title">
              {{nav.title}}
          </li>
      </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
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
  watch() {},
};
</script>

<style lang="scss" scoped>
</style>