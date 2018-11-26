<template>
    <div class="header">
        <img src="../../../assets/image/user.jpg"/>
        <div class="ul-box">
            <ul class="tab-ul">
                <li :class="{'active':index==numIndex}" v-for="(list,index) in this.li_list" @click="tab(index)">{{list.text}}</li>
            </ul>
        </div>
        <i class="message iconfont">&#xe62a;</i>
    </div>
</template>

<script>
    export default {
        data (){
            return{
                li_list:[
                    {index:1,text:'推荐'},
                    {index:2,text:'新闻'},
                    {index:3,text:'资讯'},
                    {index:4,text:'热点'},
                    {index:4,text:'专栏'}
                ],
                numIndex:0
            }
        },
        methods:{
            tab(index){
                this.numIndex = index
            }
        }
    }
</script>

<style scoped lang="scss">
.header{
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    img{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 5px 0 5px 15px;
    }
    .ul-box{
        width: 70%;
        height: 50px;
        float: left;
        margin-left: 10px;
        overflow-x: scroll;
        .tab-ul{
            height: 50px;
            width: 140%;
            line-height: 50px;
            float: left;
            font-size: 16px;
            li{
                height: 50px;
                width: 20%;
                text-align: center;
                float: left;
            }
            .active{
                color: rgb(108,202,184);
            }
        }
    }
    .message{
        float: right;
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        margin: 5px 0;
    }
}
</style>
