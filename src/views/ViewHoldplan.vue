<template>
  <main>
    <section>
      <h1>Holdplan</h1>
    </section>
    <all-types path="holdplans">
      <!-- {{ allHolds }} -->

      <section class="grid--week">
        <hold-card
          v-for="hold in getFriday"
          :key="hold.title"
          :dataObj="hold"
          class="grid--friday"
        ></hold-card>
      </section>
      {{ currentWeek }}
      {{ getMonday }}
      {{ getTuesday }}
      {{ getWednesday }}
      {{ getThursday }}
      {{ getFriday }}
      {{ getSaturday }}
      {{ getSunday }}
    </all-types>
    <ul class="grid--week">
      <li v-for="day in currentWeek" :key="day">
        {{ day }}
      </li>
    </ul>

    <button @click="nextWeek()" class="btn">
      <span> BUTTON </span>
    </button>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

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
      currentWeek: [],
      mandag: [],
      tirsdag: [],
      onsdag: [],
      torsdag: [],
      fredag: [],
      loerdag: [],
      soendag: [],
    };
  },
  computed: {
    ...mapGetters({
      allHolds: "a/allHoldplansAttributes",
    }),
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
    getTuesday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[1]) {
          array.push(day);
        }
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
    getWednesday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[2]) {
          array.push(day);
        }
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
    getThursday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[3]) {
          array.push(day);
        }
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
    getFriday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[4]) {
          array.push(day);
        }
      });
      // Used .sort to measue the array object, and arrange them with object with the smallest timestamp first.
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
    getSaturday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[5]) {
          array.push(day);
        }
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
    getSunday() {
      let array = [];
      this.allHolds.forEach((day) => {
        if (day.dato == this.currentWeek[6]) {
          array.push(day);
        }
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

        this.currentWeek.push(newestDay);
      }
    },
    nextWeek() {
      let newDate = new Date(),
        newDatePlus = newDate.setDate(newDate.getDate() + 7),
        nextWeek = new Date(newDatePlus);

      this.createWeek(nextWeek);
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
</style>