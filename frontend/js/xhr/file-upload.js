(function() {
	'use strict'

	const form = document.getElementById('upload');

	function uploadFile(event) {
		const xhr = new XMLHttpRequest(),
			formData = new FormData(),
			files = document.getElementById('fileToUpload').files,
			progressBar = document.getElementById('uploadProgress');

		//do not run function when no file is chosen
		if (!files.length) {
			event.preventDefault();
			return;
		}

		for (let i=0; i<files.length; i++) {
			formData.append('file', files[i], files[i].name);
		}

		xhr.upload.onprogress = (e) => {
			if (e.lengthComputable) {
				progressBar.value = (e.loaded / e.total) * 100;
			}
		}

		xhr.open('POST', '/upload');
		xhr.send(formData);

		event.preventDefault();
	}

	form.addEventListener('submit', uploadFile);
})();