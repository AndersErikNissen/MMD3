<template>
  <all-types path="disciplins" class="ama__bg max-width flex center">
    <hero-header
      v-if="findData"
      :template="true"
      :linkPath="linkPath"
      :dataObj="findData"
      class="min--height--75"
    ></hero-header>
    <template-focus
      class="min--height--50"
      v-if="findData"
      :dataObj="findData.fokus"
      :imgPath="findData.linkarea.fokus"
    ></template-focus>
    <template-traeners
      v-if="findData"
      :dataObj="findData.traeners.data"
      class="min--height--50"
    ></template-traeners>
    <template-intro
      v-if="findData"
      :dataObj="findData.intro"
      class="min--height--50"
    ></template-intro>

    <section v-if="!findData" class="flex center column min--height--100">
      <section>
        <div>
          <h1 class="clamp--small red">404</h1>
          <h4 class="clamp--small">
            Vi kunne desværre ikke finde denne Disciplin.
          </h4>
        </div>
        <div>
          <h6 class="clamp">Prøv i stedet:</h6>
          <ul class="clean">
            <li>
              <router-link to="/discipliner" class="normal--link--red">
                Se vores Discipliner
              </router-link>
            </li>
            <li>
              <router-link to="/discipliner" class="normal--link--red">
                Gå til forsiden
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </all-types>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import allTypes from "../components/Layout/LayoutAllTypes.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
import templateFocus from "../components/Disciplin/DisciplinTemplateFokus.vue";
import templateTraeners from "../components/Disciplin/DisciplinTraeners.vue";
import templateIntro from "../components/Disciplin/DisciplinTemplateIntro.vue";
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
    templateIntro,
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
        console.log("disci",this.disciplin)
        find = this.allDisc.find((disc) => 
          disc.attributes.disciplin_kategoris.data.attributes.slug ===
            this.disciplin
        );
        if (find != undefined) returnValue = find.attributes;
      }
      return returnValue;
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
</style>