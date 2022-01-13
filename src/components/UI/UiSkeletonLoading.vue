<template>
  <section class="min--height--100 flex center">
      <img :src="loadingSvg" alt="Loading Svg">
  </section>
</template>

<script>
import loadingSvg from "@/assets/svg/loading_square.svg"

export default {
  name: "UiSkeletonLoading",
  props: {},
  components: {},
  data() {
    return {
        loadingSvg
    }
  },
  computed: {
   
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>