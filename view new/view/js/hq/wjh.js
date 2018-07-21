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
getdata();
$(window).scroll(function() {
    if($(document).scrollTop()>=180){
        $(".wrapper_two .sc_hq .tab1 .sshq_bj").css({
            "position":"fixed",
            "left":0,
            "top":"0.8rem",
            'background':"#1a1a20"
        })
        $(".wrapper_two .sc_hq .tab1 .title").css({
            "position":"fixed",
            "left":0,
            "top":"1.6rem",
            'background':"#1a1a20"
        })
    }else{
        $(".wrapper_two .sc_hq .tab1 .sshq_bj").css({
            "position":"relative",
            "left":0,
            "top":0,
            'background':"#1a1a20"
        })
        $(".wrapper_two .sc_hq .tab1 .title").css({
            "position":"relative",
            "left":0,
            "top":0,
            'background':"#1a1a20"
        })
    }
})
window.onscroll = function() {
    if(window.pageYOffset > 0){
        $(".wrapper_two .sc_hq .tab2 .sshq_bj").css({
            "position":"fixed",
            "left":0,
            "top":"0.6rem",
            'background':"#1a1a20"
        })
        $(".wrapper_two .sc_hq .tab2 .title").css({
            "position":"fixed",
            "left":0,
            "top":"1.4rem",
            'background':"#1a1a20"
        })
    }else{
        $(".wrapper_two .sc_hq .tab2 .sshq_bj").css({
            "position":"relative",
            "left":0,
            "top":0,
            'background':"#1a1a20"
        })
        $(".wrapper_two .sc_hq .tab2 .title").css({
            "position":"relative",
            "left":0,
            "top":0,
            'background':"#1a1a20"
        })
    } 
}; 
dianji();
function dianji(){
    // 右边点击事件
    $(".wrapper_two .menu_hq ul .gzbz").click(function(){
        $(".menu_li1 li").remove();
        $(".menu_li2 li").remove();
        $("input[name='type']").val(2);
        p=1;
        $(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").hide();
        $(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
        $(this).css({
            "border-bottom":"#f1be1c solid 1px",
            "color":"#f1be1c"
        })
        $(".wrapper_two .menu_hq ul .scxq").css({
            "border-bottom":"solid 1px #999",
            "color":"#999"
        })
        $(".wrapper_two .sc_hq .tab2").show();
        $(".wrapper_two .sc_hq .tab1").hide();
        $(".two_header_hq").show();
        $(".one_header_hq").hide();
        $('.two_header_hq span').hide();
        $(".two_header_hq input").hide();
        $(".two_header_hq p").show();
        $(".two_header_hq img").show();
        getdata2();
    })
    //左边点击事件
    $(".wrapper_two .menu_hq ul .scxq").click(function(){
        $(".menu_li1 li").remove();
        $(".menu_li2 li").remove();
        $("input[name='type']").val(1);
        p=1;
        getdata()
        $(".wrapper_two .sc_hq .tab2 .sshq_bj .span3").hide();
        $(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").show();
        $(this).css({
            "border-bottom":"#f1be1c solid 1px",
            "color":"#f1be1c"
        })
        $(".wrapper_two .menu_hq ul .gzbz").css({
            "border-bottom":"solid 1px #999",
            "color":"#999"
        })
        $(".wrapper_two .sc_hq .tab1").show();
        $(".wrapper_two .sc_hq .tab2").hide();
        $(".one_header_hq").show();
        $(".two_header_hq").hide();
        $('.one_header_hq span').hide();
        $(".one_header_hq input").hide();
        $(".one_header_hq p").show();
        $(".one_header_hq img").show();
    })
}
//tab1收藏按钮
$(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").click(function(){
    $(this).hide();
    $(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").show();
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(5)").show();
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(1)").css("width","1.3rem");
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(2)").css("width","2rem");
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(3)").css("width","1.9rem");
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(4)").css("text-align","left");
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(1)").css("width","1.3rem")
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(2)").css("width","2rem")
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(3)").css("width","1.9rem")
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(4)").css("text-align","left")
    $(".false .img2").hide();
    $(".false .img1").show();
    $(".true .img1").hide();
    $(".true .img2").show();
})

$(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").click(function(){
    $(this).hide();
    $(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(5)").hide();
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(1)").css("width","1.41rem");
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(2)").css("width","2.17rem");
    $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(3)").css("width","2.15rem");
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(1)").css("width","1.41rem")
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(2)").css("width","2.17rem")
    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(3)").css("width","2.15rem")
    $(".menu_li2 li").remove();
})

//tab2收藏按钮
$(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").click(function(){
    $(this).hide();
    $(".wrapper_two .sc_hq .tab2 .sshq_bj .span3").show();
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(5)").show();
    
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(1)").css("width","1.3rem");
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(2)").css("width","2rem");
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(3)").css("width","1.9rem");
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(4)").css("text-align","left");
    
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(1)").css("width","1.3rem")
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(2)").css("width","2rem")
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(3)").css("width","1.9rem")
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(4)").css("text-align","left")
})

$(".wrapper_two .sc_hq .tab2 .sshq_bj .span3").click(function(){
    $(this).hide();
    $(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").show();
    
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(5)").hide();
    
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(1)").css("width","1.41rem");
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(2)").css("width","2.17rem");
    $(".wrapper_two .sc_hq .tab2 .title li:nth-of-type(3)").css("width","2.15rem");
    
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(1)").css("width","1.41rem")
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(2)").css("width","2.17rem")
    $(".wrapper_two .sc_hq .tab2 .menu_li2 li p:nth-of-type(3)").css("width","2.15rem")
    $(".menu_li2 li").remove()
    getdata2()
})
// 获取左边数据
function getdata(){
    var type= $("input[name='type']").val();
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    var url = much+"/api.php/Trend/market/access_token/"+token+'/p/'+p;//请求地址
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
                li += '<li><p>'+item.abbreviation+'</p><p>'+item.price+'</p><p>￥'+item.turnover+'</p><p style="'+color+'">'+item.rose+'%</p><p class="'+item.is_collection+'" id="'+item.id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';   
            })
            $(".menu_li1").append(li);
        }
        });
    }
}
// 获取右边数据
function getdata2(){
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Quotation/lists/p/1/access_token/"+token,
        type: 'POST',
        async:true,
        dataType:"json",
        data:{
            "uid":uid,
            "limit":30,
            "p":1
        },
        success:function(mess){
            var arr=mess.data.lists;
            var color="";
            for(var i=0;i<arr.length;i++){
                if(arr[i].rose>0){
                    color = "color:green"
                }else if(arr[i].rose<0){
                    color = "color: #ff3e3e"
                }else{
                    color = "color:orange"
                }
                var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="true1" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';
                $(".menu_li2").append(str1);
            }
            $(".true1 .img1").hide();
        }
    })
}

// $("body").on("click",".ture",function(){
//     var tid=$(this).attr("id");
//     var th=$(this);
//     if (code === 4001) {
//         token = fun1() 
//     } else {
//         token = token
//     }
//     $.ajax({
//         url:much+"/api.php/Quotation/cancelCollection/access_token/"+token,
//         type: 'POST',
//         async:true,
//         dataType:"json",
//         data:{
//             "uid":uid,
//             "tid":tid
//         },
//         success:function(messg2){
//             if(messg2.code==200){
//                 th.parent().remove();
//             }
//         }
//     })
// })
$(document).on('click','.false',function(){
    var tid=$(this).attr("id");
    var th=$(this);
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Quotation/quotationCollection/access_token/"+token,
        type: 'POST',
        async:true,
        dataType:"json",
        data:{
            "uid":uid,
            "tid":tid
        },
        success:function(messg2){
            if(messg2.code==200){
                th.find(".img1").hide()
                th.find(".img2").show()
            }
            th.attr("class","true");
        }
    })
});
$(document).on('click','.true',function(){
    var tid=$(this).attr("id");
    var th=$(this);
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Quotation/cancelCollection/access_token/"+token,
        type: 'POST',
        async:true,
        dataType:"json",
        data:{
            "uid":uid,
            "tid":tid
        },
        success:function(messg2){
            if(messg2.code==200){
                th.find(".img2").hide()
                th.find(".img1").show()
            }
            th.attr("class","false");
        }
    })
    
});	
//tab2取消收藏
$(document).on('click','.true1',function(){
    var tid=$(this).attr("id");
    var th=$(this);
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Quotation/cancelCollection/access_token/"+token,
        type: 'POST',
        async:true,
        dataType:"json",
        data:{
            "uid":uid,
            "tid":tid
        },
        success:function(messg2){
            if(messg2.code==200){
                th.parent().remove();
            }
        }
    })
    
});