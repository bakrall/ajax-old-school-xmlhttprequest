var xhr = new XMLHttpRequest();
xhr.onload = function () {
    // do something with the response
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response).data);
    }
};
xhr.open('GET', '/response.json');
xhr.send();