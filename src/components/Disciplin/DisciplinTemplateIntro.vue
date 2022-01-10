<template>
  <section class="disciplin__template--intro--container flex center">
      <section class="flex column center">
          <div class="disciplin__template--title--container">
              <h2>
                  {{dataObj.title}}
              </h2>
          </div>
          <div class="sideBySide">
              <p class="sbs--item">
                  {{dataObj.beskrivelse1}}
              </p>
              <p class="sbs--item">
                  {{dataObj.beskrivelse2}}
              </p>
          </div>
      </section>
  </section>
</template>

<script>
export default {
  name: "DisciplinTemplateIntro",
  props: {
    dataObj: {
      type: Object,
      required: true,
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    areaOne() {
      let arr = [];
      for (let i = 0; i < 2; i++) {
        arr.push(this.dataObj[i]);
      }
      return arr;
    },
    areaTwo() {
      let arr = [];
      for (let i = 2; i < 4; i++) {
        arr.push(this.dataObj[i]);
      }
      return arr;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.disciplin__template--title--container {
    width: 100%;
}
.sideBySide {
     align-items: flex-start;
}
</style>