<template>
  <section class="flex grid--3x1">
      <ui-header :dataObj="forside.spoergsmaal"></ui-header>
      <div class="kontakt__img--container flex center">
        <img :src="imgKontakt" alt="Billede til kontaktsektion">
      </div>
      <ui-header :dataObj="forside.bestyrelsen"></ui-header>
  </section>
</template>

<script>
import uiHeader from "../UI/UiHeader.vue"
import imgKontakt from "@/assets/images/homepagefooter.png"
import { mapGetters } from "vuex";
export default {
  name: "",
  props: {},
  components: {
      uiHeader,
  },
  data() {
      return {
        imgKontakt
    };
  },
  computed: {
    ...mapGetters({
        forside: "s/getForsideAttributes"
    }),
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.kontakt__img--container {
    width: 100%;
}
img {
  height: auto;
  max-width: 200px;
}
</style>