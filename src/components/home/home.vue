<template>


<div class="index-box" ref="box">
    <!--header-->
    <v-header></v-header>

    <!--search-->
    <div class="search">
        <div class="search-box">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索您感兴趣的小说</span>
        </div>
    </div>

    <!--content-->
    <div class="message">
        <ul class="book-ul">
            <li class="book-li" v-for="(list,index) in this.list" @click="goBook(list)">
                <img class="book-img" :src="list.book_cover"/>
                <div class="book-info">
                    <p class="book-title">{{list.bookname}}</p>
                    <p class="book-author">{{list.author_name}}</p>
                    <p class="book-type">{{list.first_cate_name}}</p>
                    <p class="book-introduce">{{list.book_info | textStr}}</p>
                </div>
            </li>
        </ul>
    </div>

    <!--footer-->
    <v-footer class="footer"></v-footer>
</div>



</template>

<script>
    import Header from '@/components/base/header/header'
    import Footer from '@/components/base/footer/footer'
    import {getResult} from "../../api/common";
    import {textStr} from "../../api/filter";

    export default {
        components:{
            'v-header':Header,
            'v-footer':Footer
        },
        data(){
            return{
                list:[],
            }
        },
        methods:{
            init(){
                getResult('get','/mock/novelApi')
                    .then(data=>{
                        console.log(data.data)
                        if(data.code==200 && data.data.length>0){
                            this.list = data.data
                        }
                    })
            },
            goBook(list){
                this.$router.push({name:'book',query:list.bookname})
            }



            
        },
        mounted(){
            this.init()
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
                font-size: 20px;
                color: rgba(60,63,65,0.5);
            }
            span{
                font-size: 15px;
                color: rgba(60,63,65,0.5);
            }
        }
    }

    /*message*/
    .message{
        width: 100%;
        margin-bottom: 80px;
        .book-ul{
            width: 100%;
            .book-li{
                width: 96%;
                height: 160px;
                margin: 5px auto;
                .book-img{
                    width: 110px;
                    height: 160px;
                    float: left;
                    margin-right: 10px;
                }
                .book-info{
                    width: 240px;
                    height: 160px;
                    float: left;
                    .book-title{
                        font-size: 16px;
                        color: rgb(254,116,66);
                        margin-bottom: 5px;
                    }
                    .book-author{
                        font-size: 14px;
                        color: rgb(0,4,9);
                        margin-bottom: 5px;
                    }
                    .book-type{
                        font-size: 14px;
                        color: rgb(0,4,9);
                        margin-bottom: 5px;
                    }
                    .book-introduce{
                        font-size: 12px;
                        margin-bottom: 5px;
                    }
                }
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
