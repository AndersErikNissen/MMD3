<template>
  <main>
    <transition name="theLoading">
      <the-loading v-if="!checkForside"></the-loading>
    </transition>
    <single-type :path="path">
      <template #header="{ useAtt }">
        <hero-header :dataObj="useAtt" :forside="true"></hero-header>
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
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import singleType from "../components/Layout/LayoutSingleType.vue";
import allTypes from "../components/Layout/LayoutAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
import uiHeader from "../components/UI/UiHeader.vue";
import traenerContainer from "../components/Traener/TraenerBlockContainer.vue";
import theMedlemskab from "../components/Common/TheMedlemskab.vue";
import kontaktBlock from "../components/Forside/ForsideKontaktBlock.vue";
import theLoading from "../components/Common/TheLoading.vue";
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
    theLoading,
  },
  data() {
    return {
      path: "single-type-forside",
      imgPath: "traeners",
    };
  },
  computed: {
    ...mapGetters({
      checkForside: "getCheckForside",
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