<template>
  <a :href="url" target="_blank" class="btn">
    <span>
      <slot> Link </slot>
    </span>
  </a>
</template>

<script>
export default {
  name: "UiButtonRouter",
  props: {
    url: {
      type: Object,
      // required: true,
    },
  },
};
</script>