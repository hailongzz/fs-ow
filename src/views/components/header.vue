<template>
    <div>
        <div id="header"> 
    <div class="top-nav"> 
     <div class="top-nav-left"> 
      <router-link to="/GoodsMall">
       2018冬季精选新品5折起
      </router-link> 
     </div> 
     <div class="top-nav-right"> 
      <router-link v-show="showUser==false" to="/LoginAndRegister">
       登录/注册
      </router-link>
       <router-link v-show='showUser==true' to="/">
       {{userInfo}} <span class="Logout" @click="Logout">注销</span>
      </router-link>
      <router-link to="/">
       <i class="icon iconfont icon-gouwuche"></i> 购物车
      </router-link> 
      <router-link to="/Communication">
       在线客服
      </router-link>
      <router-link to="/Storefront">
       联系我们
      </router-link>  
     </div> 
    </div> 
    <h1 title="logo"></h1> 
      <el-menu class="el-menu-demo"> 
       <el-menu-item index="1"> 
        <router-link to="/">
         首页
        </router-link>
       </el-menu-item> 
       <el-menu-item index="2" @mouseenter.native="showStyle(0)" @mouseleave.native="hideStyle(0)">
        <router-link to="/" >
         商品
        </router-link>
         <div class="s-nav" @mouseenter.native="showStyle(0)" @mouseleave.native="hideStyle(0)" v-show="navStyle"> 
                <hr class="idx-hr" /> 
                <div class="inner"> 
                    <div class="left l1"> 
                    <div class="left_espot"> 
                        <router-link to="/GoodsMall"><b>最 新 到 店</b></router-link>
                        <router-link to="/GoodsMall"><b>最 热 单 品</b></router-link>
                    </div> 
                    </div> 
                    <div class="left l2">
                    <router-link to="/GoodsMall"><b>所 有 产 品</b></router-link>
                    <div class="half" v-for="(item,index) in categorySub" :key="index"> 
                    <router-link :to="{path:'/GoodsMall', query:{id:item.ID}}">{{item.MALL_CATEGORY_NAME}}</router-link>
                    </div> 
                    
                    <div class="clear"></div> 
                    </div> 
                    <div class="right">
                        <a href="#"><img src="https://pic.lily.sh.cn/PC%E7%AB%AF19%E6%98%A51%E6%B3%A2%E4%B8%8B%E6%8B%89%E9%A1%B51.jpg
                        " /></a>
            </div>
            <div class="clear"></div> 
        </div>
        </div>
       </el-menu-item> 
       <el-menu-item index="3"  @mouseenter.native="showStyle(1)" @mouseleave.native="hideStyle(1)">
        <router-link to="/">
         品牌
        </router-link>
          <div class="s-nav"  v-show="navStyleN"  @mouseenter.native="showStyle(1)" @mouseleave.native="hideStyle(1)"> 
            <hr class="idx-hr" /> 
            <div class="inner"> 
                <div class="left">
                &nbsp;
                </div> 
                <div class="left"> 
                <router-link to="/News"><b>市 场 资 讯</b></router-link>
                <router-link to="/Promotion"><b>促 销 活 动</b></router-link>
                <router-link to="/Storefront"><b>门 店 查 询</b></router-link>
                </div> 
                <!-- BEGIN Content_UI.jspf --> 
                <div class="left_espot"> 
                <div class="right">
                    <a href="#"><img src="https://pic.lily.sh.cn/PC%E7%AB%AF19%E6%98%A51%E6%B3%A2%E4%B8%8B%E6%8B%89%E9%A1%B52.jpg
            " /></a>
                </div> 
                </div> 
                <!-- END ContentRecommendation_UI.jspf --> 
                <div class="clear"></div> 
            </div> 
            </div>
       </el-menu-item> 
       
      </el-menu> 
     <div class="nav-search"> 
      <el-select v-model="value9" filterable="" remote="" reserve-keyword="" placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading"> 
       <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"> 
       </el-option> 
      </el-select> 
      <i class="icon iconfont icon-sousuo"></i> 
     </div>
     </div> 
     
    </div>
</template>

<script>
    import url from '../../serviceAPI.config.js'
    import axios from 'axios'
    export default {
    data() {
      return {
        categorySub:'',
        showUser:'',
        userInfo:'',
        navStyle:false,
        navStyleN:false,
        navOver:false,
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama"]
      }
    },
    created(){
        this.getCategory()
        if(!localStorage.userInfo){
                this.showUser = false
                console.log(111)
            }else{
                console.log(this.userInfo)
                let user = JSON.stringify(localStorage.userInfo)
                let User = JSON.parse(user)
                User = JSON.parse(User)
                this.userInfo = User.userName
                console.log(User.userName)
                this.showUser = true
            }
            console.log(this.showUser)
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    
    methods: {
        Logout(){
            localStorage.removeItem('userInfo')
            this.showUser = false
        },
        getCategory(){
            axios({
                url:url.category,
                method:'get'
            }).then((res)=>{
                this.categorySub = res.data.message
                console.log(this.categorySub)
            }).catch((err)=>{
                console.log(err)
            })
        },
        showStyle(a){
            if(a==0){
             this.navStyle=true
            }
            if(a==1){
             this.navStyleN=true
            }
        },
        hideStyle(a){
            if(a==0){
             this.navStyle=false
            }
            if(a==1){
             this.navStyleN=false
            }
        },
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  }
</script>

<style scoped lang='scss'> 
    .Logout{
        font-weight: 700;
        color: gray;
    }
    .inner {
    width: 990px;
    margin: 0 auto;
    position: relative;
    }
    .showStyle{
        display: block
    }
    .hideStyle{
        display: none
    }
    .s-nav{
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 13px;
        line-height: 10px;
        width: 100%;
        z-index: 999;
        background: #fff;
         a{
                display: block;
                line-height: 28px;
                text-align: left;
        }
        .left.l1 {
            width: 10%;
            color: black
        }
        .left.l2 {
            width: 16%;
        }
        .left {
            width: 12%;
            float: left;
            margin-right: 5%;
            padding-top: 20px;
            padding-bottom: 30px;
        }
        .left .half {
            width: 50%;
            float: left;
           
        }
        .right {
            width: 63%;
            float: right;
            border-left: 1px solid #333;
            margin-top: 30px;
            margin-bottom: 30px;
             img {
                width: 92%;
                display: block;
                margin: 0 auto;
            }
        }
    }
      #header{
        position: relative;
        .top-nav{
            color: #909399;
            height: 64px;
            line-height: 64px;
            border-bottom: 2px solid #000;
            padding: 0 10px;
            a:hover{
                color: black
            }
            div{
                display: inline-block
            }
            .top-nav-right{
                float: right;
                a{
                display: inline-block;
                margin: 0 15px;
                text-align: center;
                }
            }
        }
        
        h1{
            background: url(../../assets/logo.jpg) center no-repeat;
            width: 200px;
            height: 130px;
            background-size: 190px;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -100px;
        }
        .nav-search{
            position: absolute;
            right: 50px;
            top: 50%;
            div{
                display: inline-block;
                input{
                    padding-right: 50px;
                }
            }
            i{
                width: 20px;
                height: 30px;
                position: absolute;
                right: 15px;
                top: 7px;
                color: gainsboro;
            }
        }
    }
    
    a{
        text-decoration: none;
        color: #909399;
    }
    a:hover {
            color: black;
        }
    .el-menu{
        position: static;
        width: 230px;
        margin: 0 auto;
        margin-top: 60px;
        border-right: solid 1px white;
        border-bottom: white;
        .el-menu-item {
            font-size: 18px;
            float: left;
            position: static;
        }
        .el-menu-item>a{
            a:hover{
            border-bottom: #909399 3px solid;
        }
        }
        .el-menu-item:hover{
            background-color: white
        }
        a{
            padding-bottom: 5px;
        }
        

    }
</style>