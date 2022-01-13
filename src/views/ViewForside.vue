<template>
  <main>
    <transition name="theLoading">
      <the-loading v-if="!checkForside"></the-loading>
    </transition>
    <single-type :path="path">
      <template #header="{ useAtt }">
        <hero-header :hero="true" :dataObj="useAtt" class="hero__bg--forside forside__hero--text"></hero-header>
      </template>
      <template #default="{ useAtt }">
        <ui-header :dataObj="useAtt.video" class="min--height--50 flex center column">
          <iframe :width="youtubeWidth" :height="youtubeHeight" src="https://www.youtube.com/embed/kwcP_qSEVeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ui-header>
        <all-types path="traeners">
          <traener-container class="min--height--75 forside__traener__bg"></traener-container>
        </all-types>
        <all-types path="medlemskabs">
          <the-medlemskab class="min--height--50 forside__medlem__bg"></the-medlemskab>
        </all-types>
        <kontakt-block class="min--height--75"></kontakt-block>
      </template>
    </single-type>
  </main>
</template>

<script>
import { mapGetters, mapState } from "vuex";

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
    ...mapState({
      window: state => state.windowWidth,
    }),
    youtubeWidth() {
      let width = this.window * .9;
      if (width > 1000) width = 1000
      return width;
    },
    youtubeHeight() {
      return this.youtubeWidth / 1.8;
    },
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
.forside__hero--text {
 padding-left: 5vw;
}
</style>