<template>
<h1>forside</h1>
    <single-type :path="path">
        <template #header="{ useAtt }">
            <hero-header :dataObj="useAtt" :forside="true"></hero-header>
        </template>
        <template #default="{ useAtt }">

            {{useAtt}}
        </template>
    </single-type>
</template>

<script>
import singleType from "../components/UI/UiHandlerSingleType.vue"
import heroHeader from "../components/UI/UiHeroHeader.vue"
export default {
    name: "ViewForside",
    props: {},
    components: {
        singleType,
        heroHeader
    },
    data(){
        return{
            path: "single-type-forside"
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