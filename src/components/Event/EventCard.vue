<template>
  <section
    :class="[date > dateInfo.stop ? 'hide' : '', 'eventCard__container']"
  >
    <!-- hide will be applied if we are past that day in the month, and we are using dateInfo.stop not start, because we want to show event that might still be on-going -->
    <header>
      <h3>
        <span class="event__date--red">
          {{ dateInfo.start }} - {{ dateInfo.stop }}
        </span>
        <span>
          {{ monthText }}
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
    <section class="eventCard__textArea">
      <h4>
        {{ dataObj.indhold.title }}
      </h4>
      <p>
        {{ dataObj.indhold.beskrivelse }}
      </p>
    </section>
    <div class="eventCard__adresse flex row">
      <img class="svg__adresse" :src="svgAdresse" alt="Pin" />
      <p>
        {{ dataObj.adresse }}
      </p>
    </div>
  </section>
</template>

<script>
import svgAdresse from "@/assets/svg/adresse.svg";
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
      required: true,
    },
  },
  components: {
    colorPicker,
  },
  data() {
    return {
      svgAdresse,
      date: new Date().getDate(),
    };
  },
  computed: {
    dateInfo() {
      let baseStart = this.dataObj.datostart.split("T")[0].split("-"),
        baseStop = this.dataObj.datoslut.split("T")[0].split("-"),
        obj = {
          start: baseStart[2],
          stop: baseStop[2],
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
.eventCard__container {
  background-color: var(--neutral-900);
  border-radius: var(--edge);
  padding: 1.5rem;
  h3 {
    font-family: "Roboto", sans-serif;
    margin: 0 0 1rem 0;
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
    margin-top: 1rem;
    & .svg__adresse {
      width: 1.5rem;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  & .eventCard__textArea {
      margin: 1rem 0;
  }
}
.hide {
  opacity: 0.4;
}
</style>