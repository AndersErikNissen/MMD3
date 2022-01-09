<template>
  <section class="flex center">
    <ul class="clean flex">
      <li v-for="nav in getNav" :key="nav.title" class="spacing">
        <router-link v-if="!nav.dropdown" :to="nav.path" class="nav--linkStyle">
          {{ nav.title }}
        </router-link>
        <div v-else class="nav--dropdown--parent">
          <p class="nav--linkStyle">
            {{ nav.title }}
          </p>
          <ul class="clean nav--dropdown">
            <li v-for="disciplin in nav.data" :key="disciplin.title">
              <router-link
                :to="disciplinPathBase + disciplin.path"
                class="nav--linkStyle"
              >
                {{ disciplin.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigationList",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getNav: "getNavigation",
    }),
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>

</style>