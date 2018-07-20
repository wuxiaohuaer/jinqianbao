<script type="text/javascript">
	$(function(){	
		var uid = GetQueryString('uid');
		var access_token = GetQueryString('access_token');
		var token = tokens
		var code = codes;
		var uid = 'TURBd01EQXdNREF3TUg2RnItQ0R0bmRyc2MtbXFIMmNxSmV5ZXNwamY3VjJaWU93cUphMHVJSm5nSVhOb3c=';
		//判断是否有uid
		if(uid==null){
			$(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").hide();
			$(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").hide();
		}else{
			$(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
			$(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").show();
		}
		//tab1/2搜索
		document.onkeydown=function(e){
			var ev=document.all?window.event:e;
			if(ev.keyCode==13){
				var my_data=$(".input1").val();
				my_data=escape(my_data)+"";
				$(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
				$(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").hide();
				$(".wrapper_two .sc_hq .tab2 .sshq_bj .span2").show();
				$(".wrapper_two .sc_hq .tab2 .sshq_bj .span3").hide();
				document.activeElement.blur();
				if (code === 4001) {
					token = fun1() 
				} else {
					token = token
				}
				$.ajax({
                    url: much+"/api.php/Trend/market/access_token/"+token,
                    data:{
                    	'search':my_data,
                    	"uid":uid,
                    	"limit":50
                    },
                    type:'POST',
                    async:true,
					dataType:"json",
                    success:function(messg1){
						
						$(".menu_li1 li").remove();
						
//						console.log(1);
						var arr=messg1.data.lists;
						var color="";
						for(var i=0;i<arr.length;i++){
							
							if(arr[i].rose>0){
								color = "color:green"
							}else if(arr[i].rose<0){
								color = "color: #ff3e3e"
							}else{
								color = "color:orange"
							}
							
							var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="'+arr[i].is_collection+'" id="'+arr[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';;
							
							$(".menu_li1").append(str1);
							
						}
						$(".false .img2").hide();
						$(".true .img1").hide();
						$(".input1").val("");
					}
                });
                
                var my_data2=$(".input2").val();
				my_data2=escape(my_data2)+"";
				if (code === 4001) {
					token = fun1() 
				} else {
					token = token
				}
				$.ajax({
                    url: much+"/api.php/Quotation/lists/p/1/access_token/"+token,
                    data:{
                    	"search":my_data2,
                    	"uid":uid,
                    	"limit":50
                    },
                    type:'post',
                    async:true,
					dataType:"json",
                    success:function(messg1){
						
						$(".menu_li2 li").remove();
						
						console.log(1);
						var arr=messg1.data.lists;
						var color="";
						for(var i=0;i<arr.length;i++){
							
							if(arr[i].rose>0){
								color = "color:green"
							}else if(arr[i].rose<0){
								color = "color: #ff3e3e"
							}else{
								color = "color:orange"
							}
							
							var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="ture2" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';;
							
							$(".menu_li2").append(str1);
							$(".true2 .img1").hide();
							$(".input2").val("");
						}
					}
                });
				
			}
		}
		
		$(".input1_search").onsubmit = function(e){
		   var my_data=$(".input1").val();
				my_data=escape(my_data)+"";
				$(".wrapper_two .sc_hq .tab1 .sshq_bj .span2").show();
				$(".wrapper_two .sc_hq .tab1 .sshq_bj .span3").hide();
				document.activeElement.blur();
				if (code === 4001) {
					token = fun1() 
				} else {
					token = token
				}
				$.ajax({
                    url: much+"/api.php/Trend/market/access_token/"+token,
                    data:{
                    	'search':my_data,
                    	"uid":uid,
                    	"limit":50
                    },
                    type:'POST',
                    async:true,
					dataType:"json",
                    success:function(messg1){
						
						$(".menu_li1 li").remove();
						
//						console.log(1);
						var arr=messg1.data.lists;
						var color="";
						for(var i=0;i<arr.length;i++){
							
							if(arr[i].rose>0){
								color = "color:green"
							}else if(arr[i].rose<0){
								color = "color: #ff3e3e"
							}else{
								color = "color:orange"
							}
							
							var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="'+arr[i].is_collection+'" id="'+arr[i].id+'"><img src="img/shou-cang.png" class="img1"/><img src="img/xing.png" class="img2"/></p></li>';;
							
							$(".menu_li1").append(str1);
							
						}
						$(".false .img2").hide();
						$(".true .img1").hide();
						$(".input1").val("");
					}
                });
		    document.activeElement.blur();//软键盘收起
		}
		
		
		$("body").on("click",".ture2",function(){
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
//					console.log(messg2.code)
					if(messg2.code==200){
						th.parent().remove();
					}
				}
			})
		})
		//tab1收藏
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
		})
		
		//tab收藏
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
					
//					console.log(mess.data.lists);
					
					var arr=mess.data.lists;
					
					
					
					var color="";
					for(var i=0;i<arr.length;i++){
						
						if(arr[i].rose>0){
//							console.log(1)
							color = "color:green"
						}else if(arr[i].rose<0){
//							console.log(2)
							color = "color: #ff3e3e"
						}else{
//							console.log(3)
							color = "color:orange"
						}
						
						var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="true1" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';
						
						
						$(".menu_li2").append(str1);
					}
					$(".true1 .img1").hide();
					
				}
			})
		})
		
		
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
//					console.log(messg2.code)
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
					console.log(messg2)
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
//		$(document).on('click','.true2',function(){
//			var tid=$(this).attr("id");
//			var th=$(this);
//			$.ajax({
//				url:much+"/api.php/Quotation/cancelCollection",
//				type: 'POST',
//				async:true,
//				dataType:"json",
//				data:{
//					"uid":uid,
//					"tid":tid
//				},
//				success:function(messg2){
//					console.log(messg2.code)
//					if(messg2.code==200){
//						th.parent().remove();
//					}
//				}
//			})
//			
//		});
		
		//tab2搜索
//		document.onkeydown=function(e){
//			var ev=document.all?window.event:e;
//			if(ev.keyCode==13){
//				var my_data=$(".input2").val();
//				my_data=escape(my_data)+"";
//				$.ajax({
//                  url: much+"/api.php/Quotation/lists/p/1",  
//                  data:{
//                  	search:my_data,
//                  	"uid":uid,
//                  	"limit":50
//                  },
//                  type:'post',
//                  async:true,
//					dataType:"json",
//                  success:function(messg1){
//						
//						$(".menu_li2 li").remove();
//						
//						console.log(1);
//						var arr=messg1.data.lists;
//						var color="";
//						for(var i=0;i<arr.length;i++){
//							
//							if(arr[i].rose>0){
//								color = "color:green"
//							}else if(arr[i].rose<0){
//								color = "color: #ff3e3e"
//							}else{
//								color = "color:orange"
//							}
//							
//							var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="ture1" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';;
//							
//							$(".menu_li2").append(str1);
//							$(".true1 .img1").hide();
//							
//						}
//						
//					}
//              });
//				
//			}
//		}
		
		$(".two_header_hq img").click(function(){
			$(this).hide();
			$(".two_header_hq p").hide();
			$(".two_header_hq input").show();
			$(".two_header_hq span").show();
		});
		
		//tab2取消搜索
		$(".two_header_hq span").click(function(){
			$(this).hide();
			$(".two_header_hq input").hide();
			$(".two_header_hq p").show();
			$(".two_header_hq img").show();
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
//					console.log(mess.data.lists);
					var arr=mess.data.lists;
					$(".menu_li2 li").remove();
					var color="";
					for(var i=0;i<arr.length;i++){
						
						if(arr[i].rose>0){
//							console.log(1)
							color = "color:green"
						}else if(arr[i].rose<0){
//							console.log(2)
							color = "color: #ff3e3e"
						}else{
//							console.log(3)
							color = "color:orange"
						}
						
						var str1='<li><p>'+arr[i].abbreviation+'</p><p>'+arr[i].price+'</p><p>￥'+arr[i].turnover+'</p><p style="'+color+'">'+arr[i].rose+'%</p><p class="true1" id="'+arr[i].tid+'"><img src="img/xing.png" class="img2"/></p></li>';
						
						
						$(".menu_li2").append(str1);
					}
					$(".true1 .img1").hide();
					
				}
			})
		});
		
		$(".one_header_hq img").click(function(){
			$(this).hide();
			$(".one_header_hq p").hide();
			$(".one_header_hq input").show();
			$(".one_header_hq span").show();
		});
		
		//tab1取消搜索
		$(".one_header_hq span").click(function(){
			$(this).hide();
			$(".one_header_hq input").hide();
			$(".one_header_hq p").show();
			$(".one_header_hq img").show();
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
					"p":1,
					"limit":3000
				},
				success:function(messg){
					var arr2=messg.data.lists;
					var color="";
					$(".menu_li1 li").remove();
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
		});
	})
	function GetQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return unescape(r[2]);
	    return null;
	}
	
</script>