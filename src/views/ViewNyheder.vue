<template>
  <section>
    <header>
      <ul class="clean flex row">
        <li>
          <h2>Nyheder</h2>
        </li>
        <li>
          <h2>Dagens Træninger</h2>
        </li>
      </ul>
      <select name="emme" id="selectEmne" v-model="emneSelected">
        <option disabled value="all">Emne</option>
        <option value="all">Alle</option>
        <option v-for="emne in emneArray" :key="emne.emne" :value="emne.emne">
          {{ emne.emne }}
        </option>
      </select>
    </header>

    <all-types path="nyheds">
      <nyhed-card
        v-for="nyhed in showNyheds"
        :key="nyhed.title"
        :dataObj="nyhed"
      ></nyhed-card>
    </all-types>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import emneArray from "@/assets/data/data_colorpicker.json";

import allTypes from "../components/Layout/LayoutAllTypes.vue";
import nyhedCard from "../components/Nyheder/NyhedCard.vue";
export default {
  name: "ViewNyheder",
  props: {},
  components: {
    allTypes,
    nyhedCard,
  },
  data() {
    return {
      emneArray,
      emneSelected: "all",
    };
  },
  computed: {
    ...mapGetters({
      allNyheds: "a/allNyhedsAttributes",
    }),
    showNyheds() {
      let returnArray = this.allNyheds.filter(
        (obj) => obj.emne == this.emneSelected
      );
      if(this.emneSelected == "all") returnArray = this.allNyheds;

      return returnArray;
    },
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
</style>