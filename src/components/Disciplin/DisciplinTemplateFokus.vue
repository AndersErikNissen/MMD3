<template>
  <section class="sideBySide--three--v2">
    <section class="sbs--item">
      <div v-for="obj in areaOne" :key="obj.title" class="pad-ding">
        <h6 class="clamp">
          {{ obj.title }}
        </h6>
        <p>
          {{ obj.beskrivelse }}
        </p>
      </div>
    </section>
    <div class="sbs--item">
      <img
        v-if="dataObj"
        :src="require('@/assets/images/disciplins/' + imgPath)"
        :alt="'Billede til disciplinen:' + dataObj.title"
      />
    </div>
    <section class="sbs--item">
      <div v-for="obj in areaTwo" :key="obj.title" class="pad-ding">
        <h6>
          {{ obj.title }}
        </h6>
        <p>
          {{ obj.beskrivelse }}
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "DisciplinTemplateFokus",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    imgPath: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    areaOne() {
      let arr = [];
      if (this.dataObj.length > 0) {
        for (let i = 0; i < 2; i++) {
          arr.push(this.dataObj[i]);
        }
      }
      return arr;
    },
    areaTwo() {
      let arr = [];
      if (this.dataObj.length > 0) {
        for (let i = 2; i < 4; i++) {
          arr.push(this.dataObj[i]);
        }
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
</style>