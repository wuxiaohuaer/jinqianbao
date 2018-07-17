var much="http://192.168.0.234";
var tokens="" ;
var codes = 0;
function fun1(){
        $.ajax({
        type : "post",
        url : "http://192.168.0.234/api.php/AccessToken/getToken",
        data : {
            "appid": "18172594CCC290DC","appsecret": "05a5e180ad8c411e"
        },
        dataType : "json", //返回数据形式为json
        async: false, //同步传输，并添加返回值，返回值应为已定义的全局变量 如a
        success : function(data) {
            var tmp = data.data.access_token;
            var tmp1 = data.code
            tokens = tmp;
            codes = tmp1;
        }
 
    });
    return codes;
}
fun1()
