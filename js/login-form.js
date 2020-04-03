const form = document.getElementById('login');

form.addEventListener('submit', (event) => {
    const xhr = new XMLHttpRequest(),
        model = {
           username: document.getElementById('username').value,
           password: document.getElementById('password').value
        };
    xhr.open('POST', '/signin');
    xhr.send(JSON.stringify(model));

    //to stop reloading of the page
    event.preventDefault();
});