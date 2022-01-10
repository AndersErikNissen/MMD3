<template>
  <section class="flex center">
    <ul class="clean flex">
      <li v-for="nav in getNav" :key="nav.title" class="spacing">
        <router-link v-if="!nav.dropdown" :to="nav.path" class="nav--linkStyle">
          {{ nav.title }}
        </router-link>
        <div v-else class="nav--dropdown--parent">
          <div class="flex row">
            <router-link to="/discipliner" class="nav--linkStyle">
              {{ nav.title }}
            </router-link>
            <img
              class="nav__dropdownArrow"
              :src="dropArrow"
              alt="Nedad vendende pil"
            />
          </div>
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
import dropArrow from "@/assets/svg/dropdown_arrow.svg";
export default {
  name: "TheNavigationList",
  props: {},
  components: {},
  data() {
    return {
      dropArrow,
    };
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