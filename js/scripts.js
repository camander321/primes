
function primes(max) {
  var numbers = [];
  for (var i = 2; i <= max; i++) {
    numbers.push(i);
  }

  for (var i = 2; i < numbers.length; i++) {
    numbers = numbers.filter(function(number) {
      return number % i !== 0 || number === i;
    });
  }

  console.log(numbers);
}


$(document).ready(function() {

  var max = parseInt(prompt("Enter a number..."));
  primes(max);
});
