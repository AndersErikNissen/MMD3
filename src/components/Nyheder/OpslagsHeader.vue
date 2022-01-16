<template>
  <header>
    <section class="max-1200">
      <div  v-if="!isDesktop" class="flex center">
        <button @click="showFilter = !showFilter" class="btn">
          <span> Ændre Filtrer &#8681;</span>
        </button>
      </div>
      <section
        v-if="isDesktop || (!isDesktop && showFilter)"
        class="opslagsHeader__Ul--container"
      >
        <div>
          <p class="bold">Kategorier</p>
          <ul
            :class="[isDesktop ? 'flex--se' : 'grid--opslag column not--desk', 'clean flex']"
          >
            <li
              class="large"
              @click="
                changeType(true);
                changeActive('Alle');
              "
              :class="checkNyhed ? 'active' : 'inactive'"
            >
              Nyheder
            </li>
            <li
              class="large"
              @click="
                changeType(false);
                changeActive('Alle');
              "
              :class="!checkNyhed ? 'active' : 'inactive'"
            >
              Dagens Træning
            </li>
          </ul>
        </div>
        <div>
          <p class="bold">Emner</p>
          <ul
            :class="[
              !isDesktop ? 'grid--opslag column center' : 'row--sb',
              'clean flex',
            ]"
          >
            <li
              @click="changeActive('Alle')"
              :style="[
                choosen == 'Alle'
                  ? 'background-color:#37B00C'
                  : 'background-color: var(--neutral-400); color: var(--neutral-300',
              ]"
              class="emneBtn"
            >
              Alle
            </li>
            <li
              @click="changeActive(emne.emne)"
              v-for="(emne, index) in emneArray"
              :key="emne.emne"
              :style="[
                choosen == emne.emne
                  ? 'background-color:' + emne.color
                  : 'background-color: var(--neutral-400); color: var(--neutral-300',
              ]"
              class="emneBtn"
            >
              {{ emne.emne }} ({{ getEmneArrayLengths[index] }})
            </li>
          </ul>
        </div>
      </section>
    </section>
  </header>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import emneArray from "@/assets/data/data_colorpicker.json";

export default {
  name: "OpslagsHeader",
  props: {
    checkNyhed: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {
      emneArray,
      choosen: "Alle",
      showFilter: false,
    };
  },
  computed: {
    ...mapGetters({
      allNyheds: "a/allNyhedsAttributes",
      allDagenstraenings: "a/allDagensAttributes",
    }),
    ...mapState({
      windowWidth: (state) => state.windowWidth,
    }),
    getEmneArrayLengths() {
      let newArray = [];
      this.emneArray.forEach((emneCheck) => {
        let amount = 0;
        if (this.checkNyhed) {
          amount = this.allNyheds.filter(
            (obj) => obj.emne == emneCheck.emne
          ).length;
        } else {
          amount = this.allDagenstraenings.filter(
            (obj) => obj.emne == emneCheck.emne
          ).length;
        }
        newArray.push(amount);
      });
      return newArray;
    },
    isDesktop() {
      if (this.windowWidth > 1024) return true;
      return false;
    },
  },
  methods: {
    changeActive(element) {
      this.choosen = element;
      this.$emit("newFilter", this.choosen);
    },
    changeType(nyhed) {
      this.$emit("changeNyhed", nyhed);
    },
  },
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: sticky;
  left: 0;
  top: 66.81px;
  background-color: var(--neutral-500);
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  margin: 0 0 0 0.3rem;
  padding: 0;
}
section {
  border-radius: var(--edge);
  width: 100%;
  & div {
    padding: 0.3rem;
  }
}
ul {
  width: 100%;
  padding: 0.3rem;
  &.not--desk {
    margin: 0 0 1rem 0;
  }
}
.emneBtn {
  cursor: pointer;
  border-radius: var(--edge);
  padding: 0.3rem;
  min-width: 12ch;
  text-align: center;
  margin: 1px;

  justify-self: center;
  @media screen and (max-width: 1024px) {
    margin: 0.3rem;
    min-width: 15ch;
  }
}
li {
  &.large {
    cursor: pointer;
    font-size: 1.3rem;
    border-radius: var(--edge);
    padding: 0.3rem;
    width: 50%;
    text-align: center;

    &:nth-child(1) {
      margin-right: 1rem;
    }
    &:nth-child(2) {
      margin-left: 1rem;
    }

    &.active {
      background-color: var(--primary-500);
    }
    &.inactive {
      color: var(--neutral-300);
      background-color: var(--neutral-400);
    }
    @media screen and (max-width: 1024px) {
      &:nth-child(1) {
        margin-right: 0rem;
      }
      &:nth-child(2) {
        margin-left: 0rem;
      }
    }
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
      margin: 0.2rem 0;
      width: 100%;
    }
  }
}

// Non Desktop Filter
.grid--opslag {
  display: grid;
  grid-template-columns: repeat(2, 1fr);


  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
  }
}
</style>