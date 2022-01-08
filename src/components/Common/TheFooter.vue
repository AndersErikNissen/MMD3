<template>
    <footer>
        <h2>Footer</h2>
        <div v-if="getData">
            <h3>GetData</h3>
            <!-- {{getData}} -->
            {{useAtt.tider}}
            <ul-block :arr="useAtt.tider">
                <template #default="{ li }">
                    {{ li.tekst }}
                </template>
            </ul-block>
            <ul-block :kontakt="useAtt.kontakt"></ul-block>
        </div>

    </footer>
</template>

<script>
import ulBlock from "../UI/UiUlBlock.vue"
export default {
  name: "TheFooter",
  data() {
    return {
        path: "the-footer",
        loading: false,
    };
  },
  components: {
      ulBlock
  },
  computed: {
    getData() {
      return this.$store.state.s.data["the-footer"];
    },
    useAtt() {
        return this.getData.data.attributes;
    }
  },
  methods: {
    async getSingle() {
        if (!this.getData) {
        this.loading = true;
        try {
          await this.$store.dispatch("s/getSingle", this.path);
        } catch (err) {
          this.loading = false;
          console.log("%c GET ERROR ", "background-color: red;", err);
        }
        this.loading = false;
      }
    },
  },
  mounted() {
      this.getSingle();
  }
};
</script>

<style lang="scss" scoped>
</style>