<template>
  <section>
    <header>
      <h3>
          <span class="event__date--red">
              {{ dateInfo.start }} - {{ dateInfo.stop}}
          </span>
          <span>
          {{monthText}}
          </span>
      </h3>
      <div>
        <color-picker
          v-for="emne in dataObj.emner"
          :key="emne.id"
          :emne="emne.emne"
        ></color-picker>
      </div>
    </header>
    <section>
        <h4>
          {{dataObj.indhold.title}}
        </h4>
        <p>
          {{dataObj.indhold.beskrivelse}}
        </p>
    </section>
    <div class="eventCard__adresse flex row">
        <img class="svg__adresse" :src="svgAdresse" alt="Pin">
        <p>
            {{dataObj.adresse}}
        </p>
    </div>
  </section>
</template>

<script>
import svgAdresse from "@/assets/svg/adresse.svg"
import colorPicker from "../UI/UiColorPicker.vue";
export default {
  name: "EventCard",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    monthText: {
        type: String,
        required: true
    }
  },
  components: {
    colorPicker,
  },
  data() {
    return {
        svgAdresse
    }
  },
  computed: {
    dateInfo() {
        let 
        baseStart = this.dataObj.datostart.split("T")[0].split("-"),
        baseStop = this.dataObj.datoslut.split("T")[0].split("-"),
        obj = {
            start: baseStart[2],
            stop: baseStop[2]
        };

        return obj;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
h3 {
    font-family: 'Roboto', sans-serif;
}
.event__date--red {
    color: var(--primary-500);
    margin-right: 1rem;
}
.event__date--white {
    color: var(--neutral-100);
    font-weight: 400;
}
.eventCard__adresse {
    
    & .svg__adresse {
        width: 1.5rem;
        display: inline-block;
        margin-right: .5rem;
    }
}
</style>