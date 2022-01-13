<template>
  <section class="flex grid--3x1">
    <div>
      <h2 class="clamp--small pad-ding">
        {{ forside.spoergsmaal.title }}
      </h2>
      <p class="bold pad-ding">
        {{ forside.spoergsmaal.beskrivelse }}
      </p>
    </div>
    <div class="kontakt__img--container flex center">
      <img :src="imgKontakt" alt="Billede til kontaktsektion" />
    </div>
    <div>
      <h2 class="clamp--small pad-ding">
        {{ forside.bestyrelsen.title }}
      </h2>
      <p class="bold pad-ding">
        {{ forside.bestyrelsen.beskrivelse }}
      </p>
    </div>
  </section>
</template>

<script>
import imgKontakt from "@/assets/images/homepagefooter.png";
import { mapGetters } from "vuex";
export default {
  name: "ForsideKontaktBlock",
  props: {},
  components: {
  },
  data() {
    return {
      imgKontakt,
    };
  },
  computed: {
    ...mapGetters({
      forside: "s/getForsideAttributes",
    }),
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.kontakt__img--container {
  width: 100%;
}
img {
  height: auto;
  max-width: 200px;
}
section {
  align-items: center;
}
</style>