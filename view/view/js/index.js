
$(function(){
	var id = GetQueryString('id');
    $.ajax({
		url:much+"/api.php/Article/details/id/"+id,
		async:true,
		dataType:"json",
		success:function(mess){
			var con='<div class="content_art1"><p class="p3">'+mess.data.info.title +'</p><div class="person"><div class="le_c"><img src="'+(much+mess.data.info.user_head)+'" alt="" class="img_con1"/><div class="you"><p class="p1">'+mess.data.info.author+'</p><p class="p2">'+mess.data.info.create_time+'</p></div></div><div class="ri_c"><img src="img/xq_rq.png?v=2"/><p class="p4">'+mess.data.info.view+'</p></div></div><div class="content">'+mess.data.info.content+'</div><div class="sm">声明：本文系金钱报原创稿件，版本属金钱报所有，未经授权不得转载，已经协议授权的媒体下载使用时须注明稿件来源：“金钱报”，违者将依法追究责任。</div></div>';
			$(".article1").append(con);
            
            hiBlock.setCid(mess.data.info.cid+"");
            
            $("a").removeAttr("href");
            $(".img_con1").click(function(){
            	hiBlock.showUserDetail(mess.data.info.uid+"",mess.data.info.user_type+"");
            })
		}
	}) 
});
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}