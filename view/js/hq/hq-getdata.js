var token = tokens
var code = codes;
var p = 1;
var s= 1
var page = 0
var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
var onoff = 1
// 页面加载
gettab1()
// tab1页面加载
$(".wrapper_two .menu_hq ul .scxq").click(function(){
    onoff = 1
    $(".menu_li1 li").remove();
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
    gettab1()
})

//tab2页面加载
$(".wrapper_two .menu_hq ul .gzbz").click(function(){
    onoff = 2
    $(".menu_li2 li").remove();
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
    gettab2()
})
// tab1页面刷新
$(window).scroll(function() {
    console.log($(document).scrollTop() + $(window).height() >= $(document).height())
    if($(document).scrollTop() + $(window).height() >= $(document).height()) {
        p++;
        if (code === 4001) {
            token = fun1() 
        } else {
            token = token
        }
        $.ajax({
            url:much+"/api.php/Trend/market/access_token/"+token,
            async:true,
            dataType:"json",
            type:"POST",
            data:{
                "p":p,
                "limit":16,
                "uid":uid
            },
            success: function(messg) {
                var arr2=messg.data.lists;
                var color="";
                if(arr2.length>0){
                    console.log(arr2)
                    for(var i=0;i<arr2.length;i++){
                        if(arr2[i].rose>0){
                            color = "color:green"
                        }else if(arr2[i].rose<0){
                            color = "color: #ff3e3e"
                        }else{
                            color = "color:orange"
                        }
                    
                        var str='<li><p>'+arr2[i].abbreviation+'</p><p>'+arr2[i].price+'</p><p>￥'+arr2[i].turnover+'</p><p style="'+color+'">'+arr2[i].rose+'%</p><p class="'+arr2[i].is_collection+'" id="'+arr2[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
                        
                        
                        $(".menu_li1").append(str);
                    }
                
                    $(".false .img2").hide();
                    $(".true .img1").hide();
                    var display =$('.wrapper_two .sc_hq .tab1 .sshq_bj .span2').css('display');
                        if(display == 'none'){
                           $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(5)").show();
    
                            $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(1)").css("width","1.3rem");
                            $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(2)").css("width","2rem");
                            $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(3)").css("width","1.9rem");
                            $(".wrapper_two .sc_hq .tab1 .title li:nth-of-type(4)").css("text-align","left");
                            
                            $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(1)").css("width","1.3rem")
                            $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(2)").css("width","2rem")
                            $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(3)").css("width","1.9rem")
                            $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(4)").css("text-align","left")
                    }
                }
            }
        });
    }
})
$(window).scroll(function() {
    if($(document).scrollTop()>=200){
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
//tab2下拉刷新
if($(document).scrollTop() + $(window).height() >= $(document).height()) {
    s++;
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Quotation/lists/p/"+s+"/access_token/"+token,
        type: 'POST',
        async:true,
        dataType:"json",
        data:{
                "uid":uid,
                "limit":16,
                "p":s
        },
        success: function(messg) {
            var arr2=messg.data.lists;
            var color="";
            // console.log(messg.data.pages)
            if (messg.data.p <= messg.data.pages) {
                for(var i=0;i<arr2.length;i++){
                    if(arr2[i].rose>0){
                        color = "color:green"
                    }else if(arr2[i].rose<0){
                        color = "color: #ff3e3e"
                    }else{
                        color = "color:orange"
                    }
                    var str='<li><p>'+arr2[i].abbreviation+'</p><p>'+arr2[i].price+'</p><p>￥'+arr2[i].turnover+'</p><p style="'+color+'">'+arr2[i].rose+'%</p><p class="'+arr2[i].is_collection+'" id="'+arr2[i].id+'"><img src="img/xing.png" class="img2"/></p></li>';
                    $(".menu_li2").append(str);
                }
                var display =$('.wrapper_two .sc_hq .tab2 .sshq_bj .span2').css('display');
                if(display == 'none'){
                    $(".wrapper_two .sc_hq .tab1 .menu_li1 li p:nth-of-type(5)").show();
                    $(".wrapper_two .sc_hq .tab2 .menu_li1 li p:nth-of-type(1)").css("width","1.3rem")
                    $(".wrapper_two .sc_hq .tab2 .menu_li1 li p:nth-of-type(2)").css("width","2rem")
                    $(".wrapper_two .sc_hq .tab2 .menu_li1 li p:nth-of-type(3)").css("width","1.9rem")
                    $(".wrapper_two .sc_hq .tab2 .menu_li1 li p:nth-of-type(4)").css("text-align","left")
                }
            }else{
                var div = document.createElement('div')
                div.className = 'des'
                div.innerHTML = "已加载全部数据"
                $(".menu_li2").append(str)
            }
            
        }
    });
}
window.onscroll = function() {
    if(window.pageYOffset > 180){
        $(".wrapper_two .sc_hq .tab2 .sshq_bj").css({
            "position":"fixed",
            "left":0,
            "top":"0.8rem",
            'background':"#1a1a20"
        })
        $(".wrapper_two .sc_hq .tab2 .title").css({
            "position":"fixed",
            "left":0,
            "top":"1.6rem",
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
function gettab1(){
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({
        url:much+"/api.php/Trend/market/access_token/"+token,
        async:true,
        dataType:"json",
        type:"POSt",
        data:{
            "uid":uid,
            "limit":16,
            "p":1
        },
        success:function(messg){
            $(".menu_li1 li").remove()
            var arr2=messg.data.lists;
            var color="";
            for(var i=0;i<arr2.length;i++){
                
                if(arr2[i].rose>0){
                    color = "color:green"
                }else if(arr2[i].rose<0){
                    color = "color: #ff3e3e"
                }else{
                    color = "color:orange"
                }
                
                var str='<li><p>'+arr2[i].abbreviation+'</p><p>'+arr2[i].price+'</p><p>￥'+arr2[i].turnover+'</p><p style="'+color+'">'+arr2[i].rose+'%</p><p class="'+arr2[i].is_collection+'" id="'+arr2[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
                
                
                $(".menu_li1").append(str);
            }
            $(".false .img2").hide();
            $(".true .img1").hide();
        }
    })
}

function gettab2(){
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
            "limit":16,
            "p":1
        },
        success:function(mess){
            var arr=mess.data.lists;
            var color="";
            p = mess.data.p
            page = mess.data.pages
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