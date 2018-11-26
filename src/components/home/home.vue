<template>


<div class="index-box" ref="box">
    <!--header-->
    <v-header></v-header>

    <!--search-->
    <div class="search">
        <div class="search-box">
            <i class="iconfont icon-shezhi"></i>
            <span>搜索你想了解的资讯</span>
        </div>
    </div>

    <!--footer-->
    <v-footer class="footer"></v-footer>
</div>



</template>

<script>
    import Header from '@/components/base/header/header'
    import Footer from '@/components/base/footer/footer'
    export default {
        components:{
            'v-header':Header,
            'v-footer':Footer
        }
    };
</script>

<style scoped lang="scss">
.index-box{
    width: 100%;
    color: red;
    font-size: 24px;
    position: relative;
    background: #ffffff;
    overflow: hidden;

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
                font-size: 16px;
                color: rgba(60,63,65,0.5);
            }
            span{
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
