var token = tokens;
var code = codes;
var range = 10; //距下边界长度/单位px
var totalheight = 0;
var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
var p = 1;
var pages = 2;
var type=1;

function scroll1(){
    var isloading = false;
     $(window).scroll(function () {
        if (isloading) {
            return isloading;
        }
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);

        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
            p=p+1;
            isloading = true;
            getdata(p);
            scroll1();
        }
    })
}
scroll1();

function getdata(){
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    if(type==1){
        var url = much+"/api.php/Trend/market/access_token/"+token+'/p/'+p;//请求地址
    }else{
        var url = much+"/api.php/Quotation/lists/access_token/"+token+'/p/'+p;//请求地址
    } 
    var li='';
    if(p <= pages){
        $.post(url, {p: p,uid:uid}, function (data) {
            console.log(data);
        if (data.data.lists == null || data.p >data.pages) {
            $("#Loadmore").text("已全部加载...");
        } else {
            pages = data.data.pages;
            $.each(data.data.lists, function (i, item) {
                if(item.rose>0){
                var color = "color:green"
                    }else if(item.rose<0){
                        color = "color: #ff3e3e"
                    }else{
                        color = "color:orange"
                }
                li += '<li><p>'+item.abbreviation+'</p><p>'+item.price+'</p><p>￥'+item.turnover+'</p><p style="'+color+'">'+item.rose+'%</p><p class="'+item.is_collection+'" id="'+item.id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
            })
            $(".menu_li1").append(li);
        }
        });
    }  
}
getdata();
function dianji(){
    $(".wrapper_two .menu_hq ul .gzbz").click(function(){
        $(".menu_li1 li").remove();
        type =2;
        getdata();
    })
    $(".wrapper_two .menu_hq ul .scxq").click(function(){
        $(".menu_li1 li").remove();
        type =1;
        getdata();
    })
}
dianji();