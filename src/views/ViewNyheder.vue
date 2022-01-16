<template>
  <main class="flex center column ama__bg min--height--100">
    <section class="flex column max-1200">
      <all-types
        path="nyheds"
        v-if="nyheder"
        class="flex center column min--height--100"
      >
        <opslags-header
          :checkNyhed="nyheder"
          @newFilter="changeSelected"
          @changeNyhed="changeNyhed"
        ></opslags-header>
        <div>
          <h1>Nyheder</h1>
        </div>
        <div v-if="!showNyheds.length == 0" class="grid--2x2 min--height--75">
          <nyhed-card
            v-for="nyhed in showNyheds"
            :key="nyhed.title"
            :dataObj="nyhed"
            :showNyhed="true"
          ></nyhed-card>
        </div>
        <section
          v-if="showNyheds.length == 0"
          class="min--height--75 flex center"
        >
          <p class="pad-ding">
            <i
              >Vi beklager, men vi kan ikke finde noget som matcher dette
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
        <opslags-header
          :checkNyhed="nyheder"
          @newFilter="changeSelected"
          @changeNyhed="changeNyhed"
        ></opslags-header>
        <div>
          <h1>Dagens Træninger</h1>
        </div>
        <div v-if="!showDagens.length == 0" class="grid--2x2 min--height--75">
          <nyhed-card
            v-for="traening in showDagens"
            :key="traening.title"
            :dataObj="traening"
          ></nyhed-card>
        </div>
        <section
          v-if="showDagens.length == 0"
          class="min--height--75 flex center"
        >
          <p class="pad-ding">
            <i
              >Vi beklager, men vi kan ikke finde noget som matcher dette
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

import opslagsHeader from "../components/Nyheder/OpslagsHeader.vue";
import allTypes from "../components/Layout/LayoutAllTypes.vue";
import nyhedCard from "../components/Nyheder/NyhedCard.vue";
export default {
  name: "ViewNyheder",
  props: {},
  components: {
    allTypes,
    nyhedCard,
    opslagsHeader,
  },
  data() {
    return {
      emneArray,
      emneSelected: "Alle",
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
      if (this.emneSelected == "Alle") returnArray = this.allNyheds;

      return returnArray;
    },
    showDagens() {
      let returnArray = this.allDagenstraenings.filter(
        (obj) => obj.emne == this.emneSelected
      );
      if (this.emneSelected == "Alle") returnArray = this.allDagenstraenings;
      return returnArray;
    },
  },
  methods: {
    changeSelected(valgt) {
      this.emneSelected = valgt;
    },
    changeNyhed(nyhed) {
      this.nyheder = nyhed;
    },
  },
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