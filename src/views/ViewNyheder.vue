<template>
    <section>
        <h1>Nyheder</h1>
        <!-- Intro with filter -->
        <!-- Color Picker for component for each Nyhed -->
        <all-types path="nyheds">
            {{allNyheds}}
            <nyhed-card v-for="nyhed in allNyheds" :key="nyhed.title" :dataObj="nyhed"></nyhed-card>
        </all-types>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

import allTypes from "../components/Layout/LayoutAllTypes.vue";
import nyhedCard from "../components/Nyheder/NyhedCard.vue"
export default {
    name: "",
    props: {},
    components: {
        allTypes,
        nyhedCard,
    },
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters({
      allNyheds: "a/allNyhedsAttributes"
    }),
    },
    methods: {},
    created () {},
    mounted () {
        window.scrollTo(0, 0);
    },
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>