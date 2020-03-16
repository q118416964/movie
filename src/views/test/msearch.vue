<template>
    <div class="page"  :style="{backgroundImage: 'url(' + img + ')' }">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="$router.push({
            path:'/test/mlist',query:{
                ysname:value
            }
        })"/>
       
    </div>
</template>

<script>
import img from '@/assets/maomi.jpg'
export default {
    props: {

    },
    data() {
        return {
            value:'',
            img
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.page {
    width: 100%;
    height: 100%;
    background-color: #fff;
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>
