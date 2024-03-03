const tokenLocation = document.getElementById('token');
const params = new URLSearchParams(window.location.search);

const code = params.get("code");

console.log(code);

tokenLocation.innerHTML = code;
