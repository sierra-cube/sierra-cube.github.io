(function($) {

	$.fn.carousel = function() {
		var $ArrowLeft = $( 'div.carousel-arrow.left' );
		var $ArrowRight = $( 'div.carousel-arrow.right');
		var $List = $('.carousel-list');
		var $Hider = $('.carousel-hider');
		var $Position = 0;
		var $Count = $List.children().length;
		var $Trigger = 1;

		function slideLeft() {
			if ($Trigger == 1) {} else {
				if ($Position == 0) {
					$Position += 110;
					$List.animate({left: $Position + 'px'}, 200);
					$Position -= 110;
					$List.animate({left: $Position + 'px'}, 200);
					$Trigger = 1;
					$ArrowLeft.fadeTo(200, 0);
					$ArrowLeft.removeClass('c-a');
					}  else {
					$Trigger = 0;
					$Position += 110;
					$List.animate({left: $Position + 'px'}, 200);
					$ArrowRight.fadeTo(200, 1);
					$ArrowRight.addClass('c-a');
				}
			}
		}
		function slideRight() {
			var k = parseInt($Hider.css('width'));
			if ($Trigger == 2) {} else {	
				if (Math.abs($Position) > ($Count*110 - k - 20)) {
					$Position -= 110;
					$List.animate({left: $Position + 'px'}, 200);
					$Position += 110;
					$List.animate({left: $Position + 'px'}, 200);
					$Trigger = 2;
					$ArrowRight.fadeTo(200, 0);
					$ArrowRight.removeClass('c-a');
				} else {
					$ArrowLeft.addClass('c-a');
					$ArrowLeft.fadeTo(200, 1);
					$Trigger = 0;
					$Position -= 110;
					$List.animate({left: $Position + 'px'}, 200);
				}
			}
		}


		$ArrowLeft.on('click', slideLeft);
		$ArrowRight.on('click', slideRight);
	return this;	
	};

})(jQuery);