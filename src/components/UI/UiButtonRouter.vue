<template>
  <router-link :to="routerInfo">
    <slot></slot>
  </router-link>
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