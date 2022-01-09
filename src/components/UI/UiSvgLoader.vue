<template>
    <!-- Reused from Github: AndersErikNissen/portfolio-v3 -->
  <div>
    <img
      :src="require('@/assets/svg/' + path)"
      alt="Svg fil"
    />
  </div>
</template>

<script>
export default {
  name: "SvgLoaderContainer",
  props: {
    path: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>