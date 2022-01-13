<template>
  <main>
    <section class="flex center column ama__bg">
      <h1 class="clamp--small">Holdplan</h1>
      <div class="flex row">
        <button @click="prevWeek()" class="flex center">
          <img :src="arrowSvg" alt="" class="prev">
        </button>
        <p class="bold">
          Nuværende Uge
        </p>
        <button @click="nextWeek()" class="flex center">
        <img :src="arrowSvg" alt="" class="next">
        </button>
      </div>
    </section>
    <all-types path="holdplans" class="min--height--75">
      <!-- {{ allHolds }} -->
      <section class="grid--week">
        <div
          v-for="header in nameWeekdays"
          :key="header"
          :class="[
            'grid--' + header.class + '-header',
            'dayHeaders flex center',
          ]"
        >
          <h6>
            {{ header.day }}
          </h6>
        </div>
        <hold-card
          v-for="hold in getThisWeek"
          :key="hold"
          :class="hold.class"
          :dataObj="hold.data"
        ></hold-card>
      </section>
    </all-types>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

import arrowSvg from "@/assets/svg/dropdown_arrow.svg"
import holdCard from "../components/Holdplan/HoldplanCard.vue";
import allTypes from "../components/Layout/LayoutAllTypes.vue";
export default {
  name: "ViewHoldplan",
  props: {},
  components: {
    allTypes,
    holdCard,
  },
  data() {
    return {
      arrowSvg,
      currentWeek: [],
      dateMod: 0,
      nameWeekdays: [
        {
          day: "Mandag",
          class: "monday",
        },
        {
          day: "Tirsdag",
          class: "tuesday",
        },
        {
          day: "Onsdag",
          class: "wednesday",
        },
        {
          day: "Torsdag",
          class: "thursday",
        },
        {
          day: "Fredag",
          class: "friday",
          data: [],
        },
        {
          day: "Lørdag",
          class: "saturday",
        },
        {
          day: "Søndag",
          class: "sunday",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      allHolds: "a/allHoldplansAttributes",
    }),
    getThisWeek() {
      let returnArray = [],
        classArray = [
          "grid--monday",
          "grid--tuesday",
          "grid--wednesday",
          "grid--thursday",
          "grid--friday",
          "grid--saturday",
          "grid--sunday",
        ];
      for (let i = 0; i < this.currentWeek.length; i++) {
        this.allHolds.forEach((day) => {
          if (day.dato == this.currentWeek[i]) {
            let newObj = {
              class: classArray[i],
              data: day,
            };
            returnArray.push(newObj);
          }
        });
      }
      returnArray.sort(function (x, y) {
        // Not the cleanst code, but it should work to sort by the smallest timestamp.
        let newX = x.data.starttid.split(".")[0].split(":"),
          checkX = newX[0] + newX[1] + newX[2];
        let newY = y.data.starttid.split(".")[0].split(":"),
          checkY = newY[0] + newY[1] + newY[2];
        return checkX - checkY;
      });
      return returnArray;
    },
  },
  methods: {
    createWeek(newToday) {
      let today = new Date();
      if (newToday) today = newToday;

      for (let i = 1; i <= 7; i++) {
        /*
                    Creating this week:
                    Help/Inspiration/Usage of 3rd part code from: https://medium.com/@quynh.totuan/how-to-get-the-current-week-in-javascript-9e64d45a9a08

                    We want to get the first week of the day, so:
                    .getDate() gives us which day of the month today is,
                    .getDay() gives which day in the week it currenly is,
                    + i used to so we start the week with Monday and not Sunday(Which seems to be the Date standard).

                    So if:
                    # 1st Loop:
                    Today is 11th which is a Tuesday(2, Sunday is 0) so 11 minus 2 = 9. 
                    We take 9 and plus it with (i) in order to get the dates for Monday - Sunday, so in loop nr 1, it would be +1 which is Monday(10).
                    
                    We then create a new Date to get the right format to use to match agains the Strapi Data.
                    Then use toISOString which gives back in the right format, and then slice(0,10) which takes the 10 first integers from the date:
                    Which is YYYY-MM-DD.

                    In order to see the next we will just +7 on this.today, and use the forLoop again.
                    To do so we skip 7 days ahead by creating a new Date(), and transform that date 7 days ahead.
                    After that we create a new new Date() because otherwise the date are just the miliseconds since 1970.
                */
        let firstWeekDay = today.getDate() - today.getDay() + i;

        let updatedDay = new Date(today.setDate(firstWeekDay))
          // There was a lot of problems with .toISOString() since it would use GMT not GMT+1. So this is a bit of a work arround.
          // Help from https://stackoverflow.com/questions/44733694/why-new-date-toisostring-is-loosing-timezone
          .toLocaleDateString("da-DK")
          .slice(0, 10);
        // Format to a part of the ISO format:
        // It will make it easier to match with the Strapi Data
        // Make sure that the 1 digit have a 0 in front. (use .toString().length to check the length)
        let correctDate = updatedDay.split("."),
          newDay = correctDate[0].toString(),
          newMonth = correctDate[1].toString(),
          newYear = correctDate[2].toString();
        if (newDay.length == 1) newDay = "0" + newDay;
        if (newMonth.length == 1) newMonth = "0" + newMonth;
        if (newYear.length == 1) newYear = "0" + newYear;

        let newestDay = newYear + "-" + newMonth + "-" + newDay;
        console.log(newestDay);
        this.currentWeek.push(newestDay);
      }
    },
    nextWeek() {
      this.dateMod += 7;
      this.currentWeek = [];
      let newDate = new Date(),
        newDatePlus = newDate.setDate(newDate.getDate() + this.dateMod),
        nextWeek = new Date(newDatePlus);

      this.createWeek(nextWeek);
    },
    prevWeek() {
      this.dateMod -= 7;
      this.currentWeek = [];
      let newDate = new Date(),
        newDatePlus = newDate.setDate(newDate.getDate() + this.dateMod),
        prevWeek = new Date(newDatePlus);

      this.createWeek(prevWeek);
    },
    getMonday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[0]) {
          array.push(day);
        }
      });
      array.sort(function (x, y) {
        return x.starttid - y.starttid;
      });
      array.sort(function (x, y) {
        // Not the cleanst code, but it should work to sort by the smallest timestamp.
        let newX = x.starttid.split(".")[0].split(":"),
          checkX = newX[0] + newX[1] + newX[2];
        let newY = y.starttid.split(".")[0].split(":"),
          checkY = newY[0] + newY[1] + newY[2];
        return checkX - checkY;
      });
      return array;
    },
  },
  created() {
    this.createWeek();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.dayHeaders {
  background-color: var(--neutral-700);
  width: 100%;
  padding: 2px;
}
.holdCard {
  @media screen and (max-width: 600px) {
    & cardH6 {
      font-size: 0.5rem;
    }
  }
}
.prev {
  transform: rotate(90deg);
}
.next {
  transform: rotate(-90deg);
}
.next,
.prev {
  width: 30px;
}
</style>