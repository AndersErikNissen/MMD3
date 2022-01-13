<template>
  <main class="flex center column ama__bg min--height--100">
    <section class="flex column max-1200">
      <header>
        <div class="clean flex nyheder__buttons">
          <button @click="nyheder = true" :class="nyheder ? 'active' : ''">
            <h2>Nyheder</h2>
          </button>
          <button @click="nyheder = false" :class="!nyheder ? 'active' : ''">
            <h2>Dagens Træninger</h2>
          </button>
          <div class="flex center">
            <select name="emme" id="selectEmne" v-model="emneSelected">
              <option disabled value="all">Emne</option>
              <option value="all">Alle</option>
              <option
                v-for="emne in emneArray"
                :key="emne.emne"
                :value="emne.emne"
              >
                {{ emne.emne }}
              </option>
            </select>
          </div>
        </div>
      </header>

      <all-types
        path="nyheds"
        v-if="nyheder"
        class="flex center column min--height--100"
      >
        <nyhed-card
          v-for="nyhed in showNyheds"
          :key="nyhed.title"
          :dataObj="nyhed"
          :showNyhed="true"
        ></nyhed-card>
        <section v-if="showNyheds.length == 0">
          <p class="pad-ding">
            <i
              >Vi beklager men vi kan ikke finde noget som matcher dette
              filter!</i
            >
          </p>
        </section>
      </all-types>

      <all-types
        path="dagenstraenings"
        v-if="!nyheder"
        class="flex center column min--height--100"
      >
        <nyhed-card
          v-for="traening in showDagens"
          :key="traening.title"
          :dataObj="traening"
        ></nyhed-card>
        <section v-if="showDagens.length == 0">
          <p class="pad-ding">
            <i
              >Vi beklager men vi kan ikke finde noget som matcher dette
              filter!</i
            >
          </p>
        </section>
      </all-types>
    </section>
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
      console.log(returnArray);
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
button {
  color: var(--neutral-100);
  text-decoration: underline;
  &.active {
    color: var(--primary-500);
  }
}
select {
  background-color: transparent;
  border-radius: var(--edge);
  border: solid 2px var(--primary-500);
  height: 2rem;
  color: var(--neutral-100);
}
option {
  background-color: var(--neutral-500);
  border: solid 2px var(--primary-500);
  height: 2rem;
  color: var(--neutral-100);
}
main {
  & section {
    width: 100%;
    & > * {
      width: 100%;
    }
  }
}
.nyheder__buttons {
  padding: 0 1rem;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
  }
}
</style>