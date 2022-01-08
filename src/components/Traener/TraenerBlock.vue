<template>
  <section>
    <div>
      <!-- <img
        :src="require('@/assets/images/' + imgPath + '/' + dataObj.billede)"
        :alt="'Billede træneren, ' + dataObj.navn"
      /> -->
      <img
        :src="testImg"
        :alt="'Billede træneren, ' + dataObj.navn"
      />
    </div>
    <div>
      <h4>
        {{ dataObj.navn }}
      </h4>
      <ul class="clean">
        <li v-for="disciplin in dataObj.disciplin_kategorises.data" :key="disciplin">
          {{ disciplin.attributes.kategori }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import testImg from "@/assets/images/traeners/test.jpg"
export default {
  name: "TraenerBlock",
  props: {
    dataObj: {
      type: Object,
      required: true
    },
  },
  components: {},
  data() {
    return {
      imgPath: "traeners",
      testImg
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>