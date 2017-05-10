$(function(){
	var elem = $('.titleBox__title');
	// console.log($('p'));
	elem.on('click', function(){
		var id = $(this).attr('id');
		var text = $('p#'+id);
		if ($(this).attr('class') == 'titleBox__title titleBox__title--active') {
			text.toggle();
			$(this).toggleClass('titleBox__title--active');
		} else {
		elem.removeClass('titleBox__title--active');
		$(this).addClass('titleBox__title--active');
		$('p').hide();
		text.show();
		}
	})

})