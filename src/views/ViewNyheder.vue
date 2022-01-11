<template>
    <section>
        <h1>Nyheder</h1>
        <!-- Intro with filter -->
        <!-- Color Picker for component for each Nyhed -->
        <all-types path="nyheds">
            {{allNyheds}}
        </all-types>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import allTypes from "../components/Layout/LayoutAllTypes.vue";
export default {
    name: "",
    props: {},
    components: {
        allTypes
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