const xhr = new XMLHttpRequest();

xhr.open('GET', '/response.json');
xhr.setRequestHeader('Accept', 'application/json'); //if the same data is available in multiple formats, tell tha you want json
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();
xhr.onload = () => {
    // do something with the response
    if (xhr.status === 200) {
    	console.log(xhr.readyState);
    	console.log(xhr.response);
    	console.log(xhr.responseText);
    	console.log(xhr.responseType);
    	console.log(xhr.responseURL);
    	console.log(xhr.responseXML);
    	console.log(xhr.status);
    	console.log(xhr.statusText);
    	console.log(xhr.timeout);
    	console.log(xhr.upload);
    	console.log(xhr.withCredentials);
        console.log(JSON.parse(xhr.response).data);
        console.log(xhr.getResponseHeader('Content-Type'));
    }
};