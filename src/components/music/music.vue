<template>
    <div class="music">
        <!--头部-->
        <v-header></v-header>
        <!--搜索-->
        <div class="search">
            <div class="search-box">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索您感兴趣的音乐</span>
            </div>
        </div>



        <!--底部-->
        <v-footer class="footer"></v-footer>
    </div>
</template>

<script>
    import Header from '@/components/base/header/header'
    import Footer from '@/components/base/footer/footer'
    import {getResult} from "../../api/common";

    export default {
        name: "music",
        components:{
            'v-header':Header,
            'v-footer':Footer
        },
        data(){
            return{

            }
        },
        methods:{
            init(){
                getResult('get','/mock/meituApi?page=1')
                    .then(data=>{
                        console.log(data.data)
                    })
            }
        },
        mounted(){
            this.init()
        }
    }
</script>

<style scoped lang="scss">
.music{
    width: 100%;
    min-height: 100%;
    background: #fff;
    position: relative;

    /*搜索框*/
    .search{
        width: 100%;
        height: 30px;
        margin: 10px 0;
        .search-box{
            width: 90%;
            height: 100%;
            margin: 0 auto;
            background: rgba(60,63,65,0.1);
            text-align: center;
            border-radius: 5px;
            i{
                font-size: 20px;
                color: rgba(60,63,65,0.5);
            }
            span{
                line-height: 30px;
                font-size: 15px;
                color: rgba(60,63,65,0.5);
            }
        }
    }

    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
    }

}
</style>
