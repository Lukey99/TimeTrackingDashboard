var requestURL = 'http://127.0.0.1:3000/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();