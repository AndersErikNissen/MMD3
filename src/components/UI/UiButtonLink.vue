<template>
  <a href="http://" target="_blank" class="btn">
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
      required: true,
    },
  },
  data() {
    return {
      routerInfo: {
        path: url.path,
        meta: {
          title: url.title,
          desc: url.desc,
        },
      },
    };
  },
};
</script>