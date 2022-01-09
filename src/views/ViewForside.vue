<template>
  <single-type :path="path">
    <template #header="{ useAtt }">
      <hero-header :dataObj="useAtt" :forside="true"></hero-header>
      <h2>Use aTT</h2>
      {{ useAtt }}
    </template>

    <template #default="{ useAtt }">
      <ui-header :dataObj="useAtt.video"></ui-header>
      <all-types path="traeners">
        <traener-container></traener-container>
      </all-types>
      <all-types path="medlemskabs">
        <the-medlemskab></the-medlemskab>
      </all-types>
      <kontakt-block></kontakt-block>
    </template>
  </single-type>
</template>

<script>
import singleType from "../components/UI/UiHandlerSingleType.vue";
import allTypes from "../components/UI/UiHandlerAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
import uiHeader from "../components/UI/UiHeader.vue";
import traenerContainer from "../components/Traener/TraenerBlockContainer.vue";
import theMedlemskab from "../components/Common/TheMedlemskab.vue";
import kontaktBlock from "../components/Forside/ForsideKontaktBlock.vue";
export default {
  name: "ViewForside",
  props: {},
  components: {
    singleType,
    allTypes,
    heroHeader,
    uiHeader,
    traenerContainer,
    theMedlemskab,
    kontaktBlock,
  },
  data() {
    return {
      path: "single-type-forside",
      imgPath: "traeners",
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
</style>