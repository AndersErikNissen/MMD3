<template>
  <div :style="styleObject">
    {{emne}}
  </div>
</template>

<script>
import allColors from "@/assets/data/data_colorpicker.vue"


export default {
  name: "UiColorPicker",
  props: {
    emne: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      allColors,
      styleObject: {
        "backgroundColor": this.pickColor,
      }
    }
  },
  computed: {
    pickColor() {
      let color = "#fff";
      switch(this.emne) {
        case 
      }
    }
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>