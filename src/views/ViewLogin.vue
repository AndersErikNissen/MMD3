<template>
  <section class="sideBySide min--height--100">
    <div class="sbs--item login__bg flex center">
      <h2 class="clamp">
        Dit trænings eventyr starter her!
      </h2>
    </div>
    <section class="flex center sbs--item">
      <section class="login__textContent">
        <div class="login__textArea">
          <h1 class="clamp--small">Velkommen tilbage</h1>
          <h6 class="clamp">
            {{ textDesc }}
          </h6>
        </div>

        <div class="login__fakeFormArea">
          <!-- "Fake Form" -->
          <label for="email">Email</label>
          <input
            v-model="inputEmail"
            type="text"
            name="email"
            id="email"
            placeholder="Din@email.dk"
          />
          <div>
            <label for="adgangskode">Adgangskode</label>
            <input
              v-model="inputAdgangskode"
              type="password"
              name="adgangskode"
              id="adgangskode"
              placeholder="Adgangskode"
            />
          </div>
          <normal-btn
            @click="
              confirmSubmit();
              errorSubmit();
            "
          >
            Login
          </normal-btn>
          <p>Har du ikke allerede en bruger? Login
            <router-link to="/login/normal" class="normal--link--white">
              HER
            </router-link> !
          </p>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import normalBtn from "../components/UI/UiButton.vue";
export default {
  name: "ViewLogin",
  props: {
    create: {
      type: String,
    },
  },
  components: {
    normalBtn,
  },
  data() {
    return {
      submitted: false,
      error: false,
      textDesc: "Login her og få adgang til holdtræningerne!",
    };
  },
  computed: {},
  methods: {
    confirmSubmit() {
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    },
    errorSubmit() {
      if (
        this.inputEmail == undefined ||
        this.inputFornavn == undefined ||
        this.inputEfternavn == undefined ||
        this.inputAdgangskode == undefined
      ) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
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
h6 {
  margin: 1rem 0;
}
.login__fakeFormArea {
  max-width: 400px;
}
.login__textContent {
  padding: 1rem;
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