<template>
    <div>
        <Header></Header>
         <div class="inner"> 
   <div class="shop_top">
    门店
   </div> 
   <div class="shop_select"> 
    <select class="country"> <option value="1">中国</option> </select> 
    <select class="city" :value='showshop' v-model="showshop" > <option value="1" selected = "selected">徐州</option> <option value="2">上海</option></select> 
   </div> 
   <div class="pro-line2">
    <span>/ 门店查询</span>
   </div> 
   <ul class="shop_list" id="p1" v-if="showshop==1"> 
    <li> <p class="title">徐州和信广场</p> <p>地址:徐州和信广场10020 8F</p> <p>电话:13013957819</p> <p class="btn"><a onclick="searchByStationName('上海市南京东路409-459号置地广场2F')">点 击 查 看 地 图</a></p> </li> 
    <li> <p class="title">徐州宣武市场</p> <p>地址:徐州宣武商贸城83162</p> <p>电话:13852152763</p> <p class="btn"><a onclick="searchByStationName('上海市肇嘉浜路1000号汇金百货2F')">点 击 查 看 地 图</a></p> </li> 
    <div class="clear"></div> 
   </ul>
   <ul class="shop_list" id="p2" v-else-if="showshop==2"> 
    <li> <p class="title">上海和信广场</p> <p>地址:徐州和信广场10020 8F</p> <p>电话:13013957819</p> <p class="btn"><a onclick="searchByStationName('上海市南京东路409-459号置地广场2F')">点 击 查 看 地 图</a></p> </li> 
    <li> <p class="title">上海宣武市场</p> <p>地址:徐州宣武商贸城83162</p> <p>电话:13852152763</p> <p class="btn"><a onclick="searchByStationName('上海市肇嘉浜路1000号汇金百货2F')">点 击 查 看 地 图</a></p> </li> 
    <div class="clear"></div> 
   </ul>
   <div id="allmap"></div>
   <div class="map_show"> 
    <div class="map" id="map_show"> 
     <!--如果使用百度地址，直接使用此代码，上面按钮中的数值为百度地图中的X,Y值，具体取值方式请参考百度地图后台，
            同时请将head中调用的baidu api中的key值调整成客户申请的值。
            如果仅需显示地图的图片，请将对应代码调整成此处显示图片，在js中去掉相关的map_init的调用--> 
    </div> 
    <a class="close"></a> 
   </div> 
  </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../views/components/header'
    import Footer from '../views/components/footer'
    export default {
        data() {
            return {
                showshop:1
            }
        },
        created(){
        },
        methods:{
            // allMap(){
            //     var map = new BMap.Map("allmap");
            //     map.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
            //     map.enableScrollWheelZoom();
            //     var b = new BMap.Bounds(new BMap.Point(116.027143, 39.772348),new BMap.Point(116.832025, 40.126349));
            //     try {	
            //         BMapLib.AreaRestriction.setBounds(map, b);
            //     } catch (e) {
            //         alert(e);
            //     }
            // },
            searchByStationName(){
                
            }
        },
        components:{Header,Footer},
    }
</script>

<style scoped lang='scss'>
    .clear{
        clear: both;
    }
    .inner {
    width: 990px;
    margin: 0 auto;
    position: relative;
        .shop_top {
            text-align: center;
            font-size: 30px;
            padding: 40px;
        }
        .shop_select {
            text-align: center;
            padding-bottom: 80px;
            select {
                width: 230px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                margin: 0 10px;
            }
        }
        .pro-line2 {
            background: url(../assets/dot-line-333.gif) repeat-x center;
            margin: 0 auto 20px auto;
            max-width: 990px;
            span {
                margin-left: 1.2rem;
                background: #fff;
                color: #333;
                font-weight: 600;
                padding: 0 6px;
                font-size: 15px;
            }
        }
        .shop_list {
            padding-top: 20px;
            padding-bottom: 80px;
            li {
                width: 35%;
                margin: 20px 3%;
                float: left;
                height: 150px;
                overflow: hidden;
                padding: 20px 40px;
                border: 2px solid #444;
                position: relative;
                .title {
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 40px;
                    
                }
                .btn a {
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        width: 40%;
                        margin-left: -20%;
                        text-align: center;
                        background: #444;
                        color: #fff;
                        display: block;
                        line-height: 42px;
                        height: 42px;
                        cursor: pointer;
                    }
            }
        }
    }
</style>