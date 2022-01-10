<template>
  <section>
      {{dataObj}}

      <div>
          <h2>
              {{dataObj.header.title}}
          </h2>
          <p>
              {{dataObj.header.beskrivelse}}
          </p>

            <div>
                <ui-router :url="dataObj.metainfo">
                    Læs mere
                </ui-router>
            </div>
      </div>
      <div>
          <img :src="require(imgPathBase + 'test.jpg')" :alt="'Billede til disciplinen: ' + dataObj.header.title">
      </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import uiRouter from "../UI/UiButtonRouter.vue"
export default {
  name: "DisciplinCard",
  props: {
      dataObj: {
          type: Object,
          required: true
      }
  },
  components: {
      uiRouter,
  },
  data() {
    return {
        imgPathBase: "@/assets/images/disciplins/"
    }
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
</style>