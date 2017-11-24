$( document ).ready(function() {
	//Appending aditional Class in order to handle first element for different tabs groups
	var i = 0;
	$(".tx-tabs-red").each(function() { 
		i++;
  		$(this).addClass('red' + i);
	});
	i = 0;
	$(".tx-tabs-blue").each(function() { 
		i++;
  		$(this).addClass('blue' + i);
	});
	i = 0;
	$(".tx-tabs-grey").each(function() { 
		i++;
  		$(this).addClass('grey' + i);
	});
	//Hidding content and showing first element of each tabs group
	i = 0;
	$(".tx-tabs-red").each(function() { 
		i++;
  		$('.red' + i + '> .tx-tabs-content > ul > li').hide();
		$('.red' + i + '> .tx-tabs-content > ul > li').first().show();
	});

	i = 0;
	$(".tx-tabs-blue").each(function() { 
		i++;
  		$('.blue' + i + '> .tx-tabs-content > ul > li').hide();
		$('.blue' + i + '> .tx-tabs-content > ul > li').first().show();
	});


	i = 0;
	$(".tx-tabs-grey").each(function() { 
		i++;
  		$('.grey' + i + '> .tx-tabs-content > ul > li').hide();
		$('.grey' + i + '> .tx-tabs-content > ul > li').first().show();
	});
	//Setting first tab as selected
	i = 0;
	$(".tx-tabs-red").each(function() { 
		i++;
  		$('.red' + i + '> .tx-tabs-tabs > .tx-tab').first().addClass('tx-tab-red-active');
	});
	i = 0;
	$(".tx-tabs-blue").each(function() { 
		i++;
  		$('.blue' + i + '> .tx-tabs-tabs > .tx-tab').first().addClass('tx-tab-blue-active');
	});
	i = 0;
	$(".tx-tabs-grey").each(function() { 
		i++;
  		$('.grey' + i + '> .tx-tabs-tabs > .tx-tab').first().addClass('tx-tab-grey-active');
	});


	
	$( '.tx-tab' ).on('click',function(){
		var index = $('.tx-tabs-red > .tx-tabs-tabs > .tx-tab').index(this)+1;
		var className =$(this).parent().parent().attr('class');
		var classNameTab = '.' +className.split(' ')[1];
		className = className.split(' ')[0];	
		index = $(classNameTab + ' > .tx-tabs-tabs > .tx-tab').index(this)+1;
	  	
		if(className == 'tx-tabs-red'){
			var index = $('.tx-tabs-red > .tx-tabs-tabs > .tx-tab').index(this)+1;
			$(this).parent().find('.tx-tab').removeClass('tx-tab-red-active');
			$(this).addClass('tx-tab-red-active');
		}else if(className == 'tx-tabs-grey'){
			var index = $('.tx-tabs-grey > .tx-tabs-tabs > .tx-tab').index(this)+1;
			$(this).parent().find('.tx-tab').removeClass('tx-tab-grey-active');
			$(this).addClass('tx-tab-grey-active');
		}else if(className == 'tx-tabs-blue'){
			var index = $('.tx-tabs-blue > .tx-tabs-tabs > .tx-tab').index(this)+1;
			$(this).parent().find('.tx-tab').removeClass('tx-tab-blue-active');
			$(this).addClass('tx-tab-blue-active');
		}
		alert(classNameTab);
		$(classNameTab + ' > .tx-tabs-content > ul > li').hide();
		$(classNameTab + ' > .tx-tabs-content > ul > li:nth-of-type(' + index + ')').show();
	});

});