<template>
  <div
    id="loading__svg--container"
    :class="[clickObj.show ? 'active' : '', clickObj.noShow ? 'inactive' : '']"
  >
    <!-- <?xml version="1.0" encoding="utf-8"?> -->
    <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!-- Reused from Github: AndersErikNissen/design-hamburgers -->
    <svg
      version="1.1"
      id="loadingSvg__svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 80 80"
      style="enable-background: new 0 0 80 80"
      xml:space="preserve"
    >
      <polyline class="line3 top" points="14,14 66,14 66,66 " />
      <polyline class="line3 bot" points="66,66 14,66 14,14 " />
      <polyline class="line3 center__left" points="14,40 40,40 40,29 " />
      <polyline class="line3 center__right" points="66,40 40,40 40,51 " />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigationHamburger",
  props: {
      clickObj: {
          type: Object,
          required: true
      },
  },
  components: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    
  },
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style lang="css" scoped>
#loading__svg--container {
    width: 50px;
    height: 50px;
    padding: 2px;
}
svg {
   cursor: pointer;
}

/* Here normal CSS is used for simplicty(No need for mixins for keyframes and so on) */
.line3 {
  fill: none;
  stroke: var(--primary-500);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
svg#loadingSvg__svg {
  transition: transform 400ms ease-in-out;
}

svg#loadingSvg__svg polyline {
  transition: stroke-dasharray 300ms ease-in-out,
    stroke-dashoffset 300ms ease-in-out;
}

/* 
    Reset to Startline
*/
.top,
.bot {
  stroke-dasharray: 52 104;
}
.center__left,
.center__right {
  stroke-dasharray: 25.65 37;
}
/* 
    On Click
*/
.inactive #loadingSvg__svg {
  /* transform: rotate(225deg); */
  animation: loadingSvg-rotatezero 0.3s ease-in-out forwards;
}

@keyframes loadingSvg-rotatezero {
  0% {
    transform: rotate(225deg);
  }

  75% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.active #loadingSvg__svg {
  /* transform: rotate(225deg); */
  animation: loadingSvg-rotate 0.3s ease-in-out forwards;
}

@keyframes loadingSvg-rotate {
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(225deg);
  }
}

.active .top,
.active .bot {
  stroke-dasharray: 104 104;
}

.active .center__left,
.active .center__right {
  stroke-dasharray: 37 37;
  stroke-dashoffset: -14.5px;
}
</style>

