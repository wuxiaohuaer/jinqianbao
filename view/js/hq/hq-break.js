var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
var token = tokens
var code = codes;
var onoff = true
var type =1;
var p=1
//tab1下拉刷新
var tab1 = document.querySelector('.scxq');
var tab2 = document.querySelector('.gzbz');
// var tab1 = document.getElementById('menu_li1');
// var tab2 = document.getElementById('gzbz');

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
var s = 1
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
