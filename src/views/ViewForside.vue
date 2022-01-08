<template>
  <single-type :path="path">
    <template #header="{ useAtt }">
      <hero-header :dataObj="useAtt" :forside="true"></hero-header>
    </template>

    <template #default="{ useAtt }">
      <ui-header :dataObj="useAtt.video"></ui-header>
      <all-types path="traeners">
        <traener-container></traener-container>
      </all-types>
      <!-- Medlemsskaber -->
      <ui-header :dataObj="useAtt.kontakt"></ui-header>
    </template>
  </single-type>
</template>

<script>
import singleType from "../components/UI/UiHandlerSingleType.vue";
import allTypes from "../components/UI/UiHandlerAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
import uiHeader from "../components/UI/UiHeader.vue";
import traenerContainer from "../components/Traener/TraenerBlockContainer.vue"
export default {
  name: "ViewForside",
  props: {},
  components: {
    singleType,
    allTypes,
    heroHeader,
    uiHeader,
    traenerContainer
  },
  data() {
    return {
      path: "single-type-forside",
      imgPath: "traeners"
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