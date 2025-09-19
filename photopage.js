const urlParams = new URLSearchParams(window.location.search);
const paramsObject = Object.fromEntries(urlParams.entries());

console.log(paramsObject); 