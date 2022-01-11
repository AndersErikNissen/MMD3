<template>
  <article>
    <div>
      <img :src="require('@/assets/images/nyheds/' + dataObj.billede)" :alt="'Billede til nyheden ' + dataObj.title" />
    </div>
    <section class="nyhed__card--textContainer">
      <div class="flex row nyhed__card--info">
        <!-- "meta" -->
        <!-- 
              Split:
                (T) > (-) 
            -->
        <color-picker :emne="dataObj.emne"></color-picker>
        <div class="flex row">
          <img
            class="calenderSvg"
            :src="calenderSvg"
            alt="Icon i form af en kalender"
          />
          <p>
            {{ getDate }}
          </p>
        </div>
      </div>
      <section>
        <h2 class="clamp--small">
          {{ dataObj.title }}
        </h2>
        <p>
          {{ dataObj.beskrivelse }}
        </p>
      </section>
    </section>
  </article>
</template>

<script>
import calenderSvg from "@/assets/svg/calender.svg";
import colorPicker from "../UI/UiColorPicker.vue";
export default {
  name: "NyhedCard",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    colorPicker,
  },
  data() {
    return {
      calenderSvg,
    };
  },
  computed: {
    getDate() {
      let base = this.dataObj.publishedAt,
        splitT = base.split("T")[0],
        splitNr = splitT.split("-"),
        returnArray = splitNr[2] + "/" + splitNr[1] + " - " + splitNr[0];

      return returnArray;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
img {
    max-width: 500px;
}
.nyhed__card--info {
    padding: 1rem 0;
}
</style>