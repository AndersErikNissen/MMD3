<template>
  <section>
    <div v-if="arr">
      <h4>
        {{ title }}
      </h4>
      <ul class="clean">
        <li v-for="li in arr" :key="li">
          {{ li.tekst }}
        </li>
      </ul>
    </div>

    <div v-if="arrLink">
      <h4>
        {{ title }}
      </h4>
      <ul class="clean">
        <li v-for="li in arrLink" :key="li">
          <a :href="li.link" class="normal--link--white">
            {{ li.tekst }}
          </a>
        </li>
      </ul>
    </div>

    <div v-if="kontakt">
      <!-- Kontakt is made uniqle to have more control since there are things like mailto / tel -->
      <h4>
        {{ title }}
      </h4>
      <ul class="clean">
        <li>
          {{ kontakt.firma }}
        </li>
        <li>
          {{ kontakt.adresse }}
        </li>
        <li>
          <a :href="'tel:+45' + kontakt.telefon" class="normal--link--white">
            +45 {{ kontakt.telefon }}
          </a>
        </li>
        <li>
          <a :href="'mailto:' + kontakt.email" class="normal--link--white">
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
    arrLink: {
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
div {
  padding: 1rem;
}
</style>