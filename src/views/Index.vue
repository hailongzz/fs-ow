<template>
  <div> 
   <Header></Header>
   <div id="content"> 
    <div class="block"> 
     <el-carousel height="500px" style="background-color: white;"> 
      <el-carousel-item v-for="(item,index) in banner" :key="index"> 
       <router-link to="#">
        <img :src="item" alt="slider" />
       </router-link> 
      </el-carousel-item> 
     </el-carousel> 
    </div> 
    <div class="inter"> 
     <div class="inter-nav"> 
      <div class=""> 
       <div class="inter-nav-left"> 
        <h3 class="title"><b title=""> ☆ NEW ARRIVAL ☆ </b></h3> 
        <router-link to="/GoodsMall"><img alt="" src="https://cbu01.alicdn.com/img/ibank/2018/382/232/8552232283_1082870435.jpg" /></router-link>
       </div> 
       <div class="inter-nav-right"> 
        <router-link to="/GoodsMall"><img alt="" src="https://cbu01.alicdn.com/img/ibank/2018/728/259/8571952827_1082870435.jpg" /></router-link>
       </div> 
       <div class="clear"></div> 
      </div> 
     </div> 
    </div> 
    <div class="inter-middle"> 
     <div class="middle_one"> 
      <ul class="idx-hot showmore"> 
       <h3 class="title"><b title="最热品类"><span>/</span> ☆ DAHONG X 优质服装 ☆ <span>/</span></b></h3> 
       <li v-for="(item,index) in clothingList" :key = "index"><router-link to="/GoodsMall"><img alt="" :src="item" /></router-link></li> 
       <div class="clear"></div> 
      </ul> 
      <ul class="idx-hot showmore"> 
       <h3 class="title"><b title="最热品类"><span>/</span> ☆ CATEGORIES ☆ <span>/</span></b></h3> 
       <li v-for="(item,index) in clothingList2" :key = "index"><router-link to="/GoodsMall"><img :src="item" /></router-link></li> 
       <div class="clear"></div> 
      </ul> 
     </div> 
     <div class="middle-direction"> 
      <div class="idx-other" style="background:#fcf6ee"> 
       <div style="width:960px;margin:auto"> 
        <div data-am-widget="slider" class="am-slider am-slider-default am-no-layout" data-am-slider="{&quot;controlNav&quot;:true}"> 
         <div class="am-viewport" style="overflow: hidden; position: relative;">
          <ul class="am-slides" style="width: 600%; transition-duration: 0s; transform: translate3d(-960px, 0px, 0px);">
           <li style="width: 960px; float: left; display: block;" class="clone" aria-hidden="true"><a href="#" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li> 
           <li style="width: 960px; float: left; display: block;" class="am-active-slide"><a href="#" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li> 
           <li style="width: 960px; float: left; display: block;" class="clone" aria-hidden="true"><a href="#" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li>
          </ul>
         </div>
         <ol class="am-control-nav am-control-paging"></ol>
         <ul class="am-direction-nav">
          <li class="am-nav-prev"><a class="am-prev am-disabled" href="#" tabindex="-1"> </a></li>
          <li class="am-nav-next"><a class="am-next am-disabled" href="#" tabindex="-1"> </a></li>
         </ul>
        </div>
       </div> 
      </div> 
     </div> 
     <Footer></Footer>
    </div> 
   </div>
  </div>
</template>

<script>
    import Header from '../views/components/header'
    import Footer from '../views/components/footer'
  export default {
    data() {
      return {
        sliderImg:[require('../assets/slider1.jpg'),require('../assets/slider2.jpg')],
        options4: [],
        value9: [],
        list: [],
        banner:[
            "http://www.zgmypfzx.com/data/201703/170328115006564.jpg",
            "http://www.zgmypfzx.com/data/201704/170409160543811.jpg",
            "http://www.zgmypfzx.com/data/201703/170328114940324.jpg"
        ],
        clothingList:[
          "https://cbu01.alicdn.com/img/ibank/2019/466/941/10540149664_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/393/284/9391482393_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/213/021/9390120312_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/418/439/9347934814_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/799/468/9331864997_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/296/495/9424594692_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/241/556/10417655142_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/727/120/10478021727_1082870435.220x220.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/584/288/10436882485_1082870435.220x220.jpg",


        ],
        clothingList2:[
          "https://cbu01.alicdn.com/img/ibank/2018/922/204/8754402229_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/921/477/10417774129_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/629/381/10485183926_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/709/160/10547061907_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/645/926/8542629546_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2017/774/671/4131176477_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/830/246/10693642038_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2019/485/176/10432671584_1082870435.230x230.jpg",
          "https://cbu01.alicdn.com/img/ibank/2018/558/345/8628543855_1082870435.230x230.jpg",
        ],
        loading: false,
        states: ["Alabama"]
      }
    },
    components:{Header,Footer},
    updated(){``
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
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

<style scoped lang="scss">
    .idx-other {
    margin: 15px 0;
    padding: 30px 0;
    }
    .idx-hot li:nth-child(3N) {
        margin-right: 30px;
    }
    .idx-hot li:nth-child(3N+2) {
        margin-right: 30px;
    }
    .idx-hot li {
        float: left;
        width: 33%;
        width: calc(100%/3 - 20px);
        margin-bottom: 30px;
    }
    .idx-hot li img {
    width: 100%;
    height: 306px;
    }
    .inter-middle{
            width: 1009px;
            margin: 0 auto;
            position: relative;
        .middle_one{
            .idx-hot {
                margin: 15px;
                margin-top: 35px;
                border-top: 1px solid #999;
                .title {
                text-align: center;
                margin-top: -12px;
                margin-bottom: 30px;
                     b {
                    background: #fff;
                    color: #000;
                    font-weight: normal;
                }
                     span {
                padding: 0 12px;
                color: #999;
            }
            }
            }
        }
    }
    .clear {
        clear: both;
    }
    .inter{
        width: 1009px;
        margin: 0 auto;
        position: relative;
        .inter-nav-left{
            margin: 35px 0 15px 15px;
            border: 1px solid #bbb;
            padding: 5px;
            width: 634px;
            float: left;
            img{
                width: 100%;
                display: block;
            }
            .title{
                text-align: center;
                margin-top: -16px;
                margin-bottom: 4px;
                b{
                    background: #fff;
                    padding: 4px 12px;
                    color: #000;
                    font-weight: normal; 
                }
            }
            
        }
        .inter-nav-right{
            width: 296px;
            float: right;
            margin: 35px 15px 15px 0;
            border: 1px solid #bbb;
            padding: 5px;
            img{
                width: 100%;
                display: block;
                height: 634px;
                }
        }

    }
    #content{
        .block{
                margin-bottom: 30px;
        }
        .el-carousel{
                height: 500px;
                overflow-x: hidden;
                position: relative;
            img{
                box-sizing: border-box;
                vertical-align: middle;
                border: 0;
                width: 1366px;
            }
        }

    }
   /deep/ .el-carousel__item{
      background-color: white !important;
      text-align: center;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
  
</style>