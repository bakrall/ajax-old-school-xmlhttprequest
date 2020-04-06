(function() {
	'use strict'

	const form = document.getElementById('upload');

	form.addEventListener('submit', uploadFile);

	function uploadFile(event) {
		const files = document.querySelector('input[type="file"]').files,
			formData = new FormData();

		event.preventDefault();

		if (!files.length) {
			return;
		}

		formData.append('file', files[0]);

		fetch('/upload', {
			method: 'POST',
			body: formData
		})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject({
					status: response.status,
					statusText: response.statusText
				});
			}
		})
		.then(result => console.log('success', result))
		.catch(error => console.log('error', error));
	}
})();