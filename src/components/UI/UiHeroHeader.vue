<template>
  <section class="sideBySide">
    <div class="sbs--item">
      <h1>
        {{ dataObj.hero.title }}
      </h1>
      <p class="bold">
        {{ dataObj.hero.beskrivelse }}
      </p>
      <router-link to="/login/gratis" class="btn">
        <span> Gratis Prøvetræning </span>
      </router-link>
    </div>
    <div class="sbs--item" v-if="!hero && !template">
      <img
        :src="require('@/assets/images/' + linkPath + '/' + dataObj.hero.link)"
        alt=""
      />
    </div>
    <div class="sbs--item" v-if="!hero && template">
      <img
        :src="
          require('@/assets/images/' + linkPath + '/' + dataObj.linkarea.header)
        "
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "UiHeroHeader",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    linkPath: {
      type: String,
    },
    hero: {
      type: Boolean,
    },
    template: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>