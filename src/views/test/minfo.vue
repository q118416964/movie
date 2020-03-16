<template>
    <div class="page" :style="{backgroundImage: 'url(' + img + ')' }">
        <h3 style="color:#fff">m3u8播放</h3>
        <div class="block">
            <span class="span" v-for="item in list" :key="item.m3u8url" @click="$router.push({
                path:'/test/mview',query:{
                    url:item.m3u8url
                }
            })">{{item.num}}</span>
            <div class="span span1"></div>
            <div class="span span1"></div>
            <div class="span span1"></div>
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
            url:'',
            list:[],
            img
        };
    },
    computed: {

    },
    created() {
        this.url = this.$route.query.url
        this.getinfo()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        getinfo() {
           
            axios.get('http://api.pingcc.cn/?ysurl='+this.url+'').then(res=>{
            console.log(res)
            this.list = res.data.list
            console.log(this.list)
        })
        }
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
    overflow: auto;
}
.block {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    .span {
        
        width: 24%;
        height:40px;
        line-height:20px;
        background-color: rgba(0,0,0,0.1);
        color:#fff;
      
       
        line-height:40px;
        text-align: center;
        margin-bottom:2px;
        
    }
    .span1 {
            height:0;
        }
}
</style>
