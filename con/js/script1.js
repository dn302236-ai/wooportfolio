		$(document).ready(function(e){
			//nav 제이쿼리 하위메뉴 클릭하면 나오는 메뉴
			$("#lnb > ul > li > a").on("click",function(e){
				$("#lnb > ul > li .sub").stop().slideUp();
				$(this).next().stop().slideDown();
				$(this).next().find("a").on("mouseenter",function(e){
					//$(this).animate({textIndent:0},{duration:100})
					TweenMax.to($(this),0.2,{textIndent:0})
				})
				$(this).next().find("a").on("mouseleave",function(e){
					TweenMax.to($(this),0.2,{textIndent:0})
				})
				return false;
			})
			jQuery(function() {
				jQuery( "#button" ).toggle(
					function() {
						jQuery( "#toggle" ).animate({left: .0}, 500 );
						jQuery( "#button" ).css({"background":"url(button2.png)",left:140});
					},
					function() {
						jQuery( "#toggle" ).animate({left: '-180px'}, 500 );
						jQuery( "#button" ).css({"background":"url(button1.png)",left:190});
					}
				);
			});
		});
	
