<template>
  <section class="disciplin__card--container flex row--se">
    <div class="disciplin__card--half--text flex column">
      <h2>
        {{ dataObj.header.title }}
      </h2>
      <p>
        {{ dataObj.header.beskrivelse }}
      </p>

      <div class="flex row">
        <ui-router :url="dataObj.metainfo"> Læs mere </ui-router>
        <router-link to="/holdplan" class="disciplin__router--holdplan">
            Gå til holdplan
        </router-link>
      </div>
    </div>
    <div class="disciplin__card--half">
      <!-- Not to self: For some reason webpack need some of the path as a string (From this post: https://coderedirect.com/questions/230214/vue-js-dynamic-image-src-with-webpack-require-not-working) -->
      <img
        :src="require('@/assets/images/disciplins/' + dataObj.linkarea.header)"
        :alt="'Billede til disciplinen: ' + dataObj.header.title"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import uiRouter from "../UI/UiButtonRouter.vue";
export default {
  name: "DisciplinCard",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    uiRouter,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
.disciplin__card--container {
    justify-content: center;
    color: white;
    & .disciplin__card--half,
    & .disciplin__card--half--text {
        width: 50%;
    }
    & .disciplin__card--half--text {
        justify-content: center;
    }
    & .disciplin__router--holdplan {
        color: white;
        text-decoration-line: underline;
        margin-left: 1rem;
        &:hover {
            color: var(--primary-500);
        }
    }
}
</style>