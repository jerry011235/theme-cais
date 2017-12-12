(function ($) {

	$(document).ready(function() {

		$('pre').each(function (i, block) {
			hljs.highlightBlock(block);
		})

		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block);
		})

	})
})($)