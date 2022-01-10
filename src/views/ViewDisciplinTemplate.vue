<template>
  <all-types path="disciplins">
    <hero-header :template="true" :linkPath="linkPath" :dataObj="findData"></hero-header>
 
    {{ findData }}

    <section v-if="!findData">
      Noget gik galt, vi har ikke en Disciplin med det navn? Prøv i stedet:
    </section>
  </all-types>
</template>

<script>
import allTypes from "../components/Layout/LayoutAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";

import { mapGetters, mapState } from "vuex";
export default {
  name: "ViewDisciplinTemplate",
  props: {
    disciplin: {
      type: String,
    },
  },
  components: {
    allTypes,
    heroHeader,
  },
  data() {
    return {
        linkPath: "disciplins"
    };
  },
  computed: {
    ...mapGetters({
      allDisciplins: "a/allDisciplinsAttributes",
    }),
    ...mapState({
      allDisc: (state) => state.a.data.disciplins,
    }),
    findData() {
      console.log(
        this.allDisc.find(
          (disc) =>
            disc.attributes.disciplin_kategoris.data.attributes.slug ===
            this.disciplin
        )
      );
      let returnValue = false,
        find = undefined;
      if (this.allDisc) {
        find = this.allDisc.find(
          (disc) =>
            disc.attributes.disciplin_kategoris.data.attributes.slug ===
            this.disciplin
        );
        returnValue = find.attributes;
      }
      return returnValue;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
</style>