<template>
  <section class="disciplin__traeners flex column center">
    <div>
      <h2>Mød vores kampsports trænere</h2>
      <p>
        Med vores dygtige og ambitiøse team af trænere, kan du til enhver tid
        forvente holdtræning i topplan.
      </p>
      <p>
        Vores trænere har alle stor erfaring med deres hold, og de står klar til
        at vejlede og hjælpe dig til at opnå dit potentiale.
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
      required: true,
    },
  },
  components: {
    traenerBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>