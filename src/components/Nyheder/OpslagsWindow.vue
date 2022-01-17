<template>
  <section class="window__container" v-if="imgArray && showWindow">
    <div class="window__img">
      <img
        :src="require('@/assets/images/dagens/' + imgArray[currentImg].billede)"
        alt="Billede til Dagens Træning"
      />
    </div>
    <div class="window__buttonArea flex row">
      <button @click="prevImg" class="clickBtn">
        <span> Tidligere </span>
      </button>
      <p class="bold">
        <span> {{ currentImg + 1 }} / {{ imgArray.length }} </span>
      </p>
      <button @click="nextImg" class="clickBtn">
        <span> Næste </span>
      </button>
    </div>
    <div class="window__exit" @click="closeWindow">
      <img :src="exitSvg" alt="Kryds">
    </div>
  </section>
</template>

<script>
import exitSvg from "@/assets/svg/exit_window.svg"

export default {
  name: "OpslagsWindow",
  props: {
    imgArray: {
      type: Object,
      required: true,
    },
    showWindow: {
      type: Boolean,
    }
  },
  components: {},
  data() {
    return {
      currentImg: 0,
      exitSvg
    };
  },
  methods: {
    nextImg() {
      this.currentImg++;
      if (this.currentImg > this.imgArray.length - 1) this.currentImg = 0;
    },
    prevImg() {
      this.currentImg--;
      if (this.currentImg < 0) this.currentImg = this.imgArray.length - 1;
    },
    closeWindow() {
      this.$emit("closeWindow")
    }
  },
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.window__container {
  position: fixed;
  inset: 0 0 0 0;
  background-color: var(--neutral-700);
  z-index: 2;

  & .window__buttonArea {
    align-items: center;
    justify-content: center;
    & p {
      padding: 0;
      margin: 1rem;
      & span {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
    & .clickBtn {
      color: var(--neutral-100);
      text-decoration: underline;
      & span {
        font-size: 1.3rem;
        font-weight: 700;
      }
    }
  }

  & .window__img {
    width: 100%;
    height: 90vh;
    
    & img {
      width: 100%;
      object-fit: contain;
      height: 90vh;
    }
  }
  & .window__exit {
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
  }
}
</style>