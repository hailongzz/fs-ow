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
     <div > 
        <router-link :to="{path:'/GoodsMall'}">全部商品</router-link>
    </div>
    </ul> 
   </div> 
   <div id="prolist-right"> 
    <div class="pro-line2">
     <span>/职装系列</span>
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
      <el-pagination
      @current-change = "cPage"
    @prev-click = "prevClick"
    @next-click = "nextClick"
    layout="prev, pager, next"
    :total="totalpag">
  </el-pagination>
    </div> 
    <ul v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    id="pro-list" class="pro-list showmore"> 
        <li style="position: relative;" v-for="(item,index) in shopPrve" :key="index">
            <a href="#">
                <img alt="" :src="item.url" />
            </a>
            <span class="infos"> {{item.name}}</span>
            <b>
            <span class="infos">&yen;{{item.price}}</span>
            </b>
         </li>
    </ul>
    <div class="clear"></div> 
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
                loading:false,
                categorySub:[

                ],
                totalpag:0,
                currentPage: 0,//当前页数
                shopPrve:[],
                cur:1,
                shopList:[
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/257/440/10624044752_1082870435.230x230.jpg',
                       name:'2019春夏装新款修身小西服女中袖气质小西装一粒扣女式格纹外套',
                       price: 163,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2017/350/235/3872532053_1082870435.230x230.jpg',
                       name:'夏季新款短袖职业女装衬衫修身显瘦工作服气质面试白领条纹衬衣女',
                       price: 134,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/820/611/10655116028_1082870435.230x230.jpg',
                       name:'一件代发韩版条纹小西装外套女办公室OL职业装春夏季修身西服外套',
                       price: 163,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/682/937/10444739286_1082870435.230x230.jpg',
                       name:'2019夏季新款五分袖连衣裙女OL时尚气质修身职业装美容师工作服OL',
                       price: 172,
                    },
                    {
                       url:'//cbu01.alicdn.com/img/ibank/2016/840/998/3408899048_1082870435.230x230.jpg',
                       name:'二粒扣职业装女士马甲套装面试装空姐装KTV酒吧工作制服学生',
                       price: 163,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/995/500/9412005599_1082870435.230x230.jpg',
                       name:'2018秋冬新款毛呢格子小西装女士韩版气质通勤职业长袖小西服外套',
                       price: 180,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/217/216/10853612712_1082870435.230x230.jpg',
                       name:'2019夏新款圆领连衣裙中袖包臀一步裙女士职业装美容师技师工作服',
                       price: 163,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/417/739/10780937714_1082870435.230x230.jpg',
                       name:'2019夏季小西装女韩版时尚职业女裙商务套装短袖职业装批发工作服',
                       price: 155,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/624/441/10636144426_1082870435.230x230.jpg',
                       name:'春夏季新款职业短袖套装酒店工作服白领通勤办公室西服珠宝店制服',
                       price: 145,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/977/905/8621509779_1082870435.230x230.jpg',
                       name:'夏季短袖酒店前台职业套装女2018新款时尚气质OL正装工作服两件套',
                       price: 145,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2017/281/093/5316390182_1082870435.230x230.jpg',
                       name:'2017职业装女装套装时尚西装连衣裙ol气质工作服女夏秋正装套装裙',
                       price: 120,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/185/480/10590084581_1082870435.230x230.jpg',
                       name:'2019夏新款时尚气质修身职业装白衬衫女中袖雪纺衬衣工作服喇叭袖',
                       price: 105,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/413/964/10181469314_1082870435.230x230.jpg',
                       name:'中袖上衣女夏秋春装雪纺衬衫韩版时尚百搭喇叭袖2019新款大码衬衣',
                       price: 95,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/446/788/10644887644_1082870435.230x230.jpg',
                       name:'2019夏季新款时尚气质修身职业装白衬衫女短袖正装衬衣白领工作服',
                       price: 88,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/672/823/10566328276_1082870435.230x230.jpg',
                       name:'2019夏季新款条纹衬衫粉色教师酒店美容师工作服短袖拼接领衬衣女',
                       price: 87,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/241/556/10417655142_1082870435.230x230.jpg',
                       name:'爆款2019新款纯色雪纺上衣女修身飘带长袖衬衫时尚优雅职业女装',
                       price: 98,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/519/669/10585966915_1082870435.230x230.jpg',
                       name:'酒店前台工作服夏装女空姐收银员经理职业套装美容师工作服短袖OL',
                       price: 105,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/409/466/8704664904_1082870435.230x230.jpg',
                       name:'2018新品条纹衬衫翻领短袖衬衣职业装正装男女同款白领面试商务棉',
                       price: 98,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/985/334/8689433589_1082870435.230x230.jpg',
                       name:'2018新款女装韩版修身立领雪纺衬衫打底衫修身显瘦衬衣女款中袖',
                       price: 88,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/695/240/10410042596_1082870435.230x230.jpg',
                       name:'夏季新款职业装短袖套装时尚OL韩版修身西装格子工作服业务工装女',
                       price: 132,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/446/631/10512136644_1082870435.230x230.jpg',
                       name:'2019夏季时尚OL红色短袖职业女裙套装面试销售正装工作西服批发',
                       price: 102,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2018/273/991/10243199372_1082870435.230x230.jpg',
                       name:'2019春季新款职业装套装女中袖小西装时尚气质女装名媛酒店工作服',
                       price: 142,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/574/672/10791276475_1082870435.230x230.jpg',
                       name:'夏季连衣裙2019新款洋气时尚韩版修身女士OL职业包臀短袖假俩件套',
                       price: 120,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2017/848/433/5325334848_1082870435.230x230.jpg',
                       name:'秋装OL职业装女装套装女士条纹西装工作服正装西服外套女工装秋冬',
                       price: 148,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/788/388/10503883887_1082870435.230x230.jpg',
                       name:'2019春新款大红色职业套装OL时尚气质长袖不对称主持人西服工作服',
                       price: 153,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2016/427/371/2773173724_1522162649.230x230.jpg',
                       name:'韩版新款职业装女套装时尚修身套裙女士美容师职业正装厂家直销',
                       price: 142,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/479/339/10805933974_1082870435.230x230.jpg',
                       name:'2019新款职业装女装中袖小西装时尚OL通勤商务白领经理修身工作服',
                       price: 120,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/780/030/10493030087_1082870435.230x230.jpg',
                       name:'2019春季新款女士长袖职业白色西服正装女裙套裤面试销售OL工作服',
                       price: 92,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/244/265/10874562442_1082870435.230x230.jpg',
                       name:'职业装女装2019新款时尚气质西装套裤工作服春季一扣格子小西装',
                       price: 115,
                    },
                    {
                       url:'https://cbu01.alicdn.com/img/ibank/2019/242/262/10725262242_1082870435.230x230.jpg',
                       name:'白衬衫女士短袖职业装2019夏季新款拼接领修身气质正装工作服衬衣',
                       price: 90,
                    },
                ],
                clothingUrl:[
                    "https://cbu01.alicdn.com/img/ibank/2019/895/446/10328644598_1082870435.220x220.jpg",
                    "https://cbu01.alicdn.com/img/ibank/2019/475/401/10387104574_1082870435.230x230.jpg",
                    "https://cbu01.alicdn.com/img/ibank/2019/436/990/11072099634_1082870435.230x230.jpg"
                ],
                index:0
            }
        },
        created(){
          
            
            this.totalpag = parseInt((this.shopList.length/9)*10)
            this.choosePage(this.currentPage)
        },
        methods:{
            cPage(num){
                this.choosePage(num-1)
            },
            choosePage(index){
                let i = index>0? index : 0
                let arr = []
                arr = this.shopList.slice(i*9,i*9+9)
                this.shopPrve = []
                this.shopPrve = arr 
                setTimeout(() => {
                   this.loading=false
                }, 500);
            },
            prevClick(){
                this.currentPage = this.currentPage -1
                this.choosePage(this.currentPage)
                
            },
            nextClick(){
                 this.currentPage = this.currentPage +1
                this.choosePage(this.currentPage)
               
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