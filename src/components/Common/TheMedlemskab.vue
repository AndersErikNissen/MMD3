<template>
  <section>
    <section
      v-for="medlemskab in getAtt"
      :key="medlemskab.title"
      :class="medlemskab.title == 'År' ? 'medlemskab__card--larger' : ''"
    >
      {{ medlemskab }}
      <div class="medlemskab__card--header">
        <h3>
          {{ medlemskab.title }}
        </h3>
      </div>
      <div class="medlemskab__card--center">
        <ul>
          <li
            v-if="medlemskab.prisbefore != ''"
            class="medlemskab__pris--after"
          >
            {{ medlemskab.prisbefore }}
          </li>
          <li class="medlemskab__pris--before">
            {{ medlemskab.prisafter }}
          </li>
        </ul>
      </div>
      <div class="medlemskab__card--footer">
          <a href="http://" target="_blank" class="btn">
          {{medlemBtn}}
          </a>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import 
export default {
  name: "TheMedlemskab",
  props: {},
  components: {},
  data() {
    return {
        medlemBtn: "Start dit Medlemskab"
    };
  },
  computed: {
    ...mapGetters({
      getAtt: "a/allMedlemskabsAttributes",
    }),
  },
  methods: {},
  created() {},
  mounted() {},
  watch() {},
};
</script>

<style lang="scss" scoped>
.medlemskab__pris--before {
  color: var(--neutral-300);
}
.medlemskab__pris--after {
  color: var(--neutral-900);
}
.medlemskab__card--larger {
  background-color: var(--primary-500);
}
</style>