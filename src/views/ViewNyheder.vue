<template>
  <main>
    <header>
      <ul class="clean flex row">
        <li>
          <button @click="nyheder = true">
            <h2>Nyheder</h2>
          </button>
        </li>
        <li>
          <button @click="nyheder = false">
            <h2>Dagens Træninger</h2>
          </button>
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

    <all-types path="nyheds" v-if="nyheder">
      <nyhed-card 
        v-for="nyhed in showNyheds"
        :key="nyhed.title"
        :dataObj="nyhed"
        :showNyhed="true"
      ></nyhed-card>
    </all-types>

    <all-types path="dagenstraenings" v-if="!nyheder">
      <nyhed-card
        v-for="traening in showDagens"
        :key="traening.title"
        :dataObj="traening"
      ></nyhed-card>
    </all-types>
  </main>
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
      nyheder: true,
    };
  },
  computed: {
    ...mapGetters({
      allNyheds: "a/allNyhedsAttributes",
      allDagenstraenings: "a/allDagensAttributes",
    }),
    showNyheds() {
      let returnArray = this.allNyheds.filter(
        (obj) => obj.emne == this.emneSelected
      );
      if (this.emneSelected == "all") returnArray = this.allNyheds;

      return returnArray;
    },
    showDagens() {
      let returnArray = this.allDagenstraenings.filter(
        (obj) => obj.emne == this.emneSelected
      );
      if (this.emneSelected == "all") returnArray = this.allDagenstraenings;

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