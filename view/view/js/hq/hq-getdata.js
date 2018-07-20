// var token = tokens
// var code = codes;
// var p = 0;
// var page = 0
// var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
// var onoff = 1
// // 页面加载
// $.ajax({
//     url:much+"/api.php/Trend/market/access_token/"+token,
//     async:true,
//     dataType:"json",
//     type:"POST",
//     data:{
//         "p":1,
//         "limit":30,
//         "uid":uid
//     },
//     success:function(messg){
//         var arr2=messg.data.lists;
//         var color="";
//         for(var i=0;i<arr2.length;i++){
//             if(arr2[i].rose>0){
//                 color = "color:green"
//             }else if(arr2[i].rose<0){
//                 color = "color: #ff3e3e"
//             }else{
//                 color = "color:orange"
//             }
            
//             var str='<li><p>'+arr2[i].abbreviation+'</p><p>'+arr2[i].price+'</p><p>￥'+arr2[i].turnover+'</p><p style="'+color+'">'+arr2[i].rose+'%</p><p class="'+arr2[i].is_collection+'" id="'+arr2[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
            
//             $(".menu_li1").append(str);
//         }
        
//         $(".false .img2").hide();
//         $(".true .img1").hide();
        
//     }
// })
// // tab1页面加载
// $(".wrapper_two .menu_hq ul .scxq").click(function(){
//     onoff = 1
//     $(".menu_li1 li").remove();
//     $(".wrapper_two .sc_hq .tab2 .sshq_bj .span3").hide();
//     $(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").show();
//     $(this).css({
//         "border-bottom":"#f1be1c solid 1px",
//         "color":"#f1be1c"
//     })
//     $(".wrapper_two .menu_hq ul .gzbz").css({
//         "border-bottom":"solid 1px #999",
//         "color":"#999"
//     })
//     $(".wrapper_two .sc_hq .tab1").show();
//     $(".wrapper_two .sc_hq .tab2").hide();
//     $(".one_header_hq").show();
//     $(".two_header_hq").hide();
//     $('.one_header_hq span').hide();
//     $(".one_header_hq input").hide();
//     $(".one_header_hq p").show();
//     $(".one_header_hq img").show();
//     if (code === 4001) {
//         token = fun1() 
//     } else {
//         token = token
//     }
//     $.ajax({
//         url:much+"/api.php/Trend/market/access_token/"+token,
//         async:true,
//         dataType:"json",
//         type:"POSt",
//         data:{
//             "uid":uid,
//             "limit":16,
//             "p":1
//         },
//         success:function(messg){
//             $(".menu_li1 li").remove()
//             var arr2=messg.data.lists;
//             var color="";
//             for(var i=0;i<arr2.length;i++){
                
//                 if(arr2[i].rose>0){
//                     color = "color:green"
//                 }else if(arr2[i].rose<0){
//                     color = "color: #ff3e3e"
//                 }else{
//                     color = "color:orange"
//                 }
                
//                 var str='<li><p>'+arr2[i].abbreviation+'</p><p>'+arr2[i].price+'</p><p>￥'+arr2[i].turnover+'</p><p style="'+color+'">'+arr2[i].rose+'%</p><p class="'+arr2[i].is_collection+'" id="'+arr2[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';
                
                
//                 $(".menu_li1").append(str);
//             }
//             $(".false .img2").hide();
//             $(".true .img1").hide();
//         }
//     })
// })

// //tab2页面加载
// $(".wrapper_two .menu_hq ul .gzbz").click(function(){
//     onoff = 2
//     $(".menu_li2 li").remove();
//     $(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").hide();
//     $(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
//     $(this).css({
//         "border-bottom":"#f1be1c solid 1px",
//         "color":"#f1be1c"
//     })
//     $(".wrapper_two .menu_hq ul .scxq").css({
//         "border-bottom":"solid 1px #999",
//         "color":"#999"
//     })
//     $(".wrapper_two .sc_hq .tab2").show();
//     $(".wrapper_two .sc_hq .tab1").hide();
//     $(".two_header_hq").show();
//     $(".one_header_hq").hide();
//     $('.two_header_hq span').hide();
//     $(".two_header_hq input").hide();
//     $(".two_header_hq p").show();
//     $(".two_header_hq img").show();
//     if (code === 4001) {
//         token = fun1() 
//     } else {
//         token = token
//     }
//     $.ajax({
//         url:much+"/api.php/Quotation/lists/p/1/access_token/"+token,
//         type: 'POST',
//         async:true,
//         dataType:"json",
//         data:{
//             "uid":uid,
//             "limit":16,
//             "p":1
//         },
//         success:function(mess){
//             var arr=mess.data.lists;
//             var color="";
//             p = mess.data.p
//             page = mess.data.pages
//             // console.log(p,page)
//             for(var i=0;i<arr.length;i++){
                
//                 if(arr[i].rose>0){
// //							console.log(1)
//                     color = "color:green"
//                 }else if(arr[i].rose<0){
// //							console.log(2)
//                     color = "color: #ff3e3e"
//                 }else{
// //							console.log(3)
//                     color = "color:orange"
//                 }
                
//                 var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="true1" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';
                
                
//                 $(".menu_li2").append(str1);
//             }
//             $(".true1 .img1").hide();
            
//         }
//     })
// })
// console.log(onoff)