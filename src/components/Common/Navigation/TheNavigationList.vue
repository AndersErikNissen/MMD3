<template>
  <section>
    <ul class="clean flex">
      <li v-for="nav in getNav" :key="nav.title">
        <router-link :to="nav.path">
          {{ nav.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigationList",
  props: {},
  components: {},
  data() {
    return {};
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

</style>