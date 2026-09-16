var count = 0;

var button_increment = document.getElementById('increment');
var button_decrement = document.getElementById('decrement');
var button_reset = document.getElementById('reset');
var timer = document.getElementById('timer');

button_increment.onclick = function () {
    count++;
    timer.innerHTML = count;
};

button_decrement.onclick = function () {
    count--;
    timer.innerHTML = count;
};

button_reset.onclick = function () {
    count = 0;
    timer.innerHTML = count;
};
