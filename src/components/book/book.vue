<template>
    <div class="book">
        <!--<v-header></v-header>-->

        <!--头部-->
        <div class="header">
            <i class="iconfont icon-icon-arrow-left2" @click="back()"></i>
            <span class="title">
                书籍详情
            </span>
        </div>


        <div class="info">
            <div class="book-content">
                <img :src="bookImg"/>
                <div class="book-box">
                    <p class="book-title">{{bookTitle}}</p>
                    <p class="book-author">{{bookAuthor}}</p>
                    <p class="book-type">{{bookType}}</p>
                    <p class="book-words">字数：{{bookWords | toThousands}}</p>
                </div>

                <div class="work">
                    <div class="start">开始阅读</div>
                    <div class="download">离线下载</div>
                </div>

                <div class="introduce">
                    <div class="jianjie">
                        <span class="border"></span>
                        <span class="word">简介</span>
                    </div>
                    <p class="book-desc">{{bookDesc}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {getResult} from "../../api/common";
    import Header from '@/components/base/header/header'

    export default {
        name: "book",
        components:{
          'v-header':Header
        },
        data () {
            return{
                bookImg:'',
                bookTitle:'',
                bookAuthor:'',
                bookType:'',
                bookDesc:'',
                bookWords:''
            }
        },
        methods:{
            init(){
                getResult('get',`/mock/novelInfoApi?name=${this.$route.query}`)
                    .then(data=>{
                        if(data.code == 200 && data.data != null){
                            this.bookImg = data.data.aladdin.cover
                            this.bookTitle = data.data.aladdin.title
                            this.bookAuthor = data.data.aladdin.author
                            this.bookType = data.data.aladdin.category
                            this.bookDesc = data.data.aladdin.desc
                            this.bookWords = data.data.aladdin.words
                        }
                    })
            },
            back(){
                this.$router.push({name:'home'})
            }
        },
        mounted(){
            this.init()
        }
    }
</script>

<style scoped lang="scss">
    .book{
        width: 100%;
        min-height: 100%;
        background: #fff;
        .header{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #ccc;
            position: relative;
            i{
                position: absolute;
                font-size: 20px;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                top: 0;
                left: 0;
            }
            .title{
                display: inline-block;
                width: 100%;
                height: 50px;
                font-size: 20px;
                line-height: 50px;
                text-align: center;
            }
        }
        .info{
            width: 100%;
            .book-content{
                width: 94%;
                margin: 0 auto;
                img{
                    float: left;
                    width: 98px;
                    height: 130px;
                    margin: 10px 10px 10px 0;
                }
                .book-box{
                    float: left;
                    height: 130px;
                    width: 240px;
                    margin: 10px 0;
                    .book-title{
                        margin: 10px 0;
                        font-size: 18px;
                        color: #000;
                    }
                    .book-author{
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                    .book-type{
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                }
                .work{
                    width: 100%;
                    font-size: 16px;
                    overflow: hidden;
                    .start{
                        float: left;
                        width: 40%;
                        height: 40px;
                        border: 1px solid deepskyblue ;
                        color: deepskyblue;
                        line-height: 40px;
                        text-align: center;
                        margin: 10px 0;
                        border-radius: 10px;
                    }
                    .download{
                        float: right;
                        width: 40%;
                        height: 40px;
                        border: 1px solid deepskyblue ;
                        color: deepskyblue;
                        line-height: 40px;
                        text-align: center;
                        margin: 10px 0;
                        border-radius: 10px;
                    }
                }
                .introduce{
                    width: 100%;
                    .jianjie{
                        width: 100%;
                        height: 45px;
                        border-bottom: 1px solid rgb(243,243,243);
                        .border{
                            float: left;
                            width: 5px;
                            height: 33px;
                            background: deepskyblue;
                            margin: 6px 0;
                        }
                        .word{
                            float: left;
                            height: 45px;
                            line-height: 45px;
                            margin-left: 10px;
                            font-size: 18px;
                        }
                    }
                    .book-desc{
                        margin-top: 10px;
                        font-size: 14px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
</style>
