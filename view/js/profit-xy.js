/**
 * Created by Administrator on 2018/4/2.
 */
// var uid ="TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c="
var token = tokens
var code = codes;
    //绘制环状百分比图
drawCirclepercent =  function(canvas,percentage){   /*参数：canvas对象，支持人数百分比，支持实际人数*/
    var  clientWidth = document.documentElement.clientWidth;
    var canvasWidth = Math.floor(clientWidth*550/720);     /*rem与px之间的换算*/
    /*canvasWidthDom=canvasWidth * 0.7*0.45+4;
     $("#canvas").css("width",canvasWidthDom);*/

    /*三个圈的半径递增*/
    /* var innerR1 = canvasWidth ;
     var innerR2 = canvasWidth +2;
     var innerR3 = canvasWidth +4;*/
    var innerR1 = canvasWidth * 0.2*0.45;
    var innerR2 = canvasWidth * 0.2*0.45+1;
    //var innerR3 = canvasWidth * 0.2*0.45+5;
//        var innerR4 = canvasWidth * 0.7*0.45+6;
    var ctx;
    canvas.setAttribute('width',innerR2*2+'px');
    canvas.setAttribute('height',innerR2*2+'px');

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
    ctx.translate(innerR2,innerR2);

    /* /!*内层灰色圈 ，半径为innerR1，粗为2  *!/*/
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.arc(0, 0, innerR1, 0*(Math.PI/180), 2*Math.PI,true);   /* /!*�ڲ��ɫȦ   *!/*/
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#1f172f";
    ctx.stroke();

    /*第一个彩色圈    半径为innerR1，粗为1*/
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.arc(0, 0, innerR1, 0*(Math.PI/180),(percentage/100*360)*(Math.PI/180),false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#9457f1";
    ctx.stroke();

    /*第二个彩色圈   半径为innerR2，粗为1*/
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.arc(0, 0, innerR2, 0*(Math.PI/180),(percentage/100*360)*(Math.PI/180),false);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#9457f1";
    ctx.stroke();

    ///*第三个彩色圈   半径为innerR3，粗为1*/
    //ctx.beginPath();
    //ctx.lineCap="round";
    //ctx.arc(0, 0, innerR3, 0*(Math.PI/180),(percentage/100*360)*(Math.PI/180),false);   /*��ɫȦ   ��ɫȦ�ǣ�290-150��=140��   ��ôpercentage=(m-165)/240,m=percentage*240+165*/
    //ctx.lineWidth = 2;
    //ctx.strokeStyle = "#9457f1";
    //ctx.stroke();

    /*创建外层阴影  半径为innerR3*/
    /* ctx.beginPath();
     ctx.lineCap="round";
     var grd=ctx.createRadialGradient(0,0,innerR3,0,0,innerR3+15);
     grd.addColorStop(0,"red");
     grd.addColorStop(1,"white");
     ctx.fillStyle=grd;
     ctx.boxShadow='0 0 9px #5C3088';
     */
    /* ctx.arc(0, 0, innerR3+15, 0*(Math.PI/180),2*Math.PI,false);
     ctx.stroke();*/
    /* ctx.fillRect(0,0,innerR3,0,2*Math.PI);*/

};

/* drawCirclepercent(document.getElementById('canvas'),65/100);*/
function percentage(a1,a2){
    if(a1==0){   /*支持率为0/100时的情况*/
        drawCirclepercent(document.getElementById('canvas'),0);
    }else{    /*支持率不为0/100时的情况*/
        num=0;
        setTimeout(function(){
            num+=0.5;
            if(num<=a1){
                drawCirclepercent(document.getElementById('canvas'),parseFloat(Math.round(((num*100)/a2)*100)/100).toFixed(1));
            }
            setTimeout(arguments.callee,5);
        },5);
    }
}
/*函数执行*/
percentage(100,100);   /*转100%圆圈*/




function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
// 表格数据
$(function () {
    var uid = GetQueryString('uid');
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
//  var uid ="TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c="
    $.ajax({

        type: 'POST',

        url: much+'/api.php/Ucenter/powers/access_token/'+token,

        data: {
            "uid":uid,
            "limit":10
           },

        async : true,

        dataType : "json",

        success:function(data){
            //alert(data.code);
            // console.log(data)
            if(data.code==200){
                // alert(data.data.info.power);
                var info_power = data.data.info.power ;
                $("#info-power").html(info_power);
                var html='';
                   $.each(data.data.lists,function(i,v){
                       //html+=" <tr><td><img src='img/xy-first.png' alt=''/></td><td>"+v.username+"</td><td>"+v.power+"</td></tr>"
                       html+=" <tr><td>"+aaa_img(i)+"</td><td>"+v.username+"</td><td>"+v.power+"</td></tr>";
                   });

                $(".list").append(html);
            }

        },
        error:function(){
            // alert("出错啦");
        }

    });

});

function aaa_img(i){
    var title;
    switch (i){
        case 0:
            title = '<img src="img/xyfir.png" alt=""/>';
            break;
        case 1:
            title = '<img src="img/xytw.png" alt=""/>';
            break;
        case 2:
            title= '<img src="img/xythr.png" alt=""/>';
            break;
        default:
            title = 'No.'+(i+1);

    }
    return title;
}









