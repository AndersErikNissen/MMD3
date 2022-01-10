<template>
  <section class="disciplin__traeners flex column center">
        <div>
            <h2>
                TEKST OM TRÆNERNE
            </h2>
            <p>
                BEKSRIVELS med mmee jasjd 
            </p>
        </div>
      <section class="flex row">
        <traener-block
          v-for="traener in dataObj"
          :key="traener.name"
          :dataObj="traener.attributes"
        ></traener-block>
      </section>
    </section>
</template>

<script>
import traenerBlock from "../Traener/TraenerBlock.vue";
export default {
  name: "DisciplinTraeners",
  props: {
      dataObj: {
          type: Object,
          required: true
      }
  },
  components: {
      traenerBlock
  }
};
</script>

<style lang="scss" scoped>
</style>