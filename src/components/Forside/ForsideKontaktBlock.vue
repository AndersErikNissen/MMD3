<template>
  <section class="flex">
      <ui-header :dataObj="forside.spoergsmaal"></ui-header>
      <div class="kontakt__img--container">
        <img :src="testImg" alt="Billede til kontaktsektion">
      </div>
      <ui-header :dataObj="forside.bestyrelsen"></ui-header>
  </section>
</template>

<script>
import uiHeader from "../UI/UiHeader.vue"
import testImg from "@/assets/images/traeners/test.jpg"
import { mapGetters } from "vuex";
export default {
  name: "",
  props: {},
  components: {
      uiHeader,
  },
  data() {
      return {
        testImg
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
  watch() {},
};
</script>

<style lang="scss" scoped>
.kontakt__img--container {
    width: 20vw;
}
</style>