<template>
  <article class="nyhedCard__shell flex center column">
    <div>
      <img
        v-if="showNyhed"
        :src="require('@/assets/images/nyheds/' + dataObj.billede)"
        :alt="'Billede til nyheden ' + dataObj.title"
      />
      <div v-else class="sideBySide">
        <img
          v-for="billede in dataObj.billeder"
          :key="billede.id"
          :src="require('@/assets/images/dagens/' + billede.billede)"
          :alt="'Billeder til Dagens Træning: ' + dataObj.title"
          class="sbs--item"
        />
      </div>
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
        <h6 class="clamp--small">
          {{ dataObj.title }}
        </h6>
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
    showNyhed: {
      type: Boolean,
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
.nyhedCard__shell {
  background-color: var(--neutral-600);
  padding: .5rem;
  max-width: 60ch;
  margin: 1rem 0;
  border-radius: var(--edge);
}
img {
  max-width: 500px;
}
</style>