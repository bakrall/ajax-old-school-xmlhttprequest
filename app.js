const express = require('express'),
	app = express();

app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('frontend'));
app.use(express.json()); //parses data passed to body

app.post('/signin', (request, response) => {
	const data = request.body;

	response.json({
		status: 'success'
	});
});