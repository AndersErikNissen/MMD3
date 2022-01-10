<template>
  <main>
    <single-type :path="path">
      <template #header="{ useAtt }">
        <hero-header :dataObj="useAtt"></hero-header>
      </template>
      <template #default>
        <h2>Default</h2>
        <all-types path="disciplins">
          <div v-for="disc in allDisciplins" :key="disc">
              {{disc.header.title}}
          </div>
        </all-types>
      </template>
    </single-type>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import singleType from "../components/Layout/LayoutSingleType.vue";
import allTypes from "../components/Layout/LayoutAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
export default {
  name: "",
  props: {},
  components: {
    singleType,
    allTypes,
    heroHeader,
  },
  data() {
    return {
      path: "single-type-disciplin",
    };
  },
  computed: {
      ...mapGetters({
      allDisciplins: "a/allDisciplinsAttributes"
    }),
  },
  methods: {},
  created() {},
  mounted() {
    window.scrollTo(0, 0);
  },
  watch() {},
};
</script>

<style lang="scss" scoped>
</style>