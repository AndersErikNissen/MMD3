<template>
  <section>
    <div v-if="arr">
      <h3>
        {{ title }}
      </h3>
      <ul class="clean">
        <li v-for="li in arr" :key="li">
          {{ li.tekst }}
        </li>
      </ul>
    </div>
    <div v-if="kontakt">
      <!-- Kontakt is made uniqle to have more control since there are things like mailto / tel -->
      <h3>
        {{ title }}
      </h3>
      <ul class="clean">
        <li>
          {{ kontakt.firma }}
        </li>
        <li>
          {{ kontakt.adresse }}
        </li>
        <li>
          <a :href="'tel:+45' + kontakt.telefon"> +45 {{ kontakt.telefon }} </a>
        </li>
        <li>
          <a :href="'mailto:' + kontakt.email">
            {{ kontakt.email }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "UiUlTextBlock",
  props: {
    arr: {
      type: Array,
    },
    kontakt: {
      type: Object,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>