<template>
  <section>
    <nav-bar id="nav--bar">
      <nav-list v-if="screenType"></nav-list>
        
    </nav-bar>
  </section>
</template>

<script>
import navList from "./Navigation/TheNavigationList.vue";
import navBar from "./Navigation/TheNavigationBar.vue";
import { mapState } from "vuex";
export default {
  name: "",
  props: {},
  components: {
    navList,
    navBar,
  },
  data() {
    return {
        
    }
  },
  computed: {
    ...mapState({
        window: state => state.windowWidth
    }),
    screenType() {
        let response = true;
        if(this.window < 1024) {
            response = false;
        }
        return response;
    }
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
#nav--bar {
    background-color: blue;
}
</style>