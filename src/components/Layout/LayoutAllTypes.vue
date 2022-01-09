<template>
  <section>
    <transition name="fade_InOut">
      <section v-if="loading">
        <h2>Loading...</h2>
      </section>
    </transition>

    <main v-if="getAllData && !loading">
      <!-- Default Slot -->
      <slot :getAllData="getAllData"  />
    </main>
  </section>
</template>

<script>
export default {
  name: "UiHandlerAllTypes",
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
</style>