(function($){
	'use strict';

	$('#login').on('submit', function(event) {
		const $loginInputs = $(this).find('input'),
			formData = new FormData();

		$loginInputs.each(function(index, input) {
			formData.append(input.id, input.value);
		});

		$.ajax({
			type: 'POST',
			url: '/signin',
			data: formData,
			processData: false, //stop jQuery from trying to add the FormData object to the query string of the URL
			success: function(response) {
				console.log(response);
			}
		});

		event.preventDefault();
	})
})(jQuery);