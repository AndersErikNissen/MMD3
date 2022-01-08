<template>
    <footer class="flex center">
        <div v-if="getData" class="footer__blocks flex row--se">
            <ul-block :title="headers[0]" :arr="useAtt.tider"></ul-block>
            <ul-block :title="headers[1]" :arr="useAtt.ama"></ul-block>
            <ul-block :title="headers[2]" :kontakt="useAtt.kontakt"></ul-block>
            <ul-block :title="headers[3]" :arr="useAtt.some"></ul-block>
        </div>
    </footer>
</template>

<script>
import ulBlock from "../UI/UiUlTextBlock.vue"
export default {
  name: "TheFooter",
  data() {
    return {
        path: "the-footer",
        loading: false,
        headers: ["Åbningstider", "Projekter", "Kontakt os", "Følg os"]
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
    footer {
        min-height: 30vh;
        background-color: red;
        .footer__blocks {
            width: 100%;
        }
    }
</style>