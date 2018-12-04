<template>
    <div class="box">
        <div class="bg-box"></div>
        <div class="register">
            <div class="header">
                <i class="iconfont icon-icon-arrow-left2" @click="back()"></i>
                <span class="login-btn" @click="geLogin()">登录</span>
            </div>
            <div class="logo">
                <img src="https://ossweb-img.qq.com/images/lol/v3/logo.png"/>
                <h2>因为热爱，所以联盟</h2>
            </div>
            <div class="content">
                <div class="user">
                    <span class="user-type">手机号码</span>
                    <input type="text" v-model="phone" placeholder="请填写手机号码"/>
                </div>
                <div class="user">
                    <span class="user-type">密码</span>
                    <input :type="inputType" v-model="password" placeholder="请填写注册密码"/>
                </div>
            </div>
            <button class="register-btn" @click="registerBtn()">注册</button>
        </div>
    </div>
</template>

<script>
    import imgOne from '../../assets/image/icon_hide.svg'
    import imgTwo from '../../assets/image/icon_display.svg'
    import {Toast} from 'mint-ui'
    import {getResult} from "../../api/common";

    export default {
        name: "regidter",
        data (){
            return{
                inputType:'password',
                imgChange:true,
                imgOne,
                imgTwo,

                /*用户交互数据*/
                phone:'',
                password:'',
                isPhone:false,
                isPassword:false,
            }
        },
        methods:{
            back(){
                this.$router.push({name:'home'})
            },
            geLogin(){
                this.$router.push({name:'login'})
            },
            change(){
                this.imgChange = !this.imgChange
                if(this.imgChange){
                    this.inputType = 'password'
                }else {
                    this.inputType = 'text'
                }
            },
            goReset(){
                this.$router.push({name:'reset'})
            },
            checkPhone(){
                let reg_phone = /^[1][3,4,5,7,8][0-9]{9}$/;
                if(!this.phone){
                    this.isPhone = true
                    Toast('电话号码不能为空')
                    return false
                }
                if(!reg_phone.test(this.phone)){
                    this.isPhone = true
                    Toast('手机号输入有误，请重新输入')
                    return false
                }
                this.isPhone = false
                return true
            },
            checkPassword(){
                if(!this.password){
                    this.isPassword = true
                    Toast('用户密码不能为空')
                    return false
                }
                this.isPassword = false
                return true
            },
            registerBtn(){
                this.isPhone = false
                if(!this.checkPhone()) return;
                if(!this.checkPassword()) return;
                getResult('post',`/mock/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${this.phone}&passwd=${this.password}`)
                    .then(data=>{
                        console.log(data)
                        if(data.code === 200){
                            console.log('成功')
                        }else {
                            Toast(data.msg)
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        width: 100%;
        height: 100%;
        position: relative;
        .bg-box{
            width: 100%;
            height: 100%;
            background: url("../../assets/image/bg.jpg") no-repeat;
            background-size: 100% 100%;
        }
        .register{
            width: 100%;
            height: 100%;
            background: rgba(60,63,65,0.4);
            position: absolute;
            top: 0;
            left: 0;
            .header{
                width: 100%;
                height: 50px;
                background: rgb(39,40,34);
                color: #fff;
                line-height: 50px;
                i{
                    float: left;
                    padding: 15px 15px;
                }
                .login-btn{
                    float: right;
                    padding: 0 15px 0 0;
                    font-size: 18px;
                }
            }
            .logo{
                img{
                    display: block;
                    width: 200px;
                    height: 90px;
                    margin: 40px 0 20px 15px;
                }
                h2{
                    margin: 0 0 20px 15px;
                    color: #fff;
                }
            }
            .content{
                width: 92%;
                margin: 0 auto;
                .user{
                    width: 100%;
                    height: 44px;
                    margin: 30px 0;
                    position: relative;
                    .user-type{
                        display: block;
                        height: 44px;
                        line-height: 44px;
                        padding: 0 10px;
                        position: absolute;
                        color: rgb(240,255,255);
                    }
                    input{
                        display: block;
                        width: 70%;
                        height: 44px;
                        border: 0;
                        padding-left: 30%;
                        background: rgba(17,16,39,0.7);
                        color: rgb(240,255,255);
                    }
                    input:focus{
                        outline: 0 !important;
                        color: #fff;
                        opacity: 1;
                    }
                    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
                        /* WebKit browsers */
                        color: #9FA3B0;
                    }
                    input:-moz-placeholder, textarea:-moz-placeholder {
                        /* Mozilla Firefox 4 to 18 */
                        color: #9FA3B0;
                    }
                    input::-moz-placeholder, textarea::-moz-placeholder {
                        /* Mozilla Firefox 19+ */
                        color: #9FA3B0;
                    }
                    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
                        /* Internet Explorer 10+ */
                        color: #dadada;
                    }
                    img{
                        display: block;
                        width: 20px;
                        height: 20px;
                        position: absolute;
                        top: 12px;
                        right: 15px;
                    }
                    .forget_btn{
                        float: right;
                        margin: 10px 0;
                        color: rgb(88,172,186);
                    }
                }
            }
            .register-btn{
                display: block;
                width: 92%;
                height: 44px;
                margin: 100px auto;
                background: -webkit-linear-gradient(left, rgb(202,200,203), rgb(135,133,134)); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(left, rgb(202,200,203), rgb(135,133,134)); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(left, rgb(202,200,203), rgb(135,133,134)); /* Firefox 3.6 - 15 */
                background: linear-gradient(left, rgb(202,200,203), rgb(135,133,134)); /* 标准的语法 */
                border-radius: 5px;
                text-align: center;
                line-height: 44px;
                border: 0;
                color: rgb(253,250,245);
                letter-spacing: 8px;
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
</style>
