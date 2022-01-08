<template>
  <section>
      <ul v-if="arr" class="clean">
          <li v-for="li in arr" :key="li">
              <slot :li="li" />
          </li>
      </ul>
      <ul v-if="kontakt" class="clean">
          <li>
              <a :href="'tel:+45' + kontakt.telefon"></a>
          </li>
          <li>
              
          </li>
          <li>
              
          </li>
          <li>
              
          </li>
      </ul>
  </section>
</template>

<script>
export default {
  name: "UiUlBlock",
  props: {
      arr: {
          type: Array,
      },
      kontakt: {
          type: Object
      }
  }
}
 
</script>

<style lang="scss" scoped>
</style>