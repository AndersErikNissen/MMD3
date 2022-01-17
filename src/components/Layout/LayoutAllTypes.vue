<template>
  <section>
    <transition name="fade_InOut">
      <ui-loader v-if="loading"></ui-loader>
    </transition>

    <section v-if="getAllData && !loading" class="allTypes__default">
      <!-- Default Slot -->
      <slot :getAllData="getAllData"  />
    </section>
  </section>
</template>

<script>
import uiLoader from "../UI/UiSkeletonLoading.vue"

export default {
  name: "UiHandlerAllTypes",
  props: {
    path: {
      type: String,
    },
  },
  components: {
    uiLoader,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getAllData() {
      return this.$store.state.a.data[this.path];
    }
  },
  methods: {
    async getAll() {
      // Same structure with Async/Await + Try/Catch, from Github: AndersErikNissen/portfolio-v3, the difference is in the $store.
      if (!this.getAllData) {
        this.loading = true;
        try {
          await this.$store.dispatch("a/getAll", this.path);
        } catch (err) {
          this.loading = false;
          console.log("%c GET ERROR ", "background-color: red;", err);
          this.$router.push("/error");
        }
        this.loading = false;
      }
    },
  },
  created() {
    this.getAll();
  },
};
</script>

<style lang="scss" scoped>
.allTypes__default {
  width: 100%;
}
</style>