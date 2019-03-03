<template>
    <div>
        <div id="chat">
            <div class="sidebar">
                <div class="m-card">
                    <header>
                        <img class="avatar" width="40" height="40" alt="Coffce" src="../assets/nango.jpg">
                        <p class="name">nango</p>
                    </header>
                    <footer>
                        <input class="search" placeholder="search room...//TODO">
                    </footer>
                </div>
                <!--v-component-->
                <div class="m-list">
                    <ul>
                        <li class="active">
                            <img class="avatar" width="30" height="30" alt="房间" src="../assets/nango.jpg">
                            <p class="name">nango's room</p>
                        </li>
                        <!-- <li>
                            <img class="avatar" width="30" height="30" alt="webpack" src="images/3.jpg">
                            <p class="name">other</p>
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="main">
                <div class="m-message">
                    <ul>
                        <li>
                            <p class="time"><span></span>
                            </p>
                        <!-- <div class="main">
                                <img class="avatar" width="30" height="30" src="images/nango.jpg">
                                <div class="nick">nango</div>
                                <div class="text">Hello，这是一个基于Workerman的聊天室，实现实时显示，非轮询。&#45;&#45;&#45;&#45;请文明</div>
                            </div>-->
                        </li>
                    <li><p class="time"><span>16:00:40	nango4303 已上线</span></p><div class="main"><img class="avatar" width="30" height="30" src="images/nango.jpg"><div class="nick">nango4303</div><div class="text">Hi</div></div></li></ul>
                </div>
                <!--send-->
                <div class="users">
                    在线用户
                    <select name="client" class="client"><option value="all" selected="selected">所有人</option><option value="100">nango4303</option></select>
                    <input type="submit" name="" id="" onclick="send_msg()" value="发送">
                </div>
                <div class="m-text">
                    <textarea placeholder="按 Ctrl + Enter 发送" class="input"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created(){
            // this.add()
        },
        methods:{
            add(){
                //连接
                ws = new WebSocket("ws://118.24.4.151:9502");
                var name = sessionStorage.name;
                function connect(){
                    if(name == 'undefined' || name == 'null' || name == ''){
                        inputName();
                    }

                    var content = '{"type":"login","name":"'+ name +'","to_client":"all"}';
                        ws.onopen = function() {
                        ws.send(content);
                    };
                    
                }
                //输入名称
                function inputName(){
                    var tempName = 'nango'+Math.floor(Math.random()*10000);
                    name = prompt('输入你的名字：', tempName);

                    if(name != 'undefined' && name != 'null' && name != ''){
                        sessionStorage.name=name;
                    }else{
                        alert('请输入你的昵称！');
                        inputName();
                    }
                }
                //发送消息
                $(".input").keypress(function(e) {
                    //firefox enter code=13 ; chrome = 10		
                    if (e.ctrlKey && (e.which == 13 || e.which == 10)){
                        var text = $(".input").val();
                        var to_client = $(".client option:selected").val();
                        if(text == ''){
                            alert('不能发送空内容！');
                            return;
                        }
                        var d=new Date();
                        var time=d.toLocaleTimeString();

                        type = to_client == 'all'?"say":"prisay";	
                        var content = '{"type":"'+ type +'","content":"'+ text +'","name":"'+ name +'","to_client":"'+ to_client +'","time":"'+ time +'"}';
                        console.log(content);
                        ws.send(content);
                        $(".input").val('').focus();
                    }
                });


                function send_msg() {
                    var text = $(".input").val();
                    var to_client = $(".client option:selected").val();
                    if(text == ''){
                        alert('不能发送空内容！');
                        return;
                    }
                    var d=new Date();
                    var time=d.toLocaleTimeString();

                    type = to_client == 'all'?"say":"prisay";
                    var content = '{"type":"'+ type +'","content":"'+ text +'","name":"'+ name +'","to_client":"'+ to_client +'","time":"'+ time +'"}';
                    console.log(content);
                    ws.send(content);
                    $(".input").val('').focus();
                }
                //服务端消息返回
                ws.onmessage = function(e) {
                    //console.log(e.data);
                    var data = JSON.parse(e.data);

                    console.log(data);
                    var str = '<li>'
                            +    '<p class="time"><span>'+ data.time +'</span>'
                            +   '</p>';
                            if(data.nick != name){
                                str +=   '<div class="main">';
                            }else{
                                str +=   '<div class="main self">';
                            }
                            
                        str +=       '<img class="avatar" width="30" height="30" src="images/nango.jpg">'
                            +       '<div class="nick">'+ data.name +'</div>'
                            +       '<div class="text">'+ data.content +'</div>'
                            +   '</div>'
                            +'</li>';
                    
                    if(data.type == 'login'){
                        //已连接服务的客户端对象
                        var client_list = {};
                        client_list = data.clients;
                        //遍历所有已连接客户端
                        html = '<option value="all" selected="selected">所有人</option>';
                        for (var key in client_list) {
                            html += '<option value="'+ key +'">'+ client_list[key].name +'</option>';
                        }
                        $('.client').html(html);
                    $(".m-message ul").append(str);
                    }else if (data.type == 'say'){

                        $(".client").empty();
                        var client_list1 = {};
                        client_list1 = data.clients;
                        //遍历所有已连接客户端
                        html = '<option value="all" selected="selected">所有人</option>';
                        for (var key in client_list1) {
                            html += '<option value="'+ key +'">'+ client_list1[key].name +'</option>';
                        }
                        $('.client').html(html);

                        $(".m-message ul").append(str);
                    }

                    //滚动到底部
                    $(".m-message").scrollTop($('.m-message ul')[0].scrollHeight);
                };	

                ws.onopen=function (event) {
                    alert('连接成功');
                };

                ws.onclose=function (event) {
                    alert('连接失败');
                };

                $(document).ready(function(){
                    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
                        alert('暂不支持移动端访问，请移步PC端！');
                        return false;
                    }
                    connect();
                });
	
            }
        }
    }
</script>

<style scoped lang='scss'>
    *, *:before, *:after {
    box-sizing: border-box;
}
body, html {
    height: 100%;
    overflow: hidden;
}
body, ul {
    margin: 0;
    padding: 0;
}
body {
    color: #4d4d4d;
    font: 14px/1.4em 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial, sans-serif;
    background: #f5f5f5 url('../assets/bg.jpg') no-repeat center;
    background-size: cover;
}
ul {
    list-style: none;
}
#chat {
    margin: 20px auto;
    width: 800px;
    height: 600px;
}
#chat {
    overflow:hidden;
    border-radius:3px
}
#chat .main, #chat .sidebar {
    height:100%
}
#chat .sidebar {
    float:left;
    width:200px;
    color:#f4f4f4;
    background-color:#2e3238
}
#chat .main {
    position:relative;
    overflow:hidden;
    background-color:#eee
}
#chat .m-text {
    position:absolute;
    width:100%;
    bottom:-30px;
    left:0
}
#chat .m-message {
    height:calc(100% - 10pc)
}
.m-card {
    padding:9pt;
    border-bottom:1px solid #24272c
}
.m-card footer {
    margin-top:10px
}
.m-card .avatar, .m-card .name {
    vertical-align:middle
}
.m-card .avatar {
    border-radius:2px
}
.m-card .name {
    display:inline-block;
    margin:0 0 0 15px;
    font-size:1pc
}
.m-card .search {
    padding:0 10px;
    width:100%;
    font-size:9pt;
    color:#fff;
    height:30px;
    line-height:30px;
    border:1px solid #3a3a3a;
    border-radius:4px;
    outline:0;
    background-color:#26292e
}
.m-list li {
    padding:9pt 15px;
    border-bottom:1px solid #292c33;
    cursor:pointer;
    -webkit-transition:background-color .1s;
    transition:background-color .1s
}
.m-list li:hover {
    background-color:hsla(0, 0%, 100%, .03)
}
.m-list li.active {
    background-color:hsla(0, 0%, 100%, .1)
}
.m-list .avatar, .m-list .name {
    vertical-align:middle
}
.m-list .avatar {
    border-radius:2px
}
.m-list .name {
    display:inline-block;
    margin:0 0 0 15px
}
.m-text {
    height:10pc;
    border-top:1px solid #ddd
}
.m-text textarea {
    padding:10px;
    height:100%;
    width:100%;
    border:none;
    outline:0;
    font-family:Micrsofot Yahei;
    resize:none
}
.m-message {
    padding:10px 15px;
    overflow-y:scroll
}
.m-message li {
    margin-bottom:15px
}
.m-message .time {
    margin:7px 0;
    text-align:center
}
.m-message .time>span {
    display:inline-block;
    padding:0 18px;
    font-size:9pt;
    color:#fff;
    border-radius:2px;
    background-color:#dcdcdc
}
.m-message .avatar {
    float:left;
    margin:10px 10px 0 0;
    border-radius:3px
}
.m-message .text {
    display:inline-block;
    position:relative;
    padding:0 10px;
    max-width:calc(100% - 40px);
    min-height:30px;
    line-height:2.5;
    font-size:9pt;
    text-align:left;
    word-break:break-all;
    background-color:#fafafa;
    border-radius:4px
}
.m-message .text:before {
    content:" ";
    position:absolute;
    top:4px;
    right:100%;
    border:6px solid transparent;
    border-right-color:#fafafa
}
.m-message .self {
    text-align:right
}
.m-message .self .avatar {
    float:right;
    margin:10px 0 0 10px
}
.m-message .self .text {
    background-color:#b2e281
}
.m-message .self .text:before {
    right:inherit;
    left:100%;
    border-right-color:transparent;
    border-left-color:#b2e281
}
.m-message .nick{
    font-size:12px;
    color:#C5C5AD;
}
.users{
    height: 30px;
    width: 100%;
    position: absolute;
    z-index: 9;
    background: #fff;
    padding: 5px;
}

</style>