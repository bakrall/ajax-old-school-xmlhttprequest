const url = 'response.json';

fetch(url)
.then(data => data.json())
.then(res => console.log(res));