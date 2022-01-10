<template>
  <section class="ui__header flex center">
    <div>
      <h2>
        {{ dataObj.title }}
      </h2>
      <p class="bold">
        {{ dataObj.beskrivelse }}
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