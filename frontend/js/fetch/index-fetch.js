(function() {
	'use strict'

	const url = 'response.json',
	options = {
		headers: {
			'Accept': 'application/json',
			'X-Requested-With': 'XMLHttpRequest'
		},
	}

	//Using fetch even if the call fails, it fetch() will still treat it like a success.
	//To make the call work as expected - check if response.ok is true
	//https://gomakethings.com/why-i-still-use-xhr-instead-of-the-fetch-api/

	fetch(url, options)
	.then(response => {
		if (response.ok) {
			console.log(response.headers.get('Content-Type'));
			return response.json();
		} else {
			return Promise.reject({
				status: response.status,
				statusText: response.statusText
			});
		}
	})
	.then(data => console.log('success', data))
	.catch(error => console.log('error', error));

})();