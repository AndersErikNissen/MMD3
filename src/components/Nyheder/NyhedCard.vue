<template>
  <article>
      <div>
          <img src="" alt="">
      </div>
      <section class="nyhed__card--textContainer">
      <div>
          <!-- "meta" -->
          <!-- 
              Split:
                (T) > (-) 
            -->
            <color-picker :emne="dataObj.emne"></color-picker>
      </div>
        <section>
            <h2>
                {{dataObj.title}}
            </h2>
            <p>
                {{dataObj.beskrivelse}}
            </p>
        </section>
      </section>

  </article>
</template>

<script>
import { mapGetters } from "vuex";

import colorPicker from "../UI/UiColorPicker.vue"
export default {
  name: "NyhedCard",
  props: {
      dataObj: {
          type: Object,
          required: true
      }
  },
  components: {
      colorPicker,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>