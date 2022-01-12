<template>
  <section>
      <div>
          <p>
              {{dataObj.starttid}} - {{dataObj.sluttid}}
          </p>
      </div>
      <h6>
          {{dataObj.title}}
      </h6>
      <button class="btn">
          Tilmeld
      </button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HoldplanCard",
  props: {
      dataObj: {
          type: Object,
          required: true
      }
  },
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
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>