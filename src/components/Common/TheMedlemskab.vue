<template>
  <section>
    <header class="flex center makeSpace">
      <div class="flex center column">
        <h2 class="clamp--small pad-ding">
          {{ getInfo.title }}
        </h2>
        <p class="pad-ding">
          {{ getInfo.beskrivelse }}
        </p>
      </div>
    </header>
    <div class="flex medlem__container">
      <section
        v-for="medlemskab in getSort"
        :key="medlemskab.title"
        :class="[
          medlemskab.title == 'Årligt' ? 'medlemskab__card--larger' : '',
          'medlemskab__cardShell',
        ]"
      >
        <div class="medlemskab__card--header flex center">
          <h5 class="clamp pad-ding">
            {{ medlemskab.title }}
          </h5>
        </div>
        <div class="medlemskab__card--center">
          <ul class="clean flex center column">
            <li class="medlemskab__pris--after">
              {{ medlemskab.prisafter }} DKK
            </li>
            <li
              v-if="medlemskab.prisbefore != null"
              class="medlemskab__pris--before"
            >
              <!-- &nbsp; used to create space on each side -->
              &nbsp;{{ medlemskab.prisbefore }} DKK&nbsp;
            </li>
          </ul>
        </div>
        <div class="medlemskab__card--footer">
          <link-btn url="http://aalborgmartialarts.dk/medlem/">
            {{ medlemBtn }}
          </link-btn>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import linkBtn from "../UI/UiButtonLink.vue";
export default {
  name: "TheMedlemskab",
  props: {},
  components: {
    linkBtn,
  },
  data() {
    return {
      medlemBtn: "Start dit Medlemskab",
    };
  },
  computed: {
    ...mapGetters({
      getAtt: "a/allMedlemskabsAttributes",
      forside: "s/getForsideAttributes",
    }),
    getInfo() {
      return this.forside.medlemskab_info;
    },
    getSort() {
      let newArr = [{}, {}, {}];
      this.getAtt.forEach((each) => {
        switch (each.title) {
          case "Årligt":
            newArr[1] = each;
            break;
          case "Halv Årligt":
            newArr[2] = each;
            break;
          case "Månedligt":
            newArr[0] = each;
            break;
        }
      });
      return newArr;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.medlem__container {
  justify-content: space-evenly;
  & .medlemskab__card--footer {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    & .medlemskab__cardShell {
      margin: 3rem 0;
      padding: 0 2%;
    }
  }
}
.medlemskab__cardShell {
  border-radius: var(--edge);
  overflow: hidden;
  max-width: 300px;
}
.medlemskab__card--header,
.medlemskab__card--footer {
  background-color: var(--neutral-700);
  padding: 1rem;
}
ul {
  & li {
    font-size: 1.2rem;
  }
  & .medlemskab__pris--before {
    color: var(--neutral-400);
    text-decoration: line-through;
    text-decoration-color: var(--neutral-400);
  }
  & .medlemskab__pris--after {
    color: var(--neutral-100);
    font-weight: 700;
    font-size: 1.5rem;
  }
  min-height: 100px;
  background-color: var(--neutral-600);
}
.medlemskab__card--larger {
  @media screen and (min-width: 1025px) {
    transform: scale(1.15);
  }
  & .medlemskab__card--header,
  & .medlemskab__card--footer {
    background-color: var(--primary-700);
    padding: 1rem;
  }
}
</style>