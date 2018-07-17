/**
 * Created by Administrator on 2018/4/6.
 */

window.setInterval("move()", 1000);

function move() {
    $(".imgb>div").animate({top: '+=2px'}, "slow");
    $(".imgb>div").animate({top: '-=2px'}, "slow");
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var uid = GetQueryString('uid');

$(function () {

    getHIT();
    aaa();

});


//全局数组
var args = 0;

function getHIT() {
    $(function () {
//      var uid = GetQueryString('uid');
//           var uid ="TURBd01EQXdNREF3TUlDZnI1ZXZtM2VvZjR5TWJZZW1vOXFFbXAyWGc0MThwb1dFaksyemVYWnJnYS0zMjY1eWMzRQ=="
        //    var uid = 'TURBd01EQXdNREF3TUlDdWt0cXZxNW1zZjN4OGFZYTJpWmFEYzJiY2hJMkFySWFhb21leHI1aXk=';
        $.ajax({

            type: 'POST',

            url: much + '/api.php/Ucenter/getHIT',

            data: {
                  "uid":uid
            },

            async: true,

            dataType: "json",

            success: function (data) {
                //alert(data.code);
                if (data.code == 200) {
                    var info_amount = data.data.info.amount;
                    //alert(info_amount)
                    $("#power").html(info_amount);
                    args = data.data.lists.length;
                    $.each(data.data.lists, function (key, val) {
                        if (key < 6) {
                            star(val['hit'], val['hid']);
                        }
                    });

                }

                aaa();
            }

        });

    });
}


function aaa() {
    if (args == 0) {
        //没数�?
        $(".imgb").hide();
        $(".canvas").show();
    } else {
        //有数�?
        $(".imgb").show();
        $(".canvas").hide();
    }
}


//动画主函�?
function star(hit, hid) {
    //创建div
    var imgObj_div = document.createElement("div");
    imgObj_div.setAttribute("style", "width:30px;height:30px;position:relative");


    //创建图片节点
    var imgObj = document.createElement("img");

    $(imgObj_div).append(imgObj);

    //创建p节点
    var imgObj_p = document.createElement("p");
    $(imgObj_div).append(imgObj_p);
    $(imgObj_p).append(hit);
    imgObj_p.setAttribute("style", "position:absolute;color: white;top: 33px;left: 5px;font-size: 12px;color: rgba(255,255,255,1);");
    //添加src属�??
    imgObj.setAttribute("src", "img/xysmall.png");
    //添加width属�?? getRandom()随机数函�?
    var width = getRandom(40, 40);
    imgObj.setAttribute("width", width);

    //添加层叠样式表属�?(style属�??  行内样式)
    var x = getRandom(0, window.innerWidth);
//          var y = getRandom(0,window.innerHeight);

    var w = $("img").width();
    var h = $("img").height();
   // alert($(".imgb").width());
    var divx = $(".imgb").width() - w - 60;
    var divy = $(".imgsmb").height() - h - 40;

    //添加层叠样式表属�?(style属�??  行内样式)
    var x = getRandom(0, divx);
    var y = getRandom(0, divy);
    //设置坐标 x y 为未知数
    imgObj_div.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");


    imgObj_div.setAttribute("hid", hid);
    imgObj_div.setAttribute("hit", hit);


    //添加onclick事件属�??
    //this 代表当前对象,this是一个对�?,只能在函数内使用
    imgObj_div.setAttribute("onclick", "removeImg(this)");
    //将图片节�?,挂载到body的父节点�?
//            document.body.appendChild(imgObj);
    $(".imgsmb").append(imgObj_div);
}


//函数:求随机数函数
function getRandom(min, max) {
    var random = Math.random() * (max - min) + min;
    //向下取整
    random = Math.floor(random);
    //返回结果
    return random;
}

//函数:删除节点
function removeImg(obj) {

    var hid = $(obj).attr('hid');
    var hit = $(obj).attr('hit');

//  var uid = GetQueryString('uid');
//    var uid ="TURBd01EQXdNREF3TUlDZnI1ZXZtM2VvZjR5TWJZZW1vOXFFbXAyWGc0MThwb1dFaksyemVYWnJnYS0zMjY1eWMzRQ=="
//  var uid = 'TURBd01EQXdNREF3TUlDdWt0cXZxNW1zZjN4OGFZYTJpWmFEYzJiY2hJMkFySWFhb21leHI1aXk=';

    $.ajax({

        type: 'POST',

        url: much + '/api.php/Ucenter/addHIT/',


        data: {
            "uid": uid,
            "amount": hit,
            "hid": hid
        },

        async: true,

        dataType: "json",

        success: function (data) {
            if (data.code == 200) {
                $("#power").html(data.data.info.amount);
            }

        }
//      error:function(){
//          alert("出错�?");
//      }

    });

    var len = $(".imgsmb>div").length;
    //alert(len);

    if (len == 1) {
        $(obj).remove();
        //$(".imgb").load(location.href+" .imgb");
        window.location.reload();
    } else {
        // alert(len);
        $(obj).remove();
    }
}