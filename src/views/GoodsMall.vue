<template>
    <div>
        <Header></Header>
        <div class="inner"> 
   <div id="prolist-left"> 
    <ul class="am-nav"> 
     <!-- 最新到店2-->
     <!-- BEGIN ContentRecommendation_UI.jspf --> 
     <div id="contentRecommendationWidget_Lilyarrive2" class="contentRecommendationWidget"> 
      <div id="ci_espot__Lilyarrive2">
       <div class="left_espot"> 
        <li><a title="商品" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501"><strong>最新到店</strong></a></li> 
        <li><a title="商品" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/22001"><strong>最热单品</strong></a></li> 
       </div> 
      </div> 
     </div> 
     <li><a class="top-docr"><span>/</span></a></li> 
     <div> 
         <router-link to="">职装系列</router-link>
     </div> 
     <div v-for="(item,index) in categorySub" :key="index"> 
        <router-link :to="{path:'/GoodsMall', query:{id:item.ID}}">{{item.MALL_CATEGORY_NAME}}</router-link>
    </div>
    </ul> 
   </div> 
   <div id="prolist-right"> 
    <div class="pro-line2">
     <span>/国博系列</span>
    </div> 
    <ul id="sele">
        <el-dropdown size="medium" split-button >
                排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上 新 时 间</el-dropdown-item>
            <el-dropdown-item>销 量 排 行</el-dropdown-item>
            <el-dropdown-item>价格从高到底</el-dropdown-item>
            <el-dropdown-item>价格从低到高</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
     <div class="clear"></div> 
    </ul> 
    <div class="pages1">
     <a href="javascript:sortpage();"><strong>上一页</strong></a>
     <strong><a class="tpageNumber">1</a>/<a class="totalpag">{{totalpag}}</a><a href="#">下一页</a></strong>
    </div> 
     <ul id="pro-list" class="pro-list showmore"> 
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/229739"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119100G1212.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 长款牛仔风衣</span><b><span class="infos">&yen;1299.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/230556"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110B1308.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 渐变色毛针织衫</span><b><span class="infos">&yen;1399.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/232366"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C1262.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 不对称压褶风衣</span><b><span class="infos">&yen;1299.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/232374"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C1255.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 长款系带风衣</span><b><span class="infos">&yen;1099.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/233238"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119100C1250.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 两种穿法风衣</span><b><span class="infos">&yen;1299.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/233511"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C1226.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 格纹长款风衣</span><b><span class="infos">&yen;1399.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/233536"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C1235.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 双排扣收腰风衣</span><b><span class="infos">&yen;1199.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/232385"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C2229.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 方巾收腰西装</span><b><span class="infos">&yen;899.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/233252"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119100C2226.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 气质双排扣西装</span><b><span class="infos">&yen;899.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/233552"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110C2219.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 双排扣收腰西装</span><b><span class="infos">&yen;1099.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/229751"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119100G3207.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 宽松牛仔短外套</span><b><span class="infos">&yen;749.00</span></b></li>
   <li style="position: relative;"><a title="" target="_blank" href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501/229879"><img width="232" height="232" more="http://localhost/webapp/wcs/stores/emall/images/prolist_03.jpg" src="http://pic.lily.sh.cn/119110B3309.jpg?imageView2/1/w/762/h/762/q/90 " onerror="javascript:this.src='/wcsstore/emall/mobile30/images/320.jpg'" /></a><span class="infos"> 拉链毛针织衫</span><b><span class="infos">&yen;649.00</span></b></li>
  </ul>
    <div class="clear"></div> 
    <div class="pages1"> 
     <a href="javascript:sortpage();"><strong>上一页</strong></a>
     <strong>&nbsp;<a class="tpageNumber">1</a>/<a class="totalpag">{{totalpag}}</a><a href="#">下一页</a></strong> 
     <input type="text" name="page" id="mytext" style="width:30px" /> 
     <input type="submit" value="跳转" class="sub" /> 
    </div> 
   </div> 
  </div>
  <div class="clear"></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '../serviceAPI.config.js'
    import Header from '../views/components/header'
    import Footer from '../views/components/footer'
    export default {
        data() {
            return {
                categorySub:'',
                totalpag:3
            }
        },
        created(){
            this.getCategory()
        },
        methods:{
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
            }
        },
        components:{Header,Footer},
    }
</script>

<style scoped lang='scss'>
    .inner {
        width: 990px;
        margin: 0 auto;
        position: relative;
    }
    #pro-list {
        margin: 10px;
        margin-right: 0px;
        li{
            position: relative;
        }
        li:nth-child(3N+1) {
            margin-left: 0px;
        }
        li {
            float: left;
            width: 30%;
            width: calc(33% - 20px);
            margin-left: 30px;
            margin-bottom: 40px;
            a {
                position: relative;
                display: block;
            }
            span {
                display: block;
                overflow: hidden;
                color: #333;
                font-size: 12px;
                line-height: 1.2rem;
                height: 1.2rem;
                text-align: center;
            }
        }
    }
    .clear{
        clear: both;
    }
    a{
        color:black;
    }
    #prolist-left {
        width: 20%;
        float: left;
        padding-left: 40px;
        line-height: 52px;
        font-size: 15px;
        a:hover{
            font-size: 16px;
            font-weight: bold;
        }
    }
.top-docr {   
    background: url(../assets/dot-line-333.gif) center repeat-x;
    display: block;
}
.pro-line2 {
    background: url(../assets/dot-line-333.gif) repeat-x center;
    margin: 0 auto 20px auto;
    max-width: 990px;
    span {
    margin-left: 1.5rem;
    background: #fff;
    color: #333;
    font-weight: 600;
    padding: 0 6px;
    font-size: 15px;
}
}
#sele .sele-title {
    width: 180px;
    line-height: 36px;
    height: 36px;
    background: url(../assets/arr@x2.png) 150px center no-repeat;
    float: left;
    margin-right: 10px;
    position: relative;
    text-indent: 10px;
    a {
        border: 1px solid #999;
        display: block;
    }
  .slist {
        background: #fff;
        display: none;
        li {
            border-top: none;
            width: 100%;
            a {
                line-height: 36px;
                display: block;
                border-top: none;
            }
        }
        a {
            border: 1px solid #999;
            display: block;
        }
    }
}
.pages1 {
    text-align: right;
    padding-bottom: 10px;
    padding-right: 6px;
    font-size: 13px;
    a {
    padding: 0 6px;
    font-size: 15px;
    font-family: sans-serif;
}
}
#prolist-right {
    width: 75%;
    float: right;
}
</style>