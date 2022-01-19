<template>
  <main class="max-width flex center column ama__bg">
    <header class="flex">
      <div class="pad-ding">
        <h1 class="clamp red">Events</h1>
        <p>
          Her kan du finde alle kalenderlagte events, deres beskrivelse,
          tidspunkt samt adresse. Vil du vide mere om et event, eller har du
          nogle spørgsmål så kan du tage fat i en træner eller et medlem i
          bestyrelsen.
        </p>
      </div>
      <section class="event__buttons flex center">
        <div class="flex row">
          <button @click="downMonth()">
            <img class="eventArrow arrowLeft" :src="dropArrow" alt="Pil" />
          </button>
          <h6>{{ monthText }} {{ year }}</h6>
          <button @click="upMonth()">
            <img class="eventArrow arrowRight" :src="dropArrow" alt="Pil" />
          </button>
        </div>
      </section>
    </header>
    <all-types path="events" class="min--height--100">
      <section class="grid--2x2">
        <event-card
          v-for="event in matchEventWithMonths"
          :key="event.title"
          :dataObj="event"
          :monthText="monthText"
        ></event-card>
      </section>
      <section v-if="!matchEventWithMonths" class="flex center min--height--50">
        <p>
          <i> Der er desværre ingen events i denne måned, endnu. </i>
        </p>
      </section>
    </all-types>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import dropArrow from "@/assets/svg/dropdown_arrow.svg";

import allTypes from "../components/Layout/LayoutAllTypes.vue";
import eventCard from "../components/Event/EventCard.vue";
export default {
  name: "ViewEvents",
  props: {},
  components: {
    allTypes,
    eventCard,
  },
  data() {
    return {
      dropArrow,
      newDate: new Date(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    }
  },
  computed: {
    ...mapGetters({
      allEvents: "a/allEventsAttributes",
    }),
    monthText() {
      let txt = "",
        month = this.month.toString();

      // Since Strapi gives back a date with 01 being Januar, we are converting this.month
      if (month.length == 1) month = "0" + month;

      switch (month) {
        case "01":
          txt = "Januar";
          break;
        case "02":
          txt = "Februar";
          break;
        case "03":
          txt = "Marts";
          break;
        case "04":
          txt = "April";
          break;
        case "05":
          txt = "Maj";
          break;
        case "06":
          txt = "Juni";
          break;
        case "07":
          txt = "Juli";
          break;
        case "08":
          txt = "August";
          break;
        case "09":
          txt = "September";
          break;
        case "10":
          txt = "Oktober";
          break;
        case "11":
          txt = "November";
          break;
        case "12":
          txt = "December";
          break;
      }
      return txt;
    },
    matchEventWithMonths() {
      let newArray = [];

      this.allEvents.forEach((each) => {
        let dateStart = each.datostart,
          stringDate = dateStart.split("T")[0],
          stringUpdate = stringDate.split("-");
        // Check if it's the correct year and that the month matches with this.month(the month currently being shown)
        if (stringUpdate[1] == this.month && stringUpdate[0] == this.year) {
          newArray.push(each);
        }
      });

      if (newArray.length == 0) newArray = false;
      return newArray;
    },
  },
  methods: {
    upMonth() {
      this.month++;
      if (this.month > 12) {
        this.month = 1;
      }
    },
    downMonth() {
      this.month--;
      if (this.month < 1) {
        this.month = 12;
      }
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
h6 {
  font-family: "Roboto", sans-serif;
  min-width: 10ch;
  text-align: center;
}
.arrowLeft {
  transform: rotate(90deg);
}
.arrowRight {
  transform: rotate(-90deg);
}
.eventArrow {
  width: 1.5rem;
  margin: 0 1rem;
}
header {
  width: 100%;
  align-items: center;
  & > div {
    justify-content: space-between;
  }
  @media screen and (max-width: 648px) {
    flex-direction: column;
  }
}
.event__buttons {
  width: 100%;
  padding: 1rem 0;
}
main {
  padding-bottom: 2rem;
}
</style>