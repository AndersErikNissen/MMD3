<template>
  <section class="sideBySide">
    <div :class="!hero && template ? 'sbs--item' : ''">
      <h1 class="clamp--small pad-ding">
        {{ dataObj.hero.title }}
      </h1>
      <p class="pad-ding">
        {{ dataObj.hero.beskrivelse }}
      </p>
      <div class="flex header__routerLink">
        <router-link to="/login/quest" class="btn">
          <span> Gratis Prøvetræning </span>
        </router-link>
      </div>
    </div>
    <!-- <div class="sbs--item" v-if="!hero && !template">
      <img
      v-if="dataObj.hero"
        :src="require('@/assets/images/' + linkPath + '/' + dataObj.hero.link)"
        alt=""
      />
    </div> -->
    <div class="sbs--item" v-if="!hero && template">
      <img
        v-if="dataObj.linkarea"
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
.header__routerLink {
  @media screen and (max-width: 648px) {
    justify-content: center;
    align-items: center;
  }
}
</style>