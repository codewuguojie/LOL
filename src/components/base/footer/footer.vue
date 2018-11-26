<template>
    <div class="footer">
        <div class="ul-box">
            <ul class="ul">
                <li class="li" :class="{'active':index==numIndex}" v-for="(list,index) in liData" @click="tab(index)">
                    <i :class="list.class"></i>
                    <span>{{list.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import '../../../assets/css/iconfont.css'
    export default {
        data (){
            return{
                liData:[
                    {index:1,class:'iconfont icon-zixun',title:'资讯'},
                    {index:2,class:'iconfont icon-yijiahaoyou',title:'好友'},
                    {index:3,class:'iconfont icon-02',title:'电视台'},
                    {index:4,class:'iconfont icon-shangcheng',title:'商城'},
                    {index:5,class:'iconfont icon-geren12',title:'个人'}
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
.footer{
    width: 100%;
    height: 60px;
    box-shadow: #ccc 0 -2px 10px 1px;
    .ul-box{
        width: 100%;
        height: 100%;
        .ul{
            width: 100%;
            height: 100%;
            .li{
                float: left;
                width: 20%;
                padding: 10px 0;
                text-align: center;
                i{
                    display: block;
                    font-size: 24px;
                    color: #000;
                }
                span{
                    display: block;
                    margin-top: 5px;
                    font-size: 12px;
                }
            }
            .active{
                color: rgb(254,203,161);
                i{
                    color: rgb(254,203,161);
                }
            }
        }
    }
}
</style>
