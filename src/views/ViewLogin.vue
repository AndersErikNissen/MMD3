<template>
  <div>
    <div class="email__form--container">
      <!-- A dummy form, it's not doing anything, it's more to show what would be used -->
      <!-- <form action=""> -->
      <input
        type="email"
        name="emailForm"
        id="email__form"
        :placeholder="placeholderEmail"
        @keydown.enter.prevent="confirmSubmit"
      />
      <!--
            Using Normal since it's a dummy, but could also use: 
            <input @click.prevent="confirmSubmit" type="button" :value="gratis" class="btn" />
         -->
      <normal-btn @click="confirmSubmit">
        {{ gratis }}
      </normal-btn>
      <!-- </form> -->
      <transition name="fade_InOut">
        <div
          v-if="submitted"
          class="email__confirmation--container flex center"
        >
          <div>
            {{ emailConfirm }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import normalBtn from "../components/UI/UiButton.vue";
export default {
  name: "ViewLogin",
  props: {},
  components: {
    normalBtn,
  },
  data() {
    return {
      submitted: false,
      emailConfirm: "Emailadresse modtaget!",
      placeholderEmail: "Email...",
      gratis: "Gratis Prøvetræning",
    }
  },
  computed: {},
  methods: {
    confirmSubmit() {
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    },
  },
  created() {},
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
input[type="email"] {
  padding: 0.65rem;
  border-radius: var(--edge);
  border: solid 1px var(--neutral-800);
}
::placeholder {
  color: var(--neutral-800);
}
.email__confirmation--container {
  position: fixed;
  bottom: 5vh;
  left: 0;
  width: 100%;
  & > div {
    background-color: var(--primary-500);
    color: white;
    padding: var(--padding-btn);
    border-radius: var(--edge);
  }
}
</style>