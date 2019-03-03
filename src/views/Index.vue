<template>
  <div> 
   <Header></Header>
   <div id="content"> 
    <div class="block"> 
     <el-carousel height="500px"> 
      <el-carousel-item v-for="(item,index) in sliderImg" :key="index"> 
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
        <a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/19501" title="picture"><img alt="" src="https://pic.lily.sh.cn/PC%E7%AB%AF19%E6%98%A51%E6%B3%A2%E5%B9%BF%E5%91%8A%E4%BD%8D%E5%B7%A6.jpg" /></a>
       </div> 
       <div class="inter-nav-right"> 
        <a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/21501" title="picture"><img alt="" src="https://pic.lily.sh.cn/PC%E7%AB%AF19%E6%98%A51%E6%B3%A2%E5%B9%BF%E5%91%8A%E4%BD%8D%E5%8F%B3.jpg" /></a>
       </div> 
       <div class="clear"></div> 
      </div> 
     </div> 
    </div> 
    <div class="inter-middle"> 
     <div class="middle_one"> 
      <ul class="idx-hot showmore"> 
       <h3 class="title"><b title="最热品类"><span>/</span> ☆ LILY X 国家博物馆 ☆ <span>/</span></b></h3> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-1.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-2.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-3.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-4.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-5.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-6.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-7.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-8.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/27503"><img alt="" src="https://pic.lily.sh.cn/19%E6%98%A5%E5%9B%BD%E9%A3%8E-9.jpg" /></a></li> 
       <div class="clear"></div> 
      </ul> 
      <ul class="idx-hot showmore"> 
       <h3 class="title"><b title="最热品类"><span>/</span> ☆ CATEGORIES ☆ <span>/</span></b></h3> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/24002"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%A7%E8%A1%A3.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15505"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A4%96%E5%A5%97.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15504"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%92%88%E7%BB%87.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15511"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A1%AC%E8%A1%AB.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15506"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%BF%9E%E8%A1%A3%E8%A3%99.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/24003"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%A5%97%E5%A4%B4.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15507"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E8%A3%A4%E5%AD%90.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15510"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E5%8D%8A%E8%A3%99.jpg" /></a></li> 
       <li><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/lilystore/15508"><img more="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81-1.jpg" alt="" src="https://pic.lily.sh.cn/18%E5%86%AC%E5%93%81%E7%B1%BB%E5%85%A5%E5%8F%A3-%E9%A5%B0%E5%93%81.jpg" /></a></li> 
       <div class="clear"></div> 
      </ul> 
     </div> 
     <div class="middle-direction"> 
      <div class="idx-other" style="background:#fcf6ee"> 
       <div style="width:960px;margin:auto"> 
        <div data-am-widget="slider" class="am-slider am-slider-default am-no-layout" data-am-slider="{&quot;controlNav&quot;:true}"> 
         <div class="am-viewport" style="overflow: hidden; position: relative;">
          <ul class="am-slides" style="width: 600%; transition-duration: 0s; transform: translate3d(-960px, 0px, 0px);">
           <li style="width: 960px; float: left; display: block;" class="clone" aria-hidden="true"><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/pointshop" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li> 
           <li style="width: 960px; float: left; display: block;" class="am-active-slide"><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/pointshop" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li> 
           <li style="width: 960px; float: left; display: block;" class="clone" aria-hidden="true"><a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/pointshop" title="picture"><img alt="" src="https://pic.lily.sh.cn/%E5%BA%95%E9%A1%B52.jpg" draggable="false" /></a></li>
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
                height: 580px;
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