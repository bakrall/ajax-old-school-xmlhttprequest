(function() {
	'use strict'

	const form = document.getElementById('login');

	form.addEventListener('submit', (event) => {
		const username = document.getElementById('username').value,
		password = document.getElementById('password').value,
		loginData = {
			username,
			password
		},
		url = '/signin',
		options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginData)
		};

		fetch(url, options)
		.then(response => {
			if (response.ok) {
				console.log(response.json());
				response.json();
			} else {
				return Promise.reject({
					status: response.status,
					statusText: response.statusText
				})
			}
		})
		.then(data => console.log('success', data))
		.catch(error => console.log('error', error));

		event.preventDefault();
	});
})();