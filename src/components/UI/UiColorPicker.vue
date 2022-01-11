<template>
  <div class="emneColorBox" :style="'background-color:' + pickColor +';'">
    {{emne}}
  </div>
</template>

<script>
import allColors from "@/assets/data/data_colorpicker.json"


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
    }
  },
  computed: {
    pickColor() {
      let findMatch = allColors.find(obj => this.emne == obj.emne);
      if(!findMatch) findMatch = "#000";
      return findMatch.color;
    }
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.emneColorBox {
  display: inline-block;
  min-width: 10ch;
  color: var(--neutral-100);
  padding: 2px;
  text-align: center;
  border-radius: var(--edge);
}
</style>