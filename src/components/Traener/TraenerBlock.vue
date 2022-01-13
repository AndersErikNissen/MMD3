<template>
  <section class="traener__outside">
    <div>
      <img
        v-if="dataObj.billede"
        :src="require('@/assets/images/' + imgPath + '/' + dataObj.billede)"
        :alt="'Billede træneren, ' + dataObj.navn"
      />
    </div>
    <div class="flex center column">
      <p class="large">
        {{ dataObj.navn }}
      </p>
      <ul v-if="forside" class="clean flex center column">
        <li
          v-for="disciplin in dataObj.disciplin_kategorises.data"
          :key="disciplin"
        >
          {{ disciplin.attributes.kategori }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "TraenerBlock",
  props: {
    dataObj: {
      type: Object,
      required: true,
    },
    forside: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {
      imgPath: "traeners",
    };
  },
};
</script>

<style lang="scss" scoped>
.traener__outside {
  margin: 2%;

  & img {
    width: 200px;
    border-radius: 50%;
  }

  @media screen and (max-width: 648px) {
    & img {
      width: 110px;
  }
  & p.large {
    font-size: .8rem;
    font-weight: 700;
    padding: 0;
  }
  & li {
    font-size: .7rem;
  }
  }
}
</style>