(function() {
	'ust strict';

	const form = document.getElementById('login');

	function submitData(event) {
		const xhr = new XMLHttpRequest(),
			formData = new FormData(),
			username = document.getElementById('username').value,
			password = document.getElementById('password').value;

		formData.append('username', username);
		formData.append('password', password);

		xhr.open('POST', '/signin');
		xhr.send(formData);

		event.preventDefault();
	}

	form.addEventListener('submit', submitData);
})();