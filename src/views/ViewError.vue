<template>
  <section id="errorPage" class="flex center column min--height--100 ama__bg">
    <div>
      <div class="error__textArea pad-ding error__divOne">
        <h1 class="clamp">404</h1>
        <h4 class="clamp">Hov, der gik noget galt!</h4>
        <h4 class="clamp">Vi kan ikke finde den side, du søgte efter.</h4>
      </div>
      <div class="pad-ding error__divTwo">
        <h6 class="clamp">Måske kan disse links hjælpe dig på vej:</h6>
        <ul class="clean">
          <li v-for="item in ulList" :key="item.title">
            <router-link :to="item.path" class="normal--link--red">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
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
          path: "/",
        },
        {
          title: "Holdplan",
          path: "/holdplan",
        },
        {
          title: "Nyheder",
          path: "/nyheder",
        },
        {
          title: "Events",
          path: "/events",
        },
      ],
    };
  },
  computed: {},
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
.error__divTwo,
.error__divOne {
  margin: 10% 0;
}
</style>