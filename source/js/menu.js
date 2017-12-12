(function ($) {

	var inMenu = false
	var duration = 800
	var closeTimer = null

	$('#menu-toggle').on('mouseover', function (event) {
		if(closeTimer) {
			clearTimeout(closeTimer)
		}
		if(!$('#menu-content').hasClass('display')) {
			$('#menu-content').addClass('display')
		}
	}).on('mouseout', function (event) {
		if(!inMenu) {
			closeTimer = setTimeout(function () {
				$('#menu-content').removeClass('display')
			}, duration)
		}
	}).on('click', function (event) {
		clearTimeout(closeTimer)
		$('#menu-content').removeClass('display')
	})

	$('#menu-content a').on('mouseover', function (event) {
		if(!inMenu) {
			inMenu = true
			clearTimeout(closeTimer)
		}
	}).on('mouseout', function (event) {
		if(inMenu) {
			inMenu = false
			closeTimer = setTimeout(function () {
				$('#menu-content').removeClass('display')
			}, duration)
		}
	})

})($);