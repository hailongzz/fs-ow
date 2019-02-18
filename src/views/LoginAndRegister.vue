<template>
    <div>
        <Header></Header>
        <div class="inner">
		<div class="inner-left">
			<div class="pro-line2">
				<span>/ 用户登录</span>
			</div>
			<div class="login-cont">
				<form>
					<p>如果你是已注册用户，请输入你的手机或者邮箱及密码来查看你的个人信息。</p>
					<p class="small username-tips"></p>
					<div class="oneline-input">
						<div class="left-title">手机</div>
						<div class="right-input">
							<input type="text" v-model="username" class="input-one" id="username">
						</div>
					</div>
					<p class="small pw-tips"></p>
					<div class="oneline-input">
						<div class="left-title">密 码</div>
						<div class="right-input">
							<input type="password" v-model="password" class="input-one" id="password">
						</div>
					</div>
					<p class="result-tips"></p>
					<div class="oneline-input">
						<label><input type="checkbox"  id="rememberMe" checked="checked"> 记住我的登录信息</label>
					</div>
					<div class="oneline-input">
						<a class="left-input"><input type="button" class="submit-btn" value="登 录" @click="submitLogin1"></a> <span><a href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/pcresetPwdView?catalogId=10551&amp;langId=-7&amp;storeId=10651">忘记密码？</a></span>
					</div>
					
				</form>
			</div>
		</div>

		<div class="inner-right">
			<div class="pro-line2">
				<span>/ 新用户注册</span>
			</div>
			<div class="login-cont">
				<p>
					在Lily注册可享受众多优惠<br>您无需填写任何表格就可以下订单<br>您可以随时查询您的订单状态及历史记录<br>我们将及时向您发送我们的优惠及促销活动
				</p>

				<form>
					<p class="small mobile-tips"></p>
					<div class="oneline-input">
						<div class="left-title">手 机</div>
						<div class="right-input">
							<input type="text" v-model="NewUserName" id="mobile" class="input-one" placeholder="请输入手机号">
						</div>
					</div>
					<p class="small captcha-tips"></p>
					<div class="oneline-input">
						<div class="left-title">校验码</div>
						<div class="right-input oneline-input">
							<input type="text" id="captcha" v-model="vaildCode"  class="input-half"><div id="v_container"  class="checkcode"></div>
						</div>
					</div>
					<p class="small code-tips"></p>
					<div class="oneline-input">
						<div class="left-title">密码</div>
						<div class="right-input">
							<input type="password" style='width: 100%;' class="input-half" v-model="NewPassWord"  placeholder="密码">
						</div>
					</div>
					<p class="result-tips2"></p>
					<div class="oneline-input">
						<a class="left-input"><input type="button" class="submit-btn" value="提 交" @click="submitVerificationCode1"></a>
						<div class="clear"></div>
					</div>
				</form>
			</div>
		</div>
		<div class="clear"></div>

		<div class="pro-line2">
			<span>/ 线下会员首次登录</span>
		</div>
		<div class="inner-left">
			<div class="login-cont">
				<form>
					<p>如果您已经是Lily会员可以用手机号登录</p>
					<p>点击获取首次登录密码。</p>
					<div class="oneline-input">
						<a class="left-input" href="https://www.lily.sh.cn/webapp/wcs/stores/servlet/pcloginLilyView?catalogId=10551&amp;langId=-7&amp;storeId=10651"><input type="button" class="submit-btn" value="首 次 登 录"></a>
					</div>
				</form>
			</div>
		</div>

		<div class="clear"></div>
		<div class="login-blank"></div>
		<div class="login-blank"></div>

	</div>
    <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import Header from '../views/components/header'
    import Footer from '../views/components/footer'
    export default {
        data() {
            return {
                //user login
                username:'',
                password:'',
                //New user register
                NewUserName:'',
                vaildCode:'',
                NewPassWord:'',
                verifyCode:''

            }
        },
        mounted(){
            this.verifyCode = new GVerify("v_container");
            console.log(window.GVerify)
        },
        created(){
             this.verifyCanvas(window,document)
             if(localStorage.userInfo){
                 this.$message({
                            message: '您已经登录',
                            type: 'success'
                            });
                this.$router.push('/')
            }
        },
        methods:{
            submitLogin1(){
                var phoneReg = /^1[3-578]\d{9}$/;
                if(!phoneReg.test(this.username)){
                    this.$alert('您的输入格式有误', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'info',
                        message: `提示: 提交失败`
                            });
                        }
                    });
                    return
                }
                axios({
                    url:url.login,
                    method:'post',
                    data:{
                        userName:this.username,
                        passWord:this.password,
                    }
                }).then(res=>{
                    if(res.data.code == 200){
                      new Promise((resolve,reject)=>{
                          localStorage.userInfo=JSON.stringify({userName:this.username})
                      }).then(()=>{
                          this.$message({
                            message: '登录成功',
                            type: 'success'
                            });
                            this.$router.push('/')
                      }).catch(()=>{
                          this.$message.error('登录失败');
                      })
                    }
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
                
            },
            submitVerificationCode1(){
                var phoneReg = /^1[3-578]\d{9}$/;
                let codeReg =  this.verifyCode.validate(this.vaildCode)
                
                if(!phoneReg.test(this.NewUserName)){
                    this.$alert('您的手机输入格式有误', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'warning',
                        message: `提示: 提交失败`
                        });
                    }
                    });
                    return
                }
                if(!codeReg){
                    this.$alert('您的校验码有误', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'warning',
                        message: `提示: 提交失败`
                        });
                    } 
                    });
                    return
                }
                if(this.NewPassWord.trim() == ''){
                   this.$alert('密码不能为空', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                        type: 'warning',
                        message: `提示: 提交失败`
                        });
                    }
                    });
                    return 
                }
                axios({
                    url:url.register,
                    method:'post',
                    data:{
                        userName:this.NewUserName,
                        passWord:this.NewPassWord,
                        }
                }).then((res)=>{
                    if(res.data.code == 200){
                        this.$message(res.data.message);
                        this.$router.push('/')
                    }else{
                        this.$message('注册失败');
                    }
                    console.log(res)
                }).catch((err)=>{
                    this.$message('注册失败');
                })
                
            },
             verifyCanvas(win,doc){
                    let size = 5;//设置验证码长度
                    function GVerify(options){//创建一个图形验证码对象
                        this.options = {//默认的options参数值
                            id:'',//容器id
                            canvasId:'verifyCanvas',
                            width:'100',
                            height:'30',
                            type:'blend',//图形验证码的默认类型
                            code:""
                        }
                        if(Object.prototype.toString.call(options)=="[object Object]"){//判断传入的参数类型
                            for(let i in options){//根据传入的参数修改默认参数值
                                this.options[i] = options[i]
                            }
                        }else{
                            this.options.id = options;
                        }
                        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(',');
                        this.options.letterArr = getAllLetter();
                        this._init();
                        this.refresh();
                    }
                    GVerify.prototype = {
                        //版本号
                        version: '1.0.0',
                        //初始化方法
                        _init:function(){
                            var con  = document.getElementById(this.options.id);
                            let canvas = document.createElement('canvas');
                            this.options.width = con.offsetWidth > 0 ? con.offsetWidth : '100';
                            this.options.height = con.offsetHeight > 0 ? con.offsetHeight : '30';
                            canvas.id = this.options.canvasId;
                            canvas.width = this.options.width
                            canvas.height = this.options.height
                            canvas.style.cursor = "pointer";
                            canvas.innerHTML = '您的浏览器不支持canvas';
                            con.appendChild(canvas)
                            let parent = this;
                            canvas.onclick = function(){
                                parent.refresh()
                            }
                        },
                        //生成验证码
                        refresh:function(){
                                this.options.code = "";
                                var canvas = document.getElementById(this.options.canvasId);
                                if(canvas.getContext) {
                                    var ctx = canvas.getContext('2d');
                                }else{
                                    return;
                                }
                                ctx.textBaseline = "middle";
                                ctx.fillStyle = randomColor(180, 240);
                                ctx.fillRect(0, 0, this.options.width, this.options.height);
                                if(this.options.type == "blend") { //判断验证码类型
                                    var txtArr = this.options.numArr.concat(this.options.letterArr);
                                } else if(this.options.type == "number") {
                                    var txtArr = this.options.numArr;
                                } else {
                                    var txtArr = this.options.letterArr;
                                }

                                for(var i = 1; i <=size; i++) {
                                    var txt = txtArr[randomNum(0, txtArr.length)];
                                    this.options.code += txt;
                                    ctx.font = randomNum(this.options.height/2, this.options.height) + 'px SimHei'; //随机生成字体大小
                                    ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色        
                                    ctx.shadowOffsetX = randomNum(-3, 3);
                                    ctx.shadowOffsetY = randomNum(-3, 3);
                                    ctx.shadowBlur = randomNum(-3, 3);
                                    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
                                    var x = this.options.width / (size+1) * i;
                                    var y = this.options.height / 2;
                                    var deg = randomNum(-30, 30);
                                    /**设置旋转角度和坐标原点**/
                                    ctx.translate(x, y);
                                    ctx.rotate(deg * Math.PI / 180);
                                    ctx.fillText(txt, 0, 0);
                                    /**恢复旋转角度和坐标原点**/
                                    ctx.rotate(-deg * Math.PI / 180);
                                    ctx.translate(-x, -y);
                                }
                                /**绘制干扰线**/
                                for(var i = 0; i < 4; i++) {
                                    ctx.strokeStyle = randomColor(40, 180);
                                    ctx.beginPath();
                                    ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                                    ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                                    ctx.stroke();
                                }
                                /**绘制干扰点**/
                                for(var i = 0; i < this.options.width/4; i++) {
                                    ctx.fillStyle = randomColor(0, 255);
                                    ctx.beginPath();
                                    ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                            },
                        //验证验证码
                        validate: function(code){
                            var code = code.toLowerCase();
                            var v_code = this.options.code.toLowerCase()
                            if(code == v_code){
                                    return true;
                                }else{
                                    this.refresh();
                                    return false;
                                }
                            }
                    }
                    /**生成字母数组**/
                    function getAllLetter() {
                        var letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
                        return letterStr.split(",");
                    }
                    /**生成一个随机数**/
                    function randomNum(min, max) {
                        return Math.floor(Math.random() * (max - min) + min);
                    }
                    /**生成一个随机色**/
                    function randomColor(min, max) {
                        var r = randomNum(min, max);
                        var g = randomNum(min, max);
                        var b = randomNum(min, max);
                        return "rgb(" + r + "," + g + "," + b + ")";
                    }
                 window.GVerify = GVerify;
            },
        
        },
        components:{Header,Footer},
    }
</script>

<style scoped lang='scss'>
.clear{
    clear: both
}
    .inner {
        width: 990px;
        height: 600px;
        margin: 0 auto;
        position: relative;
        .login-cont .submit-btn {
            width: 100%;
        }
        .submit-btn {
            width: 50%;
            background: #333;
            color: #fff;
            border: none;
            border-radius: 2px;
            height: 36px;
            display: block;
            text-align: center;
            line-height: 36px;
            margin: 0 auto;
            cursor: pointer;
        }
        .inner-left {
            width: 450px;
            float: left;
            
        .login-cont {
            margin: 10px 45px 20px 45px;
            .right-input {
                margin-left: 86px;
            }
            .left-input {
                width: 60%;
                float: left;
                display: block;
                margin-right: 10%;
            }
            .oneline-input {
                line-height: 36px;
                height: 36px;
                margin: 12px 0 26px 0;
                position: relative;
                span {
                    float: right;
                }
            }
            .left-title {
                display: block;
                width: 86px;
                float: left;
                height: 36px;
                line-height: 36px;
            }
            .right-input {
                margin-left: 86px;
            }
            .input-one {
                width: 100%;
                height: 36px;
                line-height: 36px;
                border: 2px solid #ccc;
            }
            p {
                margin: 4px 0 8px 0;
            }
            p.small {
                padding: 0;
                margin: 0;
                font-size: 0.9rem;
                line-height: 0.95rem;
                color: #f00;
                text-align: right;
            }
            .left-title {
                display: block;
                width: 86px;
                float: left;
                height: 36px;
                line-height: 36px;
            }
            p.small {
                padding: 0;
                margin: 0;
                font-size: 0.9rem;
                line-height: 0.95rem;
                color: #f00;
                text-align: right;
            }
            .oneline-input {
                line-height: 36px;
                height: 36px;
                margin: 12px 0 26px 0;
                position: relative;
            }
        }
        }
        .inner-right {
                width: 450px;
                float: right;
                .login-cont .getpass {
                    width: 63%;
                    background: #333;
                    color: #fff;
                    border: none;
                    border-radius: 2px;
                    height: 36px;
                    float: right;
                    display: block;
                    text-align: center;
                    line-height: 36px;
                    margin-left: 4%;
                }
                .login-cont {
                    .checkcode {
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    float: left;
                    width: 140px;
                    height: 40px;
                    display: inline-block;
                    margin-left: 4%;
                }
                    .input-half {
                        width: 30%;
                        float: left;
                        height: 36px;
                        line-height: 36px;
                        border: 2px solid #ccc;
                    }
                    margin: 10px 45px 20px 45px;
                    .right-input {
                        margin-left: 86px;
                    }
            .left-input {
                width: 60%;
                float: left;
                display: block;
                margin-right: 10%;
            }
            .oneline-input {
                line-height: 36px;
                height: 36px;
                margin: 12px 0 26px 0;
                position: relative;
                span {
                    float: right;
                }
            }
            .left-title {
                display: block;
                width: 86px;
                float: left;
                height: 36px;
                line-height: 36px;
            }
            .right-input {
                margin-left: 86px;
            }
            .input-one {
                width: 100%;
                height: 36px;
                line-height: 36px;
                border: 2px solid #ccc;
            }
            p {
                margin: 4px 0 8px 0;
            }
            p.small {
                padding: 0;
                margin: 0;
                font-size: 0.9rem;
                line-height: 0.95rem;
                color: #f00;
                text-align: right;
            }
            .left-title {
                display: block;
                width: 86px;
                float: left;
                height: 36px;
                line-height: 36px;
            }
            p.small {
                padding: 0;
                margin: 0;
                font-size: 0.9rem;
                line-height: 0.95rem;
                color: #f00;
                text-align: right;
            }
            .oneline-input {
                line-height: 36px;
                height: 36px;
                margin: 12px 0 26px 0;
                position: relative;
            }
        }
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
    }
</style>