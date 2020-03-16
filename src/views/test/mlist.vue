<template>
    <div class="page" :style="{backgroundImage: 'url(' + img + ')' }">
        <div class="block" v-for="item in list" :key="item.url" @click="$router.push({
            path:'/test/minfo',query:{
                url:item.url
            }
        })">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import img from '@/assets/maomi.jpg'
export default {
    props: {

    },
    data() {
        return {
            ysname:'',
            list:[],
             img
        };
    },
    computed: {

    },
    created() {
        console.log(this.$route.query.ysname)
        this.ysname = this.$route.query.ysname
        axios.get('http://api.pingcc.cn/?ysname='+this.ysname+'').then(res=>{
            console.log(res)
            this.list = res.data.list
            console.log(this.list)
        })

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
    background-size: contain;
    overflow: auto;
}
.block {
    width: 100%;
    height: 30px;
    line-height:50px;
    background-color: rgba(0,0,0,0.1);
    color:#fff;
    box-sizing: border-box;
    padding-left:15px;
    font-size:16px;
}
</style>
