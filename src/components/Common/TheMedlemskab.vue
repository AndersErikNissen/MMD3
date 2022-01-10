<template>
  <section>
      <section>
          <h2>
              {{getInfo.title}}
          </h2>
          <p>
              {{getInfo.beskrivelse}}
          </p>
      </section>
    <section
      v-for="medlemskab in getAtt"
      :key="medlemskab.title"
      :class="medlemskab.title == 'År' ? 'medlemskab__card--larger' : ''"
    >
      <div class="medlemskab__card--header">
        <h3>
          {{ medlemskab.title }}
        </h3>
      </div>
      <div class="medlemskab__card--center">
        <ul>
          <li class="medlemskab__pris--after">
            {{ medlemskab.prisafter }} DKK
          </li>
          <li
            v-if="medlemskab.prisbefore != ''"
            class="medlemskab__pris--before"
          >
          <!-- &nbsp; used to create space on each side -->
           &nbsp;{{ medlemskab.prisbefore }} DKK&nbsp;
          </li>
        </ul>
      </div>
      <div class="medlemskab__card--footer">
          <link-btn>
            {{medlemBtn}}
          </link-btn>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import linkBtn from "../UI/UiButtonLink.vue"
export default {
  name: "TheMedlemskab",
  props: {},
  components: {
      linkBtn,
  },
  data() {
    return {
        medlemBtn: "Start dit Medlemskab"
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
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.medlemskab__pris--before {
  color: var(--neutral-300);
  text-decoration: line-through;
  text-decoration-color: var(--neutral-300);
}
.medlemskab__pris--after {
  color: var(--neutral-900);
}
.medlemskab__card--larger {
  background-color: var(--info-500);
}
</style>