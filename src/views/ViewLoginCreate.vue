<template>
  <main class="sideBySide">
    <div class="sbs--item">
      <img :src="heroImg" alt="" />
    </div>
    <section class="sbs--item flex center">
      <section>
        <div class="login__textArea">
          <h1>Hej</h1>
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
              type="text"
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
import heroImg from "@/assets/images/test.jpg";
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
      heroImg,
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
input[type="email"] {
  padding: 0.65rem;
  border-radius: var(--edge);
  border: solid 1px var(--neutral-800);
}
h6 {
  max-width: 20ch;
}
.login__textArea {
  margin-bottom: 2rem;
  & p {
    margin: 0.6rem 0;
    & i {
      font-weight: 300;
    }
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