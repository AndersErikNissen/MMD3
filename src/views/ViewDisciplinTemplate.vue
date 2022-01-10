<template>
  <all-types path="disciplins">
    <hero-header
      :template="true"
      :linkPath="linkPath"
      :dataObj="findData"
    ></hero-header>

    {{ findData }}
    <template-focus
      :dataObj="findData.fokus"
      :imgPath="findData.linkarea.fokus"
    ></template-focus>
    <template-traeners :dataObj="findData.traeners.data"></template-traeners>

    <section v-if="!findData">
      Noget gik galt, vi har ikke en Disciplin med det navn? Prøv i stedet:
    </section>
  </all-types>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import allTypes from "../components/Layout/LayoutAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
import templateFocus from "../components/Disciplin/DisciplinTemplateFokus.vue";
import templateTraeners from "../components/Disciplin/DisciplinTraeners.vue";
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
    templateFocus,
    templateTraeners,
  },
  data() {
    return {
      linkPath: "disciplins",
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
      console.log(returnValue);
      return returnValue;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>