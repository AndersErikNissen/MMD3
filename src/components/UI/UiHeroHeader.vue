<template>
  <section>
    <div>
      <h1>
        {{ dataObj.hero.title }}
      </h1>
      <p class="bold">
        {{ dataObj.hero.beskrivelse }}
      </p>
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
    }
  },
  components: {

  },
  data() {
    return {
     
    }
  },
  computed: {},
  methods: {
    
  },
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>

</style>