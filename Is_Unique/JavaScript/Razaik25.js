
// ======= Razaik25's Solution ====== //
function isUnique(input) {
  if (typeof(input) === 'string') input = input.toLowerCase().split(''); // if input is string split it into an array
  var temp,count = 0;
  for( var i =0; i<input.length; i++){
    if(temp === input[i]) {   // comparing the current value of input with the previous value 
      count++;
      return `${temp} repeats`;
    }
    temp = input[i]; // storing the previous value of input
  }
  if (count === 0) return `all characters unique`;
}

// test cases
isUnique('hello');
isUnique([1,2,3]);
