<template>
  <section class="sideBySide--three">
    <section class="sbs--item">
      <div v-for="obj in areaOne" :key="obj.title">
        <h3>
          {{ obj.title }}
        </h3>
        <p>
          {{ obj.beskrivelse }}
        </p>
      </div>
    </section>
    <div class="sbs--item">
      <img :src="require('@/assets/images/disciplins/' + imgPath)" :alt="'Billede til disciplinen:' + dataObj.title" />
    </div>
    <section class="sbs--item">
      <div v-for="obj in areaTwo" :key="obj.title">
        <h3>
          {{ obj.title }}
        </h3>
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
        type: String
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
</style>