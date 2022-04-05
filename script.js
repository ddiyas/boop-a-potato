var counter = 0;
const button = document.getElementById('logo');

function pop () {
    document.getElementById('counter').innerText = "boop count: " +  ++counter;
};