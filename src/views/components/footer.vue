<template>
    <div>
        <div id="footer"> 
            <div class="inner"> 
            <div class="big"> 
                <img alt="" src="../../assets/logo.jpg" /> 
                <p>年轻OL的商务着装，可能太严肃，可能太时髦，</p> 
                <p>或者像Lily这样，正合适。</p> 
            </div> 
            <div class="left"> 
                <p class="title">首页</p> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/visualView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 视觉大片</a> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/brandView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 关于我们</a> 
            </div> 
            <div class="left"> 
                <p class="title">订单及售后</p> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/pcloginView?catalogId=10051&amp;langId=-7&amp;URL=https%3A%2F%2Fwww.lily.sh.cn%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2ForderListView%3ForderType%3D1%26catalogId%3D10051%26langId%3D-7%26storeId%3D10151&amp;storeId=10151">&middot; 追踪我的订单</a> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/pcloginView?catalogId=10051&amp;langId=-7&amp;URL=https%3A%2F%2Fwww.lily.sh.cn%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2FreturnOrderListView%3ForderType%3D6%26catalogId%3D10051%26langId%3D-7%26storeId%3D10151&amp;storeId=10151">&middot; 退货与换货</a> 
            </div> 
            <div class="left"> 
                <p class="title">关于Lily</p> 
                <a href="http://www.lily.sh.cn/webapp/wcs/stores/servlet/pcContactView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 联系我们</a> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/answerView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 常见问题</a> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/inviteView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 招商加盟</a> 
                <a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/lawView?catalogId=10051&amp;langId=-7&amp;storeId=10151">&middot; 法律申明</a> 
            </div> 
            <div class="right"> 
                <p class="title">订阅通讯</p> 
                <p>立即注册，了解Lily最新活动咨询</p> 
                <p><input type="text" id="myemail" name="myemail" placeholder="填写您的邮箱地址" /></p> 
                <p><a class="btn" href="#">注 册</a> </p>
            </div> 
            <div class="clear"></div> 
            <hr class="idx-hr" /> 
            <p class="copyright">Copyright&copy;2015-2016，lily版权所有 <a href="http://www.miitbeian.gov.cn">沪ICP备05036513号-1</a></p> 
            </div> 
     </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    #footer {
    text-align: center;
    padding-bottom: 20px;
    color: #333;
    padding-top: 10px;
    .inner {
        width: 990px;
        margin: 0 auto;
        position: relative;
    }
    .big {
        width: 290px;
        margin: 0;
        float: left;
        text-align: center;
        line-height: 22px;
        font-size: 12px;
        img {
            width: 180px;
        }
    }
    .left {
        width: 120px;
        margin: 20px 0 60px 20px;
        float: left;
        text-align: left;
        line-height: 32px;
        .title {
            font-weight: bold;
            font-size: 15px;
        }
        a {
            display: block;
        }
         a:hover {
            color: black;
        }
    }
    .right {
        width: 245px;
        margin: 20px 0px 60px 0;
        float: right;
        text-align: left;
        line-height: 32px;
        input[type='text'] {
            width: 220px;
        }
        .btn {
            border: 1px solid #666;
            padding: 3px 12px;
            cursor: pointer;
        }
    }
    hr {
        display: block;
        padding: 0;
        border: 0;
        height: 0;
        border-top: 2px solid #000;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }
    .copyright {
        display: inline-block;
        color: #999;
        font-size: 0.9rem;
        padding-top: 10px;
    }
}
</style>