<template>
  <router-link :to="routerInfo" class="btn">
    <span>
      <slot></slot>
    </span>
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
        path: this.url.path,
        meta: {
          title: this.url.title,
          desc: this.url.beskrivelse,
        },
      },
    };
  },
};
</script>