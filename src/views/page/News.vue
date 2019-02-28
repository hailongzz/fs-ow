<template>
    <div>
        <Header></Header>
        <div class="pro-line3"><span>市场咨询<b>了解Gardenia最新资讯</b></span></div>
        <div class="inner">
            <div class="left_espot"> 
            <ul class="news-list"> 
                <li v-for="(item,index) in promotion" :key='index' @click="show(index)"> 
                    <a class="news-title">{{item.pro1.title}}</a> 
                <div class="news-count" >
                {{item.pro1.content}}
                <br />
                </div> <p class="news-date">{{item.pro1.data}}</p> </li> 
            </ul> 
            </div> 
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../../views/components/header'
    import Footer from '../../views/components/footer'
    export default {
        data() {
            return {
                showc:false,
                count:0,
                promotion:[
                    {
                    pro1:{
                        title:'徐州Gardenia服饰开业盛典',
                        content:'6月29日 心月服饰全场五折，活动仅限一天！',
                        data:'2018/06/29'
                    }
                    },
                    {
                     pro1:{
                        title:'徐州Gardenia服饰开业盛典',
                        content:'6月9日至6月11日，Gardenia邀您#尽情放粽#，任意购买即享抽奖一次，100%有奖。拉杆箱、充电宝、电影券等好礼等您来领！',
                        data:'2018/06/08'
                    }   
                    }
                ]
            }
        },
        methods:{
            show(i){
                let div = document.getElementsByClassName('news-count')
                if(this.count==0){
                    this.count = 1 
                    div[i].style.display = 'block'
                }else{
                    this.count = 0 
                    div[i].style.display = 'none'
                }
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
    .news-list {
            margin-bottom: 20px;
            border-bottom: 2px solid #ccc;
            li {
            padding: 20px;
            border: 2px solid #ccc;
            border-bottom: none;
            .news-title {
                text-align: center;
                background: #eaeaea;
                padding: 0.5rem 10px;
                font-weight: 600;
                display: block;
            }
            .news-count {
                padding: 1rem 4px;
                display: none;
            }
            .news-date {
                text-align: right;
                font-size: 0.9rem;
            }
        }
        }
    
    }
    .pro-line3 {
        background: #f0f0f0;
        padding: 20px 5%;
        display: block;
        margin-bottom: 30px;
        text-align: center;
        span {
            font-size: 1.1rem;
            line-height: 2rem;
            font-weight: 600;
            b {
                font-size: 12px;
                font-weight: normal;
                display: block;
            }
        }
    }
</style>