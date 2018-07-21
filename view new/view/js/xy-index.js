/**
 * Created by Administrator on 2018/3/27.
 */
var token = tokens
var code = codes
console.log(token)
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


$(function () {
    var uid = GetQueryString('uid');
    // var uid ="TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c==="
    if (code === 4001) {
        token = fun1() 
    } else {
        token = token
    }
    $.ajax({

        type: 'POST',

      
        url: much+'/api.php/Ucenter/invitation/access_token/'+token,

        data: {
			'uid':uid
        },

        async : true,

        dataType : "json",

       success:function(data){

           if(data.code==200){
               var invita_code = data.data.info.invitation;
               var freq_code = data.data.info.invitation_frequency;
               var img_code = data.data.info.qr_code;

               $("#invitation").html(invita_code);
               $("#invitation_frequency").text(freq_code);
//             $("#qr_code").attr("src","http://qr.liantu.com/api.php?text=");
           }else{
               return false;
           }

       }

    });

});

//alert(c);


//function copyFriend(){
//    $(".fu").on("click", function () {
//        $(".xy-copy").show().delay(1000).fadeOut();
//
//        var c = document.getElementById("invitation").innerHTML;
//        //alert(c)
//        var s = c.innerHTML;
//        var clipboard = new Clipboard('.fu', {
//            text: function () {
//                return c;
//            }
//        });
//        clipboard.on('error', function (e) {
//            console.log(e);
//        });
//
//    });
//}

$(function () {
    $(".fu").on("click", function () {
        $(".xy-copy").show().delay(1000).fadeOut();

        var c = document.getElementById("invitation").innerHTML;
        //alert(c)
        var s = c.innerHTML;
        var clipboard = new Clipboard('.fu', {
            text: function () {
                return c;
            }
        });
        clipboard.on('error', function (e) {
        });

    });
});