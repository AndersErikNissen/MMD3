<template>
  <section class="flex center">
      <ul class="clean flex row">
        <li class="spacing">
          <router-link to="/login" class="nav--linkStyle btnLook">
              Login
          </router-link>
        </li>
        <li class="spacing">
          <router-link :to="{path: '/login', query: {type: 'create'}}" class="nav--linkStyle nowrap">
              Opret Bruger
          </router-link>
        </li>
      </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
</style>