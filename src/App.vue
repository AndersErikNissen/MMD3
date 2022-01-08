<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">About</router-link>
  </div>

  <h1>APP</h1>
  <button @click="getSingle">TEST BTN</button>
  <p>
    {{loading}}
  </p>
  <p>
    <!-- {{ tests }} -->
  </p>

  <router-view />
  <the-footer></the-footer>
</template>

<script>
import theFooter from "./components/Common/TheFooter.vue"

export default {
  name: "App",
  data() {
    return {
      path: "the-footer",
      tests: this.$store.state.s.data,
      loading: false
    };
  },
  components: {
    theFooter,
  },
  computed: {
    getData() {
      return this.$store.state.s.data.forside
    }
  },
  methods: {
    async getSingle() {
      // Same structure with Async/Await + Try/Catch, from Github: AndersErikNissen/portfolio-v3, the difference is in the $store.
      if (!this.getData) {
        this.loading = true;
        try {
          await this.$store.dispatch("s/getSingle", this.path);
        } catch(err) {
          this.loading = false;
          console.log("%c GET ERROR ", "background-color: red;", err)
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

<style lang="scss">
</style>
