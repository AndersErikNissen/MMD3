<template>
    <main>
        <single-type :path="path">
            <template #header="{ useAtt}">
            <hero-header :dataObj="useAtt"></hero-header>

            </template>
        </single-type>
    </main>
</template>

<script>
import singleType from "../components/Layout/LayoutSingleType.vue";
import heroHeader from "../components/UI/UiHeroHeader.vue";
export default {
    name: "",
    props: {},
    components: {
        singleType,
        heroHeader
    },
    data(){
        return{
            path: "single-type-disciplin"
        }
    },
    computed: {},
    methods: {},
    created () {},
    mounted () {},
    watch() {}
}
</script>

<style lang="scss" scoped>

</style>