<template>
  <main>
    <single-type :path="path">
      <template #header="{ useAtt }">
        <hero-header :linkPath="linkPath" :dataObj="useAtt"></hero-header>
      </template>
      <template #default>
        <all-types path="disciplins">
          <disciplin-card v-for="disc in allDisciplins" :key="disc" :dataObj="disc"></disciplin-card>
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
import disciplinCard from "../components/Disciplin/DisciplinCard.vue"
export default {
  name: "ViewDiscipliner",
  props: {},
  components: {
    singleType,
    allTypes,
    heroHeader,
    disciplinCard
  },
  data() {
    return {
      path: "single-type-disciplin",
      linkPath: "disciplins"
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
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>