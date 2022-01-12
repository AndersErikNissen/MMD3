<template>
  <section class="forside__traener--info flex center column">
    <div v-if="forside">
      <h2>
        {{ getInfo.title }}
      </h2>
      <p>
        {{ getInfo.beskrivelse }}
      </p>
    </div>
    <section class="traener__all--container flex center">
      <div class="traener__hideContainer flex row--se">
        <traener-block
          :forside="true"
          v-for="traener in allAtt"
          :key="traener.id"
          :dataObj="traener"
        ></traener-block>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import traenerBlock from "./TraenerBlock.vue";
export default {
  name: "TraenerBlockContainer",
  props: {},
  components: {
    traenerBlock,
  },
  data() {
    return {};
  },
  computed: {
    // ... is called "Spread Operator", and can be used for things like to copy an array/object, in to a new array/object. (So a bit like using a forEach(with maybe a .push))
    ...mapGetters({
      // We can't just type allTraeners to access our getter, because it's inside our module for allTypes.
      allAtt: "a/allTraenersAttributes",
      forside: "s/getForsideAttributes",
    }),
    getInfo() {
      return this.forside.traenere_info;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.forside__traener--info {
  width: 100%;
  & .traener__all--container {
    width: 100%;
  }
  & .traener__hideContainer {
    overflow: hidden;
    width: 100%;
    animation: slide 10s infinite linear;
  }
  
}
</style>