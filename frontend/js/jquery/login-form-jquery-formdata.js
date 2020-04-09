(function($){
	'use strict';

	const $confirmationMessage = $('.confirmation-message');

	$('#login').on('submit', function(event) {
		const $loginInputs = $(this).find('input'),
			formData = new FormData();

		$loginInputs.each(function(index, input) {
			formData.append(input.id, input.value);
		});

		const jqxhr = $.ajax({
			type: 'POST',
			url: '/signin',
			data: formData,
			processData: false, //stop jQuery from trying to add the FormData object to the query string of the URL
			success: function(response) {
				console.log(response);
			}
		})
		.done(function() {
			$confirmationMessage.text(JSON.parse(jqxhr.responseText).status);
		})

		event.preventDefault();
	})
})(jQuery);