$(function(){
	linum = $('.mainlist li').length;//图片数量
	w = linum/2 * 232;//ul宽度
	$('.piclist').css('width', w + 'px');//ul宽度
	$('.swaplist').html($('.mainlist').html());//复制内容
	
	$('.og_next').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '928px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 928 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-928)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '928px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 928 + 'px'},'slow');//交换图片滚动
				if(sl==(w-928)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 928 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist').animate({left: (w - 928) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist').css({left: (w - 928) * -1 + 'px'});
				$('.swaplist').animate({left: sl + 928 + 'px'},'slow');
				if(sl==0){
					$('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	});
	
	$('.goodlist').hover(function(){
		$('.exchange',this).show();
	},function(){
		$('.exchange',this).hide();
	}); 
});