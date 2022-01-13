<template>
  <section class="disciplin__template--intro--container flex center">
      <section class="flex column center pad-ding">
          <div class="disciplin__template--title--container">
              <h4 class="clamp">
                  {{dataObj.title}}
              </h4>
          </div>
          <div class="sideBySide">
              <p class="sbs--item">
                  {{dataObj.beskrivelse1}}
              </p>
              <p class="sbs--item">
                  {{dataObj.beskrivelse2}}
              </p>
          </div>
          <router-link to="/login/quest" class="btn">
            <span>
              Gratis Prøvetræning
            </span>
          </router-link>
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
     & .sbs--item:nth-child(1) {
       margin-right: 3rem;
     }
}
</style>