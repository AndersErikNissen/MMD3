<template>
  <section id="errorPage">
    <div class="error__textArea">
      <h1>404</h1>
      <h4>Hov, der gik noget galt!</h4>
      <h4>Vi kan ikke finde den side, du søgte på.</h4>
    </div>
    <div>
        <h6>
            Måske kan disse links hjælpe dig på vej:
        </h6>
        <ul>
            <li v-for="item in ulList" :key="item.title">
                <router-link :to="item.path" class="normal--link--red">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
         ulList: [
          {
              title: "Tilbage til Forsiden",
              path: "/"
          },
          {
              title: "Holdplan",
              path: "/holdplan"
          },
          {
              title: "Nyheder",
              path: "/nyheder"
          },
          {
              title: "Events",
              path: "/events"
          }
      ]
    };
  },
  computed: {
     
  },
  methods: {},
  created() {},
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
h1 {
    color: var(--primary-500);
}
#errorPage {
    min-height: 100vh;

    & .error__textArea {
        margin-bottom: 2rem;
    }
}
</style>