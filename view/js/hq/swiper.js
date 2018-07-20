var code = codes;
var token = tokens;
var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
if (code === 4001) {
    token = fun1() 
} else {
    token = token
}
   
var num = 0
//轮播图片
$.ajax({
    type:"GET",
    url:much+"/api.php/Trend/getPicture/access_token/"+token,
    async:true,
    dataType:"json",
    data:{
        "p":1,
        "limit":4,
        "uid":uid
    },
    success:function(mes){
        var arr2=mes.data.lists;
        for(var i=0;i<arr2.length;i++){
            str = '<div class="swiper-slide"><img src="' + (much + arr2[i].img) + '"/></div>';
            $(".swiper-wrapper").append(str);
            var mySwiper = new Swiper('.swiper-container',{
            scrollbar:'.swiper-scrollbar',
            scrollbarHide : false,
            scrollbarDraggable : true ,
            scrollbarSnapOnRelease : true ,
            }); 
        }
    }
});