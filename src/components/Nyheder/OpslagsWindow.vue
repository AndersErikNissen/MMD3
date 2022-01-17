<template>
  <section class="window__container">
    <div class="window__img" v-if="imgArray">
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
  </section>
</template>

<script>
export default {
  name: "OpslagsWindow",
  props: {
    imgArray: {
      type: Object,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      currentImg: 0,
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

    
    & img {
      width: 100%;
      max-width: 1200px;
    }
  }
}
</style>