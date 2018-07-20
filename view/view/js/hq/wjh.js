var token = tokens;
var code = codes;
var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
var p = 1;
var pages = 2;


function scroll1(){
    var isloading = false;
     $(window).scroll(function () {
        if (isloading) {
            return isloading;
        }
        if ($(document).scrollTop() + $(window).height()>= $(document).height()) {
            p=p+1;
            isloading = true;
            getdata(p);
            scroll1();
        }
        
    })
}
scroll1();

function getdata(){
    var type= $("input[name='type']").val();

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
                if(type=1){
                     li += '<li><p>'+item.abbreviation+'</p><p>'+item.price+'</p><p>￥'+item.turnover+'</p><p style="'+color+'">'+item.rose+'%</p><p class="'+item.is_collection+'" id="'+item.id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img1"/></p></li>';
                }else{
                     li += '<li><p>'+item.abbreviation+'</p><p>'+item.price+'</p><p>￥'+item.turnover+'</p><p style="'+color+'">'+item.rose+'%</p><p class="'+item.is_collection+'" id="'+item.id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
                }
               
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
        $("input[name='type']").val(2);
        p=1;
        getdata();
    })
    $(".wrapper_two .menu_hq ul .scxq").click(function(){
        $(".menu_li1 li").remove();
        $("input[name='type']").val(1);
        p=1;
        getdata();
    })
}
dianji();