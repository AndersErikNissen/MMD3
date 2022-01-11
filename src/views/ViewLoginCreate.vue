<template>
  <main class="sideBySide min--height--100">
    <div class="sbs--item login__bg flex center">
      <h2 class="clamp">
        Dit trænings eventyr starter her!
      </h2>
    </div>
    <section class="sbs--item flex center">
      <section class="login__textContent--container">
        <div class="login__textArea">
          <h1 class="clamp--small">Hej</h1>
          <h6 class="clamp">
            {{ textDesc }}
          </h6>
          <p v-if="create === 'quest'">
            <i> Gæste login udløber 14 dage, efter første træning! </i>
          </p>
        </div>

        <div>
          <!-- "Fake Form" -->
          <label for="email">Email</label>
          <input
            v-model="inputEmail"
            type="text"
            name="email"
            id="email"
            placeholder="Din@email.dk"
          />
          <label for="navn">Fornavn og Efternavn</label>
          <div class="sideBySide">
            <input
              class="sbs--item margin--right"
              v-model="inputFornavn"
              type="text"
              name="navn"
              id="fornavn"
              placeholder="Fornavn"
            />
            <input
              class="sbs--item"
              v-model="inputEfternavn"
              type="text"
              name="navn"
              id="efternavn"
              placeholder="Efternavn"
            />
          </div>
          <div v-if="create == 'normal'">
            <label for="adgangskode">Adgangskode</label>
            <input
              v-model="inputAdgangskode"
              type="password"
              name="adgangskode"
              id="adgangskode"
              placeholder="Adgangskode"
            />
          </div>
        </div>
        <normal-btn
          @click="
            confirmSubmit();
            errorSubmit();
          "
        >
          {{ btnText }}
        </normal-btn>
        <div>
          <p>Har du  allerede en bruger? Login 
            <router-link to="/login" class="normal--link--white">
              HER
            </router-link> !
          </p>
          <p class="quest__message" v-if="create == 'normal'">Eller prøv 14 dages gratis træning med et gæstelogin? Opret en gæstebruger  
            <router-link to="/login/guest" class="normal--link--white">
              HER
            </router-link> !
          </p>
        </div>
      </section>

      <transition name="fade_InOut">
        <div
          v-if="submitted && !error"
          class="email__confirmation--container flex center"
        >
          <div>Bekræftelsesemail sent til emailen: {{ inputEmail }}</div>
        </div>
      </transition>
      <transition name="fade_InOut">
        <div v-if="error" class="email__confirmation--container flex center">
          <div>Manglende felter!</div>
        </div>
      </transition>
    </section>
  </main>
</template>

<script>
import normalBtn from "../components/UI/UiButton.vue";
export default {
  name: "ViewLoginCreate",
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
      inputEmail: undefined,
      inputFornavn: undefined,
      inputEfternavn: undefined,
      inputAdgangskode: undefined,
      submitted: false,
      error: false,
    };
  },
  computed: {
    btnText() {
      let txt = "";
      if (this.create === "normal") {
        txt = "Opret Bruger";
      } else {
        txt = "Opret Gæstebruger";
      }
      return txt;
    },
    textDesc() {
      let txt = "";
      if (this.create === "normal") {
        txt = "Opret din burger her, og deltag i træningerne!";
      } else {
        txt = "Opret gæste bruger og få tilsendt et gæste login!";
      }
      return txt;
    },
  },
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
label {
  display: block;
}
.quest__message {
  margin: 1rem 0;
}
.login__textContent--container {
  max-width: 100%;
}
h6 {
  max-width: 20ch;
}
.login__textArea {
  margin-bottom: 2rem;
  & p {
    margin: 0.6rem 0;
  }
  & i {
    font-weight: 300;
  }
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