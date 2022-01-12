<template>
  <section>
    <div>
      <p class="small-txt">{{ newStart }} - {{ newSlut }}</p>
    </div>
    <h6 class="small">
      {{ dataObj.title }}
    </h6>
    <p class="small-txt">
        {{dataObj.niveau.data.attributes.navn}}
    </p>
    <button
      :class="['btn small flex center', checked ? 'blue' : '']"
      @click="btnClick"
    >
      <div class="flex row">
        <span>
          {{ btnText }}
        </span>
        <span>
          <img v-if="checked" :src="checkMark" alt="" />
        </span>
      </div>
    </button>
  </section>
</template>

<script>
import checkMark from "@/assets/svg/checkmark.svg";

export default {
  name: "HoldplanCard",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      checkMark,
      btnText: "Tilmeld",
      checked: false,
    };
  },
  computed: {
      newStart() {
          let time = this.dataObj.starttid.split(".")[0].split(":"),
          newTime = time[0] + ":" + time[1];
          return newTime;
      },
      newSlut() {
          let time = this.dataObj.sluttid.split(".")[0].split(":"),
          newTime = time[0] + ":" + time[1];
          return newTime;
      },
  },
  methods: {
    btnClick() {
      this.checked = !this.checked;
      if (this.checked) {
        this.btnText = "Tilmeldt";
      } else {
          this.btnText = "Tilmeld";
      }
    },
  },
  created() {

  },
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
button {
  & div {
    align-items: center;
    justify-content: center;
  }
}
img {
  width: 1rem;
  margin-left: 0.5rem;
}
</style>