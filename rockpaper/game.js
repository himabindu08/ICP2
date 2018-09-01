function game() {
    var number = prompt("Please enter your number");
    var random = Math.floor((Math.random() * 5) + 1);
    if (number == random) {
        document.getElementById('OUTPUT').innerHTML = 'WIN!!!!!!';
    }
    else {
       game();
    }
}
game();