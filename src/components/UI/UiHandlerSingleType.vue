<template>
  <section>
    <transition>
      <section v-if="loading">
        <h2>Loading...</h2>
      </section>
    </transition>
    <header v-if="getData && !loading">
      <slot name="header" :data="getData" />
    </header>
    <main v-if="getData && !loading">
      <!-- Default Slot -->
      <slot :data="getData" />
    </main>
  </section>
</template>

<script>
export default {
  name: "UiHandlerSingleType",
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getData() {
      return this.$store.state.s.data[this.path];
    },
  },
  methods: {
    async getSingle() {
      // Same structure with Async/Await + Try/Catch, from Github: AndersErikNissen/portfolio-v3, the difference is in the $store.
      if (!this.getData) {
        this.loading = true;
        try {
          await this.$store.dispatch("s/getSingle", this.path);
        } catch (err) {
          this.loading = false;
          console.log("%c GET ERROR ", "background-color: red;", err);
        }
        this.loading = false;
      }
    },
  },
  created() {
    this.getSingle();
  },
};
</script>

<style lang="scss" scoped>
</style>